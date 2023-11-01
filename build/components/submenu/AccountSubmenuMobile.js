"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccountSubmenuMobile;
var _reactRouterDom = require("react-router-dom");
var _LogoutIconMobile = _interopRequireDefault(require("../icons/mobile/LogoutIconMobile"));
var _BackNavSubmenu = _interopRequireDefault(require("../button/BackNavSubmenu"));
var _ArrowForwardIos = _interopRequireDefault(require("@mui/icons-material/ArrowForwardIos"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function AccountSubmenuMobile(props) {
  var toggleMobileSubmenu = props.toggleMobileSubmenu;
  var toggleMenuHamburger = props.toggleMenuHamburger;
  function toggleMenuHamburgerAndSubmenu() {
    toggleMenuHamburger();
    toggleMobileSubmenu();
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "submenuMobile__contenair"
  }, /*#__PURE__*/React.createElement(_BackNavSubmenu.default, {
    toggleMobileSubmenu: toggleMobileSubmenu
  }), /*#__PURE__*/React.createElement("div", {
    className: "submenuMobile__wrapper-title"
  }, "Mon compte"), /*#__PURE__*/React.createElement("div", {
    className: "submenuMobile__wrapper-links"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "submenuMobile__ul"
  }, /*#__PURE__*/React.createElement("li", {
    className: "submenuMobile__li",
    onClick: function onClick() {
      return toggleMenuHamburgerAndSubmenu();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/coordonn\xE9es",
    className: "submenuMobile__link"
  }, "Coordonn\xE9es"), /*#__PURE__*/React.createElement(_ArrowForwardIos.default, {
    className: "submenuMobile__icon-forward"
  })), /*#__PURE__*/React.createElement("li", {
    className: "submenuMobile__li",
    onClick: function onClick() {
      return toggleMenuHamburgerAndSubmenu();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/pr\xE9f\xE9rences_joueur",
    className: "submenuMobile__link"
  }, "Pr\xE9f\xE9rences"), /*#__PURE__*/React.createElement(_ArrowForwardIos.default, {
    className: "submenuMobile__icon-forward"
  })), /*#__PURE__*/React.createElement("li", {
    className: "submenuMobile__li",
    onClick: function onClick() {
      return toggleMenuHamburgerAndSubmenu();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/historique_commandes",
    className: "submenuMobile__link"
  }, "Commandes"), /*#__PURE__*/React.createElement(_ArrowForwardIos.default, {
    className: "submenuMobile__icon-forward"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "submenuMobile__logout"
  }, /*#__PURE__*/React.createElement(_LogoutIconMobile.default, {
    toggleMenuHamburgerAndSubmenu: toggleMenuHamburgerAndSubmenu
  })));
}