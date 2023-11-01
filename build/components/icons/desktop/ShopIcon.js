"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopIcon;
var _react = require("react");
var _ShopSubmenu = _interopRequireDefault(require("../../submenu/ShopSubmenu"));
var _Storefront = _interopRequireDefault(require("@mui/icons-material/Storefront"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ShopIcon(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSubmenuShopOpen = _useState2[0],
    setSubmenuShopOpen = _useState2[1];
  var _useState3 = (0, _react.useState)("icon__wrapper__noSelected"),
    _useState4 = _slicedToArray(_useState3, 2),
    classNameWrapperShopIcon = _useState4[0],
    setclassNameWrapperShopIcon = _useState4[1];
  function toogleSubmenuOn() {
    if (!isSubmenuShopOpen) {
      setclassNameWrapperShopIcon("icon__wrapper__selected");
      setSubmenuShopOpen(!isSubmenuShopOpen);
    }
  }
  function toogleSubmenuOff() {
    if (isSubmenuShopOpen) {
      setclassNameWrapperShopIcon("icon__wrapper__noSelected");
      setSubmenuShopOpen(!isSubmenuShopOpen);
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "icon-submenu__wrapper",
    onMouseEnter: function onMouseEnter() {
      return toogleSubmenuOn();
    },
    onMouseLeave: function onMouseLeave() {
      return toogleSubmenuOff();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: classNameWrapperShopIcon
  }, /*#__PURE__*/React.createElement(_Storefront.default, {
    className: "accountIcon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-accountIcon"
  }, "boutique")), isSubmenuShopOpen ? /*#__PURE__*/React.createElement(_ShopSubmenu.default, {
    isSubmenuOpen: isSubmenuShopOpen,
    classNameWrapperShopIcon: classNameWrapperShopIcon,
    toogleSubmenuOff: toogleSubmenuOff
  }) : "");
}