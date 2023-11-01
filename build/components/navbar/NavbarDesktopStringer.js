"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavbarDesktopStringer;
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _SportsTennis = _interopRequireDefault(require("@mui/icons-material/SportsTennis"));
var _ArrowOutward = _interopRequireDefault(require("@mui/icons-material/ArrowOutward"));
var _FormatListBulleted = _interopRequireDefault(require("@mui/icons-material/FormatListBulleted"));
var _LogoutIconAdmin = _interopRequireDefault(require("../icons/desktop/LogoutIconAdmin"));
var _ThumbUpAlt = _interopRequireDefault(require("@mui/icons-material/ThumbUpAlt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function NavbarDesktopStringer() {
  var isConnected = (0, _reactRedux.useSelector)(function (state) {
    return state.user.isConnected;
  });
  return /*#__PURE__*/React.createElement("nav", {
    className: "navBar__contenair"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navBar__ul"
  }, /*#__PURE__*/React.createElement("li", {
    className: "navBar__li"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/cordeur_raquettes-\xE0-retirer",
    className: function className(nav) {
      return nav.isActive ? "navBar__active" : "navBar__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "icons_wrapper"
  }, /*#__PURE__*/React.createElement(_ArrowOutward.default, {
    className: "navBar__icon"
  })), "A retirer")), /*#__PURE__*/React.createElement("li", {
    className: "navBar__li"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/cordeur_raquettes-\xE0-corder",
    className: function className(nav) {
      return nav.isActive ? "navBar__active" : "navBar__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement(_SportsTennis.default, {
    className: "navBar__icon"
  }), "A corder")), /*#__PURE__*/React.createElement("li", {
    className: "navBar__li"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/cordeur_raquettes-pr\xEAte",
    className: function className(nav) {
      return nav.isActive ? "navBar__active" : "navBar__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "icons_wrapper"
  }, /*#__PURE__*/React.createElement(_ThumbUpAlt.default, {
    className: "navBar__icon"
  })), "Pr\xEAte")), /*#__PURE__*/React.createElement("li", {
    className: "navBar__li"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/cordeur_commandes-historique",
    className: function className(nav) {
      return nav.isActive ? "navBar__active" : "navBar__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement(_FormatListBulleted.default, {
    className: "navBar__icon"
  }), "Historique")), /*#__PURE__*/React.createElement("li", {
    className: "navBar__li li__logoutIcon"
  }, /*#__PURE__*/React.createElement(_LogoutIconAdmin.default, null))));
}