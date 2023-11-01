"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccountSubmenu;
var _reactRouterDom = require("react-router-dom");
var _LogoutIcon = _interopRequireDefault(require("../icons/desktop/LogoutIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function AccountSubmenu(props) {
  var isSubmenuAccountOpen = props.isSubmenAccountuOpen;
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
    to: "/coordonn\xE9es",
    className: function className(nav) {
      return nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive";
    },
    end: true
  }, "Coordonn\xE9es")), /*#__PURE__*/React.createElement("li", {
    className: "submenu__li",
    onClick: function onClick() {
      return toogleSubmenuOff();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/pr\xE9f\xE9rences_joueur",
    className: function className(nav) {
      return nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive";
    },
    end: true
  }, "Pr\xE9f\xE9rences")), /*#__PURE__*/React.createElement("li", {
    className: "submenu__li",
    onClick: function onClick() {
      return toogleSubmenuOff();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/historique_commandes",
    className: function className(nav) {
      return nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive";
    },
    end: true
  }, "Commandes")))), /*#__PURE__*/React.createElement("div", {
    className: "submenu__colum-right"
  }, /*#__PURE__*/React.createElement(_LogoutIcon.default, {
    isSubmenuOpen: isSubmenuAccountOpen
  }))));
}