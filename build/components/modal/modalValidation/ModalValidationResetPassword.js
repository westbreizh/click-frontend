"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalValidationResetPassword;
var _reactDom = require("react-dom");
var _reactRouterDom = require("react-router-dom");
function ModalValidationResetPassword(props) {
  var onClose = props.onClose;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var goHomeAndcloseModal = function goHomeAndcloseModal() {
    onClose();
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
  }, " Votre mot de passe a bien \xE9t\xE9 modifi\xE9 ")), /*#__PURE__*/React.createElement("div", {
    className: "modal__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__button-wrapper"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      goHomeAndcloseModal();
    },
    className: "btn btn-blue"
  }, "ok"))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop fade show"
  })), document.getElementById('portal1'));
}