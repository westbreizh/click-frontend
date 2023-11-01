"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Coordinate;
var _react = require("react");
var _reactRedux = require("react-redux");
var _NavbarAccount = _interopRequireDefault(require("../../components/navbar/NavbarAccount"));
var _ModalCreateOrUploadCoordinates = _interopRequireDefault(require("../../components/modal/modalReset/ModalCreateOrUploadCoordinates"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Coordinate() {
  var userInfo = (0, _reactRedux.useSelector)(function (state) {
    return state.user.userInfo;
  });

  // gestion de l'ouverture du modale de l'adresse
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isModalCreateOrUploadAdressOpen = _useState2[0],
    setModalCreateOrUploadAdressOpen = _useState2[1];
  var handleClickToOpenModalAdress = function handleClickToOpenModalAdress() {
    setModalCreateOrUploadAdressOpen(true);
  };
  var hideModalCreateOrUploadAdress = function hideModalCreateOrUploadAdress() {
    setModalCreateOrUploadAdressOpen(false);
  };

  //console.log("userInfo", userInfo)

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_NavbarAccount.default, null), /*#__PURE__*/React.createElement("main", {
    className: "account__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "account__bg"
  }, " "), /*#__PURE__*/React.createElement("section", {
    className: "account__contenair"
  }, /*#__PURE__*/React.createElement("div", {
    className: "account__contenair"
  }, /*#__PURE__*/React.createElement("div", {
    className: "account__header"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "account__header__h1"
  }, "edition de compte")), /*#__PURE__*/React.createElement("div", {
    className: "submenu__wrapper"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "submenu__title"
  }, "Informations personnelles test"), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-perso__title"
  }, "Civilit\xE9 :  "), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__value"
  }, userInfo.civilite)), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-perso__title"
  }, "pr\xE9nom : "), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__value"
  }, userInfo.forename)), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-perso__title"
  }, "nom :  "), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__value"
  }, userInfo.lastname)), /*#__PURE__*/React.createElement("div", {
    className: "info-login__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-login__title"
  }, "E-Mail : "), /*#__PURE__*/React.createElement("div", {
    className: "info-login__data"
  }, userInfo.email))), /*#__PURE__*/React.createElement("div", {
    className: "submenu__wrapper"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "submenu__title"
  }, "Coordonn\xE9es"), /*#__PURE__*/React.createElement("button", {
    className: "info-login__button",
    onClick: handleClickToOpenModalAdress
  }, "Renseignez ou modifier vos coordonn\xE9es"), isModalCreateOrUploadAdressOpen && /*#__PURE__*/React.createElement(_ModalCreateOrUploadCoordinates.default, {
    onClose: hideModalCreateOrUploadAdress
  }), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-perso__title"
  }, " adresse : "), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__value"
  }, userInfo.road)), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-perso__title"
  }, " code postal : "), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__value"
  }, userInfo.postal_code)), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-perso__title"
  }, " ville :"), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__value"
  }, userInfo.city)), /*#__PURE__*/React.createElement("div", {
    className: "info-perso__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-perso__title"
  }, " Num\xE9ro de t\xE9l\xE9phone : "), userInfo.telephone ? /*#__PURE__*/React.createElement("div", {
    className: "info-perso__value"
  }, userInfo.telephone) : /*#__PURE__*/React.createElement("div", {
    className: "info-perso__value"
  }, " ")))))));
}