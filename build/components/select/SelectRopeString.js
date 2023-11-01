"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectRopeString;
var _react = require("react");
var _localDataBase = require("../../Utils/localDataBase");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function SelectRopeString(props) {
  var setStringRopeChoice = props.setStringRopeChoice;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var handleChange = function handleChange(value) {
    var ropeStringSelected = value;
    //console.log("ropeStringSelected", ropeStringSelected)
    setStringRopeChoice(ropeStringSelected);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "clubSelect__wrapper",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "clubSelect__bar-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "clubSelect__bar-title"
  }, "Choisissez votre tension"), /*#__PURE__*/React.createElement("span", {
    className: "clubSelect__arrow ".concat(isOpen ? "clubSelect__arrow-up" : "clubSelect__arrow-down")
  })), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "clubSelect__submenu-contenair scrollable-menu "
  }, /*#__PURE__*/React.createElement("ul", {
    className: "clubSelect__submenu-ul"
  }, _localDataBase.datasForSelectRopeString.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option.value,
      className: "clubSelect__submenu-li",
      onClick: function onClick() {
        return handleChange(option.value);
      }
    }, option.value);
  }))));
}