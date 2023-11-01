"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavbarDesktop;
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _Home = _interopRequireDefault(require("@mui/icons-material/Home"));
var _SportsTennis = _interopRequireDefault(require("@mui/icons-material/SportsTennis"));
var _ShopIcon = _interopRequireDefault(require("../icons/desktop/ShopIcon"));
var _ShoppingBasket = _interopRequireDefault(require("@mui/icons-material/ShoppingBasket"));
var _LoginIcon = _interopRequireDefault(require("../icons/desktop/LoginIcon"));
var _AccountIcon = _interopRequireDefault(require("../icons/desktop/AccountIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function NavbarDesktop() {
  var isConnected = (0, _reactRedux.useSelector)(function (state) {
    return state.user.isConnected;
  });
  var numberArticle = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.numberArticle;
  });
  return /*#__PURE__*/React.createElement("nav", {
    className: "navBar__contenair"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navBar__ul"
  }, /*#__PURE__*/React.createElement("li", {
    className: "navBar__li"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/",
    className: function className(nav) {
      return nav.isActive ? "navBar__active" : "navBar__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement(_Home.default, {
    className: "navBar__icon"
  }), "Accueil")), /*#__PURE__*/React.createElement("li", {
    className: "navBar__li"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/cordez",
    className: function className(nav) {
      return nav.isActive ? "navBar__active" : "navBar__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement(_SportsTennis.default, {
    className: "navBar__icon"
  }), "Cordez")), /*#__PURE__*/React.createElement("li", {
    className: "navBar__li"
  }, /*#__PURE__*/React.createElement(_ShopIcon.default, null)), /*#__PURE__*/React.createElement("li", {
    className: "navBar__li"
  }, isConnected ? /*#__PURE__*/React.createElement(_AccountIcon.default, null) : /*#__PURE__*/React.createElement(_LoginIcon.default, null)), /*#__PURE__*/React.createElement("li", {
    className: "navBar__li navBar__li-shop"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/panier",
    className: function className(nav) {
      return nav.isActive ? "navBar__active" : "navBar__inactive";
    },
    end: true
  }, /*#__PURE__*/React.createElement(_ShoppingBasket.default, {
    className: "navBar__icon"
  }), "panier", numberArticle > 0 && /*#__PURE__*/React.createElement("div", {
    className: "number-article-desktop navBar__li-shop"
  }, numberArticle)))));
}