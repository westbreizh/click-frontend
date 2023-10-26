import { useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { shemaInputResetPassword } from "../../Utils/shemaInput"
import { Link, useParams} from "react-router-dom" 
import { useState } from 'react'
import { useStore } from "react-redux"
import { Input, InputAdornment, IconButton, styled } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'


export default function NewPasswordForm(props) {

  const showModal = props.showModal

  // on récupère l'id dans l'url de la page
  const paramsUrl = useParams();
  const userId = paramsUrl.id.split('=')[1];
  const token = paramsUrl.token.split('=')[1];

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


//gestion de la validité des saisie par yup
  const { register , formState, handleSubmit,  formState: { errors }  } =
   useForm({
    resolver: yupResolver(shemaInputResetPassword),
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
 
   // gestion du store redux en asynchrone
   const store = useStore()

  //fonction asynchrone vers le backend qui réanitialise le mot de passe
  const onSubmit = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/user/saveResetPassword`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ newPassword: data.password, userId: userId, resetToken: token}),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          changeMessageFromBackEnd(result.message);
          showPErrorFromBackend();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        console.log(result.message)
        showModal();
      }
    }
    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


 // console.log("userId", userId);
 // console.log("token", token);

  
  return (


    <form onSubmit={handleSubmit(onSubmit)} className="form__wrapper">
    

      <label className="input__label">Nouveau mot de passe <sup>*</sup> </label>

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

      <label className="input__label"> Confirmation du mot de passe <sup>*</sup> </label>

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

      <div className="buttons-wrapper-signup">

        <button 
        disabled={ !isValid} 
        type="submit" 
        className={isValid ? "btn btn-blue" : "btn btn-blue-invalid"}  
        >
          Modifier
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



