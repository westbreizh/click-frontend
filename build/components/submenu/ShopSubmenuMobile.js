"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopSubmenuMobile;
var _reactRouterDom = require("react-router-dom");
var _BackNavSubmenu = _interopRequireDefault(require("../button/BackNavSubmenu"));
var _ArrowForwardIos = _interopRequireDefault(require("@mui/icons-material/ArrowForwardIos"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ShopSubmenuMobile(props) {
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
  }, "Boutique"), /*#__PURE__*/React.createElement("div", {
    className: "submenuMobile__wrapper-links"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "submenuMobile__ul"
  }, /*#__PURE__*/React.createElement("li", {
    className: "submenuMobile__li",
    onClick: function onClick() {
      return toggleMenuHamburgerAndSubmenu();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/cordages",
    className: "submenuMobile__link"
  }, "Cordages"), /*#__PURE__*/React.createElement(_ArrowForwardIos.default, {
    className: "submenuMobile__icon-forward"
  })), /*#__PURE__*/React.createElement("li", {
    className: "submenuMobile__li",
    onClick: function onClick() {
      return toggleMenuHamburgerAndSubmenu();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/balles",
    className: "submenuMobile__link"
  }, "Balles"), /*#__PURE__*/React.createElement(_ArrowForwardIos.default, {
    className: "submenuMobile__icon-forward"
  })), /*#__PURE__*/React.createElement("li", {
    className: "submenuMobile__li",
    onClick: function onClick() {
      return toggleMenuHamburgerAndSubmenu();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/accessoires",
    className: "submenuMobile__link"
  }, "Accesoires"), /*#__PURE__*/React.createElement(_ArrowForwardIos.default, {
    className: "submenuMobile__icon-forward"
  })))));
}