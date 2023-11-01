"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalValidationMessageRestPassword;
var _reactDom = require("react-dom");
var _reactRouterDom = require("react-router-dom");
function ModalValidationMessageRestPassword(props) {
  var closeModalConnexion = props.closeModalConnexion;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var goToHomeAndcloseModals = function goToHomeAndcloseModals() {
    closeModalConnexion();
    navigate("/");
  };
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "modal__title"
  }, " R\xE9initialisation du mot de passe ")), /*#__PURE__*/React.createElement("div", {
    className: "modal__body modal__body-reset-password-validation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__reset-password-wrapper"
  }, /*#__PURE__*/React.createElement("p", {
    className: "reset-password-indication"
  }, "Un email avec les instructions \xE0 suivre pour modifier votre mot de passe vous a \xE9t\xE9 envoy\xE9 \xE0 votre addresse e-mail. Si vous ne recevez pas l'e-mail rapidement, consultez votre dossier de courrier ind\xE9sirable.."), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      goToHomeAndcloseModals();
    },
    className: "btn btn-blue "
  }, "ok"))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop fade show"
  })), document.getElementById('portal2'));
}