"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;
var _reactRouterDom = require("react-router-dom");
var _cordagecasse = _interopRequireDefault(require("../../assets/cordagecasse.webp"));
var _balle = _interopRequireDefault(require("../../assets/balle.jpeg"));
var _SportsTennis = _interopRequireDefault(require("@mui/icons-material/SportsTennis"));
var _Devices = _interopRequireDefault(require("@mui/icons-material/Devices"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Home() {
  return /*#__PURE__*/React.createElement("main", {
    className: "main-home"
  }, /*#__PURE__*/React.createElement("section", {
    className: "presentation"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "presentation__h1"
  }, " Bienvenue sur click & raquette ! "), /*#__PURE__*/React.createElement("h2", {
    className: "presentation__h2"
  }, " D\xE9posez, Cliquez, Jouez ! ")), /*#__PURE__*/React.createElement("section", {
    className: "functionning"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/cordez",
    className: "functionning__link"
  }, /*#__PURE__*/React.createElement("div", {
    className: "functionning__button-animate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "functionning__bubble"
  }, "  1 "), /*#__PURE__*/React.createElement(_Devices.default, {
    className: "functionning-icon-computer"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "functionning__h3"
  }, "Commander votre cordage en ligne"))), /*#__PURE__*/React.createElement("div", {
    className: "functionning__button-animate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "functionning__bubble"
  }, "  2 "), /*#__PURE__*/React.createElement(_SportsTennis.default, {
    className: "functionning-icon-tennis"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "functionning__h3"
  }, "D\xE9posez votre raquette o\xF9 vous le souhaitez  ")), /*#__PURE__*/React.createElement("div", {
    className: "functionning__button-animate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "functionning__bubble"
  }, "  3 "), /*#__PURE__*/React.createElement(_SportsTennis.default, {
    className: "functionning-icon-tennis"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "functionning__h3"
  }, "R\xE9cuperer votre raquette, amusez vous!"))), /*#__PURE__*/React.createElement("section", {
    className: "servicesLinks"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: "servicesLinks__card",
    to: "/cordez"
  }, /*#__PURE__*/React.createElement("img", {
    src: _cordagecasse.default,
    alt: "raquette en train d'\xEAtre cord\xE9",
    className: "servicesLinks__card-image"
  }), /*#__PURE__*/React.createElement("p", {
    className: "servicesLinks__card-text"
  }, "  1,2,3  cordez ! ")), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: "servicesLinks__card",
    to: "/cordages"
  }, /*#__PURE__*/React.createElement("img", {
    src: _balle.default,
    alt: "raquette en train d'\xEAtre cord\xE9",
    className: "servicesLinks__card-image"
  }), /*#__PURE__*/React.createElement("p", {
    className: "servicesLinks__card-text"
  }, "  cordages", /*#__PURE__*/React.createElement("br", null), " balles", /*#__PURE__*/React.createElement("br", null), " accessoires "))));
}