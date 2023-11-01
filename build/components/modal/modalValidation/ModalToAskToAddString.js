"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalAskToAddString;
var _reactDom = require("react-dom");
var _reactRouterDom = require("react-router-dom");
function ModalAskToAddString(props) {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var goToHomeAndcloseModals = function goToHomeAndcloseModals() {
    navigate("/cordez");
  };
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "modal__title"
  }, " Veuillez ajouter la pose d'un cordage, merci !")), /*#__PURE__*/React.createElement("div", {
    className: "modal__body modal__body-reset-password-validation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__reset-password-wrapper"
  }, /*#__PURE__*/React.createElement("p", {
    className: "reset-password-indication"
  }, "Les balles et accessoires viennent s'ajouter \xE0 la pose d'un cordage si vous en avez besoin ..."), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      goToHomeAndcloseModals();
    },
    className: "btn btn-blue "
  }, "ok"))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop fade show"
  })), document.getElementById('portal2'));
}