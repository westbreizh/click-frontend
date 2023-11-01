"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectDateReady;
var _react = require("react");
var _dateFns = require("date-fns");
var _locale = require("date-fns/locale");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function SelectDateReady(props) {
  var setDateRacquetReady = props.setDateRacquetReady;
  var _useState = (0, _react.useState)(new Date()),
    _useState2 = _slicedToArray(_useState, 2),
    dateOrigin = _useState2[0],
    setDateOrigin = _useState2[1];
  var _useState3 = (0, _react.useState)(new Date()),
    _useState4 = _slicedToArray(_useState3, 2),
    dateByDefault = _useState4[0],
    setDateByDefaul = _useState4[1];
  var _useState5 = (0, _react.useState)(new Date()),
    _useState6 = _slicedToArray(_useState5, 2),
    dateShorter = _useState6[0],
    setdateShorter = _useState6[1];
  var _useState7 = (0, _react.useState)(new Date()),
    _useState8 = _slicedToArray(_useState7, 2),
    dateLonger = _useState8[0],
    setdateLonger = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isOpen = _useState10[0],
    setIsOpen = _useState10[1];
  (0, _react.useEffect)(function () {
    // Obtenez la date actuelle
    var today = new Date();

    // Vérifiez si today est un dimanche (0), et si oui, ajoutez un jour à dateOrigin
    if ((0, _dateFns.getDay)(today) === 0) {
      setDateOrigin((0, _dateFns.addDays)(today, 1));
    } else {
      setDateOrigin(today);
    }
    // Ajoutez 3 jours à la date de depart
    var dateRacquetOK = (0, _dateFns.addDays)(dateOrigin, 3);

    // Vérifiez si dateRacquetOK est un dimanche (0) ou un lundi (1), et si oui, repoussez au mardi
    var dayOfWeek = (0, _dateFns.getDay)(dateRacquetOK);
    if (dayOfWeek === 0) {
      dateRacquetOK.setDate(dateRacquetOK.getDate() + 2); // Repousser au mardi
    } else if (dayOfWeek === 1) {
      dateRacquetOK.setDate(dateRacquetOK.getDate() + 1); // Repousser au mardi
    }
    // Formatez la nouvelle date
    var formattedDateRacquetOk = (0, _dateFns.format)(dateRacquetOK, 'EEEE d MMMM', {
      locale: _locale.fr
    });

    // Mettez à jour setDateRacquetReady avec la nouvelle date
    setDateByDefaul(dateRacquetOK);
    setDateRacquetReady(formattedDateRacquetOk);

    // Ajoutez 2 jours à la date de depart
    var dateRacquetOkFaster = (0, _dateFns.addDays)(dateOrigin, 2);
    // Vérifiez si dateRacquetOK est un dimanche (0) ou un lundi (1), et si oui, repoussez au mardi
    var dayOfWeekFaster = (0, _dateFns.getDay)(dateRacquetOkFaster);
    if (dayOfWeekFaster === 0) {
      dateRacquetOkFaster.setDate(dateRacquetOkFaster.getDate() + 2); // Repousser au mardi
    } else if (dayOfWeekFaster === 1) {
      dateRacquetOkFaster.setDate(dateRacquetOkFaster.getDate() + 1); // Repousser au mardi
    }
    // Mettez à jour setDateRacquetReady avec la nouvelle date
    setdateShorter(dateRacquetOkFaster);

    // Ajoutez 4 jours à la date de depart
    var dateRacquetOkLonger = (0, _dateFns.addDays)(dateOrigin, 4);
    // Vérifiez si dateRacquetOKLonger est un dimanche (0) ou un lundi (1), et si oui, repoussez au mardi
    var dayOfWeekLonger = (0, _dateFns.getDay)(dateRacquetOkLonger);
    if (dayOfWeekLonger === 0) {
      dateRacquetOkLonger.setDate(dateRacquetOkLonger.getDate() + 2); // Repousser au mardi
    } else if (dayOfWeekLonger === 1) {
      dateRacquetOkLonger.setDate(dateRacquetOkLonger.getDate() + 1); // Repousser au mardi
    }
    // Mettez à jour setDateRacquetReady avec la nouvelle date
    setdateLonger(dateRacquetOkLonger);
  }, []);
  var handleDayChange = function handleDayChange(data) {
    setDateRacquetReady((0, _dateFns.format)(data, 'EEEE d MMMM', {
      locale: _locale.fr
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "clubSelect__wrapper dateBack-wrapper",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "clubSelect__bar-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "clubSelect__bar-title"
  }, "Choisir une autre date"), /*#__PURE__*/React.createElement("span", {
    className: "clubSelect__arrow ".concat(isOpen ? "clubSelect__arrow-up" : "clubSelect__arrow-down")
  })), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "clubSelect__submenu-contenair"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "clubSelect__submenu-ul"
  }, /*#__PURE__*/React.createElement("li", {
    key: "faster",
    className: "clubSelect__submenu-li",
    onClick: function onClick() {
      return handleDayChange(dateShorter);
    }
  }, (0, _dateFns.format)(dateShorter, 'EEEE d MMMM', {
    locale: _locale.fr
  })), /*#__PURE__*/React.createElement("li", {
    key: "standard",
    className: "clubSelect__submenu-li",
    onClick: function onClick() {
      return handleDayChange(dateByDefault);
    }
  }, (0, _dateFns.format)(dateByDefault, 'EEEE d MMMM', {
    locale: _locale.fr
  })), /*#__PURE__*/React.createElement("li", {
    key: "longer",
    className: "clubSelect__submenu-li",
    onClick: function onClick() {
      return handleDayChange(dateLonger);
    }
  }, (0, _dateFns.format)(dateLonger, 'EEEE d MMMM', {
    locale: _locale.fr
  })), /*#__PURE__*/React.createElement("li", {
    key: "shop faster",
    className: "clubSelect__submenu-li"
  }, "Urgent ? rendez-vous directement en boutique"))));
}