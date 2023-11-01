"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopSubmenu;
var _reactRouterDom = require("react-router-dom");
function ShopSubmenu(props) {
  var toogleSubmenuOff = props.toogleSubmenuOff;
  return /*#__PURE__*/React.createElement("div", {
    className: "submenu__contenair"
  }, /*#__PURE__*/React.createElement("div", {
    className: "submenu__max-width-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "submenu__colum-left"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "submenu__ul"
  }, /*#__PURE__*/React.createElement("li", {
    className: "submenu__li",
    onClick: function onClick() {
      return toogleSubmenuOff();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/cordages",
    className: function className(nav) {
      return nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive";
    },
    end: true
  }, "Cordages")), /*#__PURE__*/React.createElement("li", {
    className: "submenu__li",
    onClick: function onClick() {
      return toogleSubmenuOff();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/balles",
    className: function className(nav) {
      return nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive";
    },
    end: true
  }, "Balles")), /*#__PURE__*/React.createElement("li", {
    className: "submenu__li",
    onClick: function onClick() {
      return toogleSubmenuOff();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/accessoires",
    className: function className(nav) {
      return nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive";
    },
    end: true
  }, "Accessoires"))))));
}