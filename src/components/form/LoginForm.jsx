import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStore } from "react-redux";
import {
  Input,
  InputAdornment,
  IconButton,
  styled,
  TextField,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ModalResetPassword from "../modal/modalReset/ModalResetPassword";
import { shemaInputLogin } from "../../Utils/shemaInput";
import {
  connectedToggle,
  setUserInfo,
  setToken,
} from "../../store/userSlice";
import { resetStringFromShopChoice } from "../../store/cartSlice";

const CustomTextField = styled(TextField)(({ theme }) => ({
  // Votre style personnalisé pour le champ de texte
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
  const [isPErrorFromBackEndOpen, setShowErrorFromBackEnd] = useState(false);
  const showPErrorFromBackend = () => {
    setShowErrorFromBackEnd(true);
  };

  const [showPassword, setShowPassWord] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassWord(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

  const [messageFromBackEnd, setMessageFromBackend] = useState("");
  function changeMessageFromBackEnd(messageFromBack) {
    setMessageFromBackend(messageFromBack);
  }

  const store = useStore();

  const [isModalResetPasswordOpen, setModalResetPasswordOpen] = useState(false);
  const showModalResetPassword = () => {
    setModalResetPasswordOpen(true);
  };
  const closeModalResetPassword = function () {
    setModalResetPasswordOpen(false);
  };

  const closeModalConnexion = props.closeModalConnexion;



  const navigate = useNavigate()


  const onSubmit = async function (data) {
    try {
      const response = await fetch(
        "https://click-backend.herokuapp.com/api/user/login",
        {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({ email: data.email, password: data.password }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        const result = await response.json();
        changeMessageFromBackEnd(result.message);
        showPErrorFromBackend();
        throw new Error(` ${result.message}`);
      } else {
        const result = await response.json();
        store.dispatch(setUserInfo(result.userInfo));
        console.log("userInfo", result.userInfo);
        const userRole =  result.userInfo.userRole
        store.dispatch(connectedToggle());
        store.dispatch(setToken(result.token));
        store.dispatch(resetStringFromShopChoice(result.userInfo.stringInfo));
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
      />
      <p className="input__error">{errors.email?.message}</p>

      <label className="input__label"> Mot de passe </label>

      <CustomInput
        type={showPassword ? "text" : "password"}
        {...register("password")}
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
