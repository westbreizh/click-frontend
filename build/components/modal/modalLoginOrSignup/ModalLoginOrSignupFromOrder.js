"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalConnexionOrSingupFromOrder;
var _reactDom = require("react-dom");
var _LoginForm = _interopRequireDefault(require("../../form/LoginForm"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ModalConnexionOrSingupFromOrder(props) {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var closeModalConnexion = props.closeModalConnexion;
  var handleCloseModal = function handleCloseModal() {
    closeModalConnexion();
    navigate(-1);
  };
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "modal__title"
  }, "Pour pouvoir passer commande, merci de vous connecter \xE0 votre compte ou bien d'en cr\xE9er un."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: handleCloseModal
  }, " \xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "modal__body"
  }, /*#__PURE__*/React.createElement(_LoginForm.default, {
    closeModalConnexion: closeModalConnexion
  }), /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, " Ou "), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/inscription",
    className: "btn btn-blue-light"
  }, "inscription")))), /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop fade show"
  })), document.getElementById('portal1'));
}