import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStore } from "react-redux";
import {Input,InputAdornment, IconButton, styled,TextField,} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ModalResetPassword from "../modal/modalReset/ModalResetPassword";
import { shemaInputLogin } from "../../Utils/shemaInput";
import {connectedToggle, setUserInfo } from "../../store/userSlice";
import { resetStringFromShopChoice } from "../../store/cartSlice";
import { setXsrfToken } from "../../store/xsrfTokenSlice"; 

// Votre style personnalisé pour le champ de texte
const CustomTextField = styled(TextField)(({ theme }) => ({
}));
const CustomInput = styled(Input)(({ theme }) => ({
  appearance: "none !important",
  display: "flex",
  fontSize: "1.5rem",
  fontWeight: "bolder",
  backgroundColor: "#e7e4e4 !important",
  border: "none !important",
  minHeight: "4.4rem",
  padding: "0 1.6rem",
  borderRadius: "1rem !important",
  maxWidth: "40rem",
  whiteSpace: "normal",
  overflow: "hidden",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  textOverflow: "ellipsis",
  outline: "none",
  "&:before": {
    content: "none",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "none",
    "&:after": {
      content: "none",
    },
  },
}));

export default function LoginForm(props) {

  const closeModalConnexion = props.closeModalConnexion;

  const [showPassword, setShowPassWord] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassWord(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


//gestion de la validité des saisie par yup
  const {
    register,
    formState,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shemaInputLogin),
    mode: "onTouched",
    shouldFocusError: true,
  });
  const { isValid } = formState;

//gestion de l'affichage des erreus venant du backend
  const [isPErrorFromBackEndOpen, setShowErrorFromBackEnd] = useState(false);
  const showPErrorFromBackend = () => {
    setShowErrorFromBackEnd(true);
  };
  const [messageFromBackEnd, setMessageFromBackend] = useState("");
  function changeMessageFromBackEnd(messageFromBack) {
    setMessageFromBackend(messageFromBack);
  }

//gestion de l'ouverture des modales
  const [isModalResetPasswordOpen, setModalResetPasswordOpen] = useState(false);
  const showModalResetPassword = () => {
    setModalResetPasswordOpen(true);
  };
  const closeModalResetPassword = function () {
    setModalResetPasswordOpen(false);
  };

  const store = useStore();
  const navigate = useNavigate()

  const onSubmit = async function (data) {
    try {
      const response = await fetch(
        "https://click-backend.herokuapp.com/api/user/login",
        {
          mode: "cors",
          method: "POST",
          credentials: 'include',
          body: JSON.stringify({ email: data.email, password: data.password }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        const result = await response.json();
        console.log("result", result);
        changeMessageFromBackEnd(result.message);
        showPErrorFromBackend();
        throw new Error(` ${result.message}`);
      } else {
        const result = await response.json();
        store.dispatch(setUserInfo(result.userInfo));
        console.log("userInfo", result.userInfo);
        const userRole =  result.userInfo.userRole;
        store.dispatch(connectedToggle());
        store.dispatch(resetStringFromShopChoice(result.userInfo.stringInfo));
        localStorage.setItem('xsrfToken', result.xsrfToken);
        store.dispatch(setXsrfToken(result.xsrfToken));
        closeModalConnexion();
        if (userRole === 'stringer'){
          navigate("/cordeur_raquettes-à-corder")
        }
      }
    } catch (err) {
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

  
  return (

    <form onSubmit={handleSubmit(onSubmit)} className="form-modal">
      <label className="input__label"> Email </label>
      <input
        type="email"
        {...register("email")}
        className="input__text"
        autoComplete="email"
      />
      <p className="input__error">{errors.email?.message}</p>

      <label className="input__label"> Mot de passe </label>

      <CustomInput
        type={showPassword ? "text" : "password"}
        {...register("password")}
        autoComplete="current-password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? (
                <Visibility className="eye" />
              ) : (
                <VisibilityOff className="eye" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />

      <div className="reset-password-link" onClick={showModalResetPassword}>
        Mot de passe oublié ?
      </div>

      {isModalResetPasswordOpen ? (
        <ModalResetPassword
          closeModalResetPassword={closeModalResetPassword}
          closeModalConnexion={closeModalConnexion}
        />
      ) : (
        ""
      )}

      <p className="input__error">{errors.password?.message}</p>
      {isPErrorFromBackEndOpen ? (
        <p className="input__error message__error">{messageFromBackEnd}</p>
      ) : (
        ""
      )}

      <div className="submit-wrapper-connexion">
        <button
          disabled={!isValid}
          type="submit"
          className={isValid ? "btn btn-blue" : "btn btn-blue-invalid"}
        >
          connexion
        </button>
      </div>
    </form>
  );
}
