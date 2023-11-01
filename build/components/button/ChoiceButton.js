"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChoiceButton;
var _reactRedux = require("react-redux");
var _react = require("react");
var _ModalValidationAddToCart = _interopRequireDefault(require("../modal/modalValidation/ModalValidationAddToCart"));
var _reactRouterDom = require("react-router-dom");
var _cartSlice = require("../../store/cartSlice");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ChoiceButton(props) {
  var stringChoice = props.stringChoice;
  var productWithQuantity = props.productWithQuantity;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSubmenuValidationOpen = _useState2[0],
    setSubmenuValidation = _useState2[1];
  var navigate = (0, _reactRouterDom.useNavigate)();
  var dispatch = (0, _reactRedux.useDispatch)();
  var handleAddToStringing = function handleAddToStringing() {
    console.log("stringchoice page string", stringChoice[0]);
    dispatch((0, _cartSlice.resetStringFromShopChoice)(stringChoice[0]));
    navigate("/cordez");
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-green btn-choice",
    onClick: handleAddToStringing
  }, "Choisir ce cordage"), isSubmenuValidationOpen && /*#__PURE__*/React.createElement(_ModalValidationAddToCart.default, {
    productWithQuantity: productWithQuantity,
    setSubmenuValidation: setSubmenuValidation
  }));
}