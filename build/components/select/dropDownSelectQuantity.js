"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropDownSelectQuantity;
var _react = require("react");
var _reactRedux = require("react-redux");
var _cartSlice = require("../../store/cartSlice");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function DropDownSelectQuantity(props) {
  var dispatch = (0, _reactRedux.useDispatch)();
  var quantityForOneProduct = props.quantityForOneProduct;
  var indexProductInArrayCart = props.indexProductInArrayCart;
  var _useState = (0, _react.useState)(quantityForOneProduct),
    _useState2 = _slicedToArray(_useState, 2),
    newQuantity = _useState2[0],
    setNewQuantity = _useState2[1];

  //enregistrement de la nouvelle quantité dans le store redux
  var handleChange = function handleChange(event) {
    var newQuantity = parseInt(event.target.value, 10);
    setNewQuantity(newQuantity);
    dispatch((0, _cartSlice.changeQuantityArticle)({
      quantity: newQuantity,
      index: indexProductInArrayCart
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "dropDownSelectQuantity__wrapper"
  }, /*#__PURE__*/React.createElement("label", {
    className: "dropDownSelectQuantity__label"
  }, "Quantit\xE9 "), /*#__PURE__*/React.createElement("select", {
    className: "dropDownSelectQuantity__select",
    value: newQuantity,
    onChange: handleChange
  }, /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "1"), /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "2"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "3"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "4"), /*#__PURE__*/React.createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/React.createElement("option", {
    value: "6"
  }, "6"), /*#__PURE__*/React.createElement("option", {
    value: "7"
  }, "7"), /*#__PURE__*/React.createElement("option", {
    value: "8"
  }, "8"), /*#__PURE__*/React.createElement("option", {
    value: "9"
  }, "9")), /*#__PURE__*/React.createElement("div", {
    className: "dropDownSelectQuantity__arrow-icon"
  }));
}