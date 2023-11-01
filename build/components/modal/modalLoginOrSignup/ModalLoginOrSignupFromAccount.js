"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalLoginOrSingupFromAccount;
var _reactDom = require("react-dom");
var _LoginForm = _interopRequireDefault(require("../../form/LoginForm"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ModalLoginOrSingupFromAccount(props) {
  var closeModalConnexion = props.closeModalConnexion;
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "modal__title"
  }, "Pour acc\xE9der \xE0 l'integralit\xE9 des fonctionnalit\xE9s merci de vous connecter \xE0 votre compte"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: closeModalConnexion
  }, " \xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "modal__body"
  }, /*#__PURE__*/React.createElement(_LoginForm.default, {
    closeModalConnexion: closeModalConnexion
  }), /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, " Ou "), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "./inscription",
    className: "btn btn-blue-light",
    onClick: function onClick() {
      return closeModalConnexion();
    }
  }, "inscription")))), /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop fade show"
  })), document.getElementById('portal1'));
}