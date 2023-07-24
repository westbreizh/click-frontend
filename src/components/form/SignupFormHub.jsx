import { useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { shemaInputSignupHub } from "../../Utils/shemaInput"
import { Link } from "react-router-dom" 
import { useState } from 'react'
import { useStore } from "react-redux"
import {connectedToggle, setUserInfo, setToken} from '../../store/userSlice'
import { Input, InputAdornment, IconButton, styled } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'


export default function SignupFormHub(props) {


 // gestion du style de l'input mui material
  const CustomInput = styled(Input)(({ theme }) => ({
    appearance: 'none !important',
    display: 'flex',
    fontSize: '1.5rem',
    fontWeight: 'bolder',
    backgroundColor: '#e7e4e4 !important',
    border: 'none !important',
    minHeight: '4.4rem',
    padding: '0 1.6rem',
    borderRadius: '1rem !important',
    maxWidth: '40rem',
    whiteSpace: 'normal',
    overflow: 'hidden',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    textOverflow: 'ellipsis',
    outline: 'none', // Pour supprimer le contour de focus par défaut
    '&:before': {
      content: 'none',
    },
    '&:focus': {
      outline: 'none', // Pour supprimer le contour de focus par défaut
      boxShadow: 'none', // Pour supprimer l'ombre de focus par défaut
      '&:after': {
        content: 'none',
      },
    }, 
  }));


  const showModal = props.showModal

  const { register , formState, handleSubmit,   formState: { errors }  } =
   useForm({
    resolver: yupResolver(shemaInputSignupHub),
    mode: 'onTouched',
    shouldFocusError: true,
    });
  const {isValid} = formState


  // gestion de l'affichage du mot de passe
  const [showPassword, setShowPassWord] = useState(false) ;
  const handleClickShowPassword = () => {
    setShowPassWord( !showPassword );
  };
  const [showConfirmPassword, setShowConfirmPassWord] = useState(false) ;
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassWord( !showConfirmPassword );
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // gestion de la valeure de la réponse backend 
  const [messageFromBackEnd, setMessageFromBackend] = useState("hello") ;
  function changeMessageFromBackEnd(x) {
    setMessageFromBackend(x);
  }

  // gestion de l'affichage de l'erreur backend dans la balise p
  const [isPErrorFromBackEndOpen, setShowErrorFromBackEnd] = useState(false) ;
  const showPErrorFromBackend = () => {
    setShowErrorFromBackEnd( true );
  };
 
   // gestion du store redux en asynchrone
   const store = useStore()

  //fonction asynchrone vers le backend enregistrant l'utilisateur
  const onSubmit = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/user/signupHub`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({enterprise_name: data.enterprise_name, referent_lastname: data.referent_lastname, referent_forename: data.referent_forename, email: data.email, password: data.password,
              telephone: data.telephone.replace(/(\d{2})(?=\d)/g, '$1 '), road: data.road, city: data.city, postal_code : data.postalCode.replace(/^(\d{2})(\d{3})$/, '$1 $2') }),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          changeMessageFromBackEnd(result.message);
          showPErrorFromBackend();
          throw new Error(` ${result.message}`);  
        }else {
        localStorage.clear();
        store.dispatch(connectedToggle());
        const result = await response.json();
        store.dispatch(setUserInfo(result.userInfo));
        store.dispatch(setToken(result.token));
        showModal();
        console.log(result.userInfo)
        console.log(result.message)
      }
    }
    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


  
  return (


    <form onSubmit={handleSubmit(onSubmit)} className="form__wrapper">
    

      <label className="input__label" > Nom société <sup>*</sup> </label>
      <input  type ="text" {...register("enterprise_name")} className="input__text"  />
      <p className="input__error">{errors.enterprise_name?.message}</p>

      <label className="input__label" > Nom référent </label>
      <input  type ="text" {...register("referent_lastname")} className="input__text"  />
      <p className="input__error">{errors.lastname?.message}</p>


      <label htmlFor="forename"  className="input__label" > Prénom référent  </label>
      <input  type ="text" {...register("referent_forename")} className="input__text" />
      <p className="input__error">{errors.forename?.message}</p>


      <label className="input__label"> Email <sup>*</sup>  </label>
      <input type="email" {...register("email")} className="input__text" />
      <p className="input__error">{errors.email?.message}</p>

      <label className="input__label"> Mot de passe <sup>*</sup> </label>

      <CustomInput
        type={showPassword ? 'text' : 'password'}
        {...register('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
              {showPassword ? <Visibility className="eye" /> : <VisibilityOff className="eye" />}
            </IconButton>
          </InputAdornment>
        }
      />

      <p className="input__error">{errors.password?.message}</p>

      <label className="input__label"> Confirmation de mot de passe <sup>*</sup> </label>

      <CustomInput
        type={showConfirmPassword ? 'text' : 'password'}
        {...register('passwordConfirm')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowConfirmPassword} onMouseDown={handleMouseDownPassword}>
              {showConfirmPassword ? <Visibility className="eye" /> : <VisibilityOff className="eye" />}
            </IconButton>
          </InputAdornment>
        }
      />

      <p className="input__error">{errors.passwordConfirm?.message}</p>


      {isPErrorFromBackEndOpen ?  
      <p className="input__error message__error">{messageFromBackEnd}</p>
      :""}

      <label className="input__label"> Numéro de téléphone   </label>
      <input type="tel"  {...register('telephone')} className="input__text"  />
      <p className="input__error">{errors.telephone?.message}</p>  

      <label className="input__label"> Adresse (nom et numéro de la voirie) <sup>*</sup> </label>
      <input type="text" {...register("road")} className="input__text" />
      <p className="input__error">{errors.road?.message}</p>

      <label className="input__label"> Ville <sup>*</sup> </label>
      <input type="text" {...register("city")} className="input__text" />
      <p className="input__error">{errors.city?.message}</p>

      <label className="input__label"> Code postal <sup>*</sup> </label>
      <input type="text" {...register("postalCode")} className="input__text" />
      <p className="input__error">{errors.postalCode?.message}</p>

      <div className="buttons-wrapper-signup">

        <button 
        disabled={ !isValid} 
        type="submit" 
        className={isValid ? "btn btn-blue" : "btn btn-blue-invalid"}  
        >
          créer un compte
        </button>

        <Link 
          to="/" 
          className={"btn btn-white-blue btn-last"}              
          >
          annuler
        </Link> 

      </div>

    </form>

  )
}



