"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavbarShop;
var _reactRouterDom = require("react-router-dom");
function NavbarShop() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "navBarShop__contenair"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navBarShop__ul"
  }, /*#__PURE__*/React.createElement("li", {
    className: "navBarShop__li"
  }, /*#__PURE__*/React.createElement("div", {
    className: "submenuToogleDropDown"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/cordages",
    className: function className(nav) {
      return nav.isActive ? "navBarShop__active" : "navBarShop__inactive";
    }
  }, "Cordages"))), /*#__PURE__*/React.createElement("li", {
    className: "navBarShop__li"
  }, /*#__PURE__*/React.createElement("div", {
    className: "submenuToogleDropDown"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/balles",
    className: function className(nav) {
      return nav.isActive ? "navBarShop__active" : "navBarShop__inactive";
    },
    end: true
  }, "Balles"))), /*#__PURE__*/React.createElement("li", {
    className: "navBarShop__li navBarShop__li-last"
  }, /*#__PURE__*/React.createElement("div", {
    className: "submenuToogleDropDown"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/accessoires",
    className: function className(nav) {
      return nav.isActive ? "navBarShop__active" : "navBarShop__inactive";
    },
    end: true
  }, "Accessoires")))));
}