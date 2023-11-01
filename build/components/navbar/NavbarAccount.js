"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavbarAccount;
var _reactRouterDom = require("react-router-dom");
function NavbarAccount() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "navBarAccount__contenair"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navBarAccount__max-width"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navBarAccount__ul"
  }, /*#__PURE__*/React.createElement("li", {
    className: "navBarAccount__li"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/coordonn\xE9es",
    className: function className(nav) {
      return nav.isActive ? "navBarAccount__active" : "navBarAccount__inactive";
    }
  }, "Coordonn\xE9es")), /*#__PURE__*/React.createElement("li", {
    className: "navBarAccount__li",
    id: "tooLongText"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/pr\xE9f\xE9rences_joueur",
    className: function className(nav) {
      return nav.isActive ? "navBarAccount__active" : "navBarAccount__inactive";
    },
    end: true
  }, "Pr\xE9f\xE9rences")), /*#__PURE__*/React.createElement("li", {
    className: "navBarAccount__li navBarAccount__li-last"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/historique_commandes",
    className: function className(nav) {
      return nav.isActive ? "navBarAccount__active" : "navBarAccount__inactive";
    },
    end: true
  }, "commandes")))));
}