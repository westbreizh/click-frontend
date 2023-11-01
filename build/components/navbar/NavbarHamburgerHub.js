"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavbarHamburgerHub;
var _reactRouterDom = require("react-router-dom");
var _react = require("react");
var _hamburgerReact = require("hamburger-react");
var _reactRedux = require("react-redux");
var _ArrowOutward = _interopRequireDefault(require("@mui/icons-material/ArrowOutward"));
var _FormatListBulleted = _interopRequireDefault(require("@mui/icons-material/FormatListBulleted"));
var _LogoutIconAdmin = _interopRequireDefault(require("../icons/desktop/LogoutIconAdmin"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function NavbarHamburgerHub() {
  var isConnected = (0, _reactRedux.useSelector)(function (state) {
    return state.user.isConnected;
  });
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuHamburgerOpen = _useState2[0],
    setToggleMenuHamburger = _useState2[1];
  function toggleMenuHamburger() {
    setToggleMenuHamburger(!isMenuHamburgerOpen);
  }
  return /*#__PURE__*/React.createElement("nav", {
    className: "navHamburger__contenair"
  }, /*#__PURE__*/React.createElement(_hamburgerReact.Squash, {
    toggled: isMenuHamburgerOpen,
    toggle: setToggleMenuHamburger
  }), /*#__PURE__*/React.createElement("ul", {
    className: "menuDropdownHamburger ".concat(isMenuHamburgerOpen ? " showMenuDropdownHamburger" : "")
  }, /*#__PURE__*/React.createElement("li", {
    className: "menuHamburger__li",
    onClick: function onClick() {
      return toggleMenuHamburger();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/hub_raquettes-d\xE9pot",
    className: function className(nav) {
      return nav.isActive ? "navLink__active" : "navLink__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "icons_wrapper"
  }, /*#__PURE__*/React.createElement(_ArrowOutward.default, {
    className: "navBar__icon arrowOutward-to-rotate"
  })), "D\xE9pot")), /*#__PURE__*/React.createElement("li", {
    className: "menuHamburger__li",
    onClick: function onClick() {
      return toggleMenuHamburger();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/hub_raquettes-retrait",
    className: function className(nav) {
      return nav.isActive ? "navLink__active" : "navLink__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "icons_wrapper"
  }, /*#__PURE__*/React.createElement(_ArrowOutward.default, {
    className: "navBar__icon"
  })), "Retrait")), /*#__PURE__*/React.createElement("li", {
    className: "menuHamburger__li",
    onClick: function onClick() {
      return toggleMenuHamburger();
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/hub_historique",
    className: function className(nav) {
      return nav.isActive ? "navLink__active" : "navLink__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement(_FormatListBulleted.default, {
    className: "navBar__icon"
  }), "Historique")), /*#__PURE__*/React.createElement("li", {
    className: "menuHamburger__li",
    onClick: function onClick() {
      return toggleMenuHamburger();
    }
  }, /*#__PURE__*/React.createElement(_LogoutIconAdmin.default, null))));
}