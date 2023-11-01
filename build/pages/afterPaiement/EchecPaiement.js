"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EchecPaiement;
var _reactRouterDom = require("react-router-dom");
function EchecPaiement() {
  return /*#__PURE__*/React.createElement("main", {
    className: "order-back__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart__bg"
  }), /*#__PURE__*/React.createElement("section", {
    className: "order-back__contenair"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-back__section"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "order-back__h2"
  }, "Echec de paiement "), /*#__PURE__*/React.createElement("p", {
    className: "order-back__p"
  }, "Nous sommes d\xE9sol\xE9 mais le paiement de votre commande n'a pu aboutir.", /*#__PURE__*/React.createElement("br", null), "Vous pouvez r\xE9essayez si vous le souhaitez ", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "modal-atc__buttons-link-wrapper"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/panier",
    className: "btn btn-white-green"
  }, "voire le panier"), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/commande",
    className: "btn btn-green "
  }, "commander")))));
}