"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalValidationAddToCartInstallation;
var _reactDom = require("react-dom");
var _reactRouterDom = require("react-router-dom");
function ModalValidationAddToCartInstallation(props) {
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
  }, "Article(s) ajout\xE9 au panier!"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close-atc",
    "aria-label": "Close",
    onClick: function onClick() {
      return setSubmenuValidation(false);
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "modal-installation-atc__buttons-link-wrapper"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/panier",
    className: "btn btn-white-green btn-installation-atc"
  }, "voire le panier"), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/commande",
    className: "btn btn-green btn-installation-atc btn-last"
  }, "commander")), /*#__PURE__*/React.createElement("div", {
    className: "modal-installation-atc__message-wrapper"
  }, "  ", /*#__PURE__*/React.createElement("div", {
    className: "modal-installation-atc__message-text ball-need"
  }, "Besoin de balles, d'accessoires ?")), /*#__PURE__*/React.createElement("div", {
    className: "modal-installation-atc__buttons-link-wrapper modal-installation-atc-last"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/balles",
    className: "btn btn-green btn-installation-atc"
  }, "balles"), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/accessoires",
    className: "btn btn-white-green btn-installation-atc btn-last "
  }, "accessoires")))), /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop fade show"
  })), document.getElementById('portal1'));
}