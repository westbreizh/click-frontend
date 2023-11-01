"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavbarDesktopHub;
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _ArrowOutward = _interopRequireDefault(require("@mui/icons-material/ArrowOutward"));
var _Storefront = _interopRequireDefault(require("@mui/icons-material/Storefront"));
var _FormatListBulleted = _interopRequireDefault(require("@mui/icons-material/FormatListBulleted"));
var _LogoutIcon = _interopRequireDefault(require("../icons/desktop/LogoutIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function NavbarDesktopHub() {
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
    to: "/hub_raquettes-d\xE9pot",
    className: function className(nav) {
      return nav.isActive ? "navBar__active" : "navBar__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "icons_wrapper"
  }, /*#__PURE__*/React.createElement(_ArrowOutward.default, {
    className: "navBar__icon arrowOutward-to-rotate"
  }), /*#__PURE__*/React.createElement(_Storefront.default, {
    className: "navBar__icon"
  })), "D\xE9pot")), /*#__PURE__*/React.createElement("li", {
    className: "navBar__li"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/hub_raquettes-retrait",
    className: function className(nav) {
      return nav.isActive ? "navBar__active" : "navBar__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "icons_wrapper"
  }, /*#__PURE__*/React.createElement(_Storefront.default, {
    className: "navBar__icon"
  }), /*#__PURE__*/React.createElement(_ArrowOutward.default, {
    className: "navBar__icon"
  })), "Retrait")), /*#__PURE__*/React.createElement("li", {
    className: "navBar__li"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/hub_historique",
    className: function className(nav) {
      return nav.isActive ? "navBar__active" : "navBar__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement(_FormatListBulleted.default, {
    className: "navBar__icon"
  }), "Historique")), /*#__PURE__*/React.createElement("li", {
    className: "navBar__li li__logoutIcon"
  }, /*#__PURE__*/React.createElement(_LogoutIcon.default, null))));
}