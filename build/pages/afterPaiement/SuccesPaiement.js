"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SuccesPaiement;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _cartSlice = require("../../store/cartSlice");
function SuccesPaiement() {
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    dispatch((0, _cartSlice.resetCart)());
  }, []);
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
  }, "Confirmation de commande "), /*#__PURE__*/React.createElement("p", null, "Notre \xE9quipe a bien re\xE7u votre commande.", /*#__PURE__*/React.createElement("br", null), "Un e-mail de confirmation vous a \xE9t\xE9 envoy\xE9 par email.", /*#__PURE__*/React.createElement("br", null), "Vous pouvez retrouver votre commande et voir sa progression dans ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/historique_commandes",
    className: "order-back__link"
  }, "votre historique de commandes.")))));
}