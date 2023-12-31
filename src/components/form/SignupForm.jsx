import { useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { shemaInputSignup } from "../../Utils/shemaInput"
import { Link } from "react-router-dom" 
import { useState } from 'react'
import { useStore } from "react-redux"
import {connectedToggle, setUserInfo} from '../../store/userSlice'
import { Input, InputAdornment, IconButton, styled } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { setXsrfToken } from "../../store/xsrfTokenSlice"; 
//civilite: data.civilite,

export default function SignupForm(props) {

  const showModal = props.showModal

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

  // gestion 
  const { register , formState, handleSubmit,   formState: { errors }  } =
   useForm({
    resolver: yupResolver(shemaInputSignup),
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
  // gestion de l'affichage de l'erreur backend dans la balise p 
  const [messageFromBackEnd, setMessageFromBackend] = useState("hello") ;
  function changeMessageFromBackEnd(x) {
    setMessageFromBackend(x);
  }
  const [isPErrorFromBackEndOpen, setShowErrorFromBackEnd] = useState(false) ;
  const showPErrorFromBackend = () => {
    setShowErrorFromBackEnd( true );
  };
 

  //fonction asynchrone vers le backend enregistrant l'utilisateur
  const onSubmit = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/user/signup`, {
        mode: "cors",
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({ lastname: data.lastname, forename: data.forename, email: data.email, 
          password: data.password,telephone: data.telephone.replace(/(\d{2})(?=\d)/g, '$1 ')}),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          changeMessageFromBackEnd(result.message);
          showPErrorFromBackend();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json(); 
        store.dispatch(setXsrfToken(result.xsrfToken)); 
        console.log("xsfrToken après inscription",result.xsrfToken); 
        localStorage.setItem('xsrfToken', result.xsrfToken);
        store.dispatch(connectedToggle());
        store.dispatch(setUserInfo(result.userInfo));
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

  // gestion du store redux en asynchrone
   const store = useStore()
  

  return (

    <form onSubmit={handleSubmit(onSubmit)} className="form__wrapper">
    



      <label className="input__label" > Nom <sup>*</sup> </label>
      <input  type ="text" {...register("lastname")} className="input__text" autoComplete="family-name"  />
      <p className="input__error">{errors.lastname?.message}</p>


      <label htmlFor="forename"  className="input__label" > Prénom <sup>*</sup> </label>
      <input  type ="text" {...register("forename")} className="input__text" autoComplete="forename" id="forename" name="forename" />
      <p className="input__error">{errors.forename?.message}</p>


      <label className="input__label"> Email <sup>*</sup>  </label>
      <input type="email" {...register("email")} className="input__text" autoComplete="email" />
      <p className="input__error">{errors.email?.message}</p>

      <label className="input__label"> Mot de passe <sup>*</sup> </label>

      <CustomInput
        type={showPassword ? 'text' : 'password'}
        {...register('password')}
        autoComplete="new-password"
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
        autoComplete ="new-password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowConfirmPassword} onMouseDown={handleMouseDownPassword}>
              {showConfirmPassword ? <Visibility className="eye" /> : <VisibilityOff className="eye" />}
            </IconButton>
          </InputAdornment>
        }
      />

      <p className="input__error">{errors.passwordConfirm?.message}</p>


      <label className="input__label"> Numéro de téléphone   </label>
      <input type="tel"  {...register('telephone')} className="input__text" autoComplete="tel"  />
      <p className="input__error">{errors.telephone?.message}</p>  




      {isPErrorFromBackEndOpen ?  
      <p className="input__error message__error">{messageFromBackEnd}</p>
      :""}

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



