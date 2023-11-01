"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalValidationChangesPreferences;
var _reactDom = require("react-dom");
var _reactRouterDom = require("react-router-dom");
function ModalValidationChangesPreferences(props) {
  var setSubmenuValidation = props.setSubmenuValidation;
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__wrapper modal-installation-atc__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-installation-atc__message-wrapper"
  }, "  ", /*#__PURE__*/React.createElement("div", {
    className: "modal-installation-atc__validation-bubble-checked"
  }, /*#__PURE__*/React.createElement("span", null, "\u2713")), /*#__PURE__*/React.createElement("div", {
    className: "modal-installation-atc__message-text"
  }, "Vos pr\xE9f\xE9rences ont \xE9t\xE9 mises \xE0 jour !"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close-atc",
    "aria-label": "Close",
    onClick: function onClick() {
      return setSubmenuValidation(false);
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "modal-installation-atc__buttons-link-wrapper"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "btn btn-green btn-installation-atc btn-last"
  }, "ok")))), /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop fade show"
  })), document.getElementById('portal1'));
}