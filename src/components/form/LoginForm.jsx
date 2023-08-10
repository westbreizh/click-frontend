import { useState } from "react"
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useStore } from "react-redux"
import { Input, InputAdornment, IconButton, styled } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import ModalResetPassword from '../modal/modalReset/ModalResetPassword'
import { shemaInputLogin } from '../../Utils/shemaInput'
import {connectedToggle, setUserInfo, setUserAddress, setToken} from '../../store/userSlice'


export default function LoginForm( props ) {

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

  // gestion de l'affichage de l'erreur backend dans la balise p
  const [isPErrorFromBackEndOpen, setShowErrorFromBackEnd] = useState(false) ;
  const showPErrorFromBackend = () => {
   setShowErrorFromBackEnd( true );
 };

  // gestion de l'affichage du mot de passe
  const [showPassword, setShowPassWord] = useState(false) ;
  const handleClickShowPassword = () => {
    setShowPassWord( !showPassword );
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // gestion du contôle de la validité des inputs 
  const { register , formState, handleSubmit,   formState: { errors }  } =
   useForm({
    resolver: yupResolver(shemaInputLogin),
    mode: 'onTouched',
    shouldFocusError: true,
  });

  const { isValid} = formState;

   // gestion de la valeure de la réponse backend 
   const [messageFromBackEnd, setMessageFromBackend] = useState("") ;
   function changeMessageFromBackEnd(messageFromBack) {
     setMessageFromBackend(messageFromBack);
   }

  const store = useStore()


  // gestion de l'ouverture du modale de réinitialisation du mot de passe
  const [isModalResetPasswordOpen, setModalResetPasswordOpen] = useState(false) ;
  const showModalResetPassword = () => {
    setModalResetPasswordOpen(true);
  };
  const closeModalResetPassword = function(){
    setModalResetPasswordOpen(false);
  };


  const closeModalConnexion = props.closeModalConnexion

  //fonction asynchrone vers le backend verifiant l'email et le mot de passe associé
  //dans un second temps on recupère les informations utilisateurs et on les enregistre dans le store

  const onSubmit = async function (data) {

    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/user/login`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({email: data.email, password: data.password}),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          changeMessageFromBackEnd(result.message);
          showPErrorFromBackend();

          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        store.dispatch(setUserInfo(result.userInfo));
        console.log("userInfo", result.userInfo)
        store.dispatch(setUserAddress(result.userAddress));
        store.dispatch(connectedToggle());
        store.dispatch(setToken(result.token))
        closeModalConnexion(); 
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


  return (

    <form onSubmit={handleSubmit(onSubmit)} className="form-modal">

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

        <div className="reset-password-link" onClick={showModalResetPassword}>
          Mot de passe oublié ?
        </div>

      {isModalResetPasswordOpen ?  
        <ModalResetPassword
        closeModalResetPassword = {closeModalResetPassword}
        closeModalConnexion = {closeModalConnexion}
        />
        :""}

      <p className="input__error">{errors.password?.message}</p>
      {isPErrorFromBackEndOpen ?  
        <p className="input__error message__error">{messageFromBackEnd}</p>
        :""}


      <div className="submit-wrapper-connexion">

        <button 
        disabled={ !isValid} 
        type="submit" 
        className={isValid ? "btn btn-blue" : "btn btn-blue-invalid"}  
        >
          connexion
        </button>

      </div> 

    </form>


  )
}