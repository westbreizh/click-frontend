"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;
var _NavbarDesktop = _interopRequireDefault(require("../navbar/NavbarDesktop"));
var _NavbarDesktopHub = _interopRequireDefault(require("../navbar/NavbarDesktopHub"));
var _NavbarDesktopStringer = _interopRequireDefault(require("../navbar/NavbarDesktopStringer"));
var _LOGO = _interopRequireDefault(require("../../assets/LOGO.jpg"));
var _NavbarHamburger = _interopRequireDefault(require("../navbar/NavbarHamburger"));
var _NavbarHamburgerHub = _interopRequireDefault(require("../navbar/NavbarHamburgerHub"));
var _NavbarHamburgerStringer = _interopRequireDefault(require("../navbar/NavbarHamburgerStringer"));
var _reactRedux = require("react-redux");
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Header() {
  var userInfo = (0, _reactRedux.useSelector)(function (state) {
    return state.user.userInfo;
  });
  var userRole = userInfo.userRole;

  // Cette fonction s'exécutera à chaque changement de `userRole`.
  (0, _react.useEffect)(function () {}, [userRole]);
  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header__wrapper-width"
  }, /*#__PURE__*/React.createElement("img", {
    src: _LOGO.default,
    alt: "logo de click & raquette",
    className: "header__logo"
  }), (userRole === '' || userRole === undefined || userRole === 'player') && /*#__PURE__*/React.createElement(_NavbarDesktop.default, null), userRole === 'stringer' && /*#__PURE__*/React.createElement(_NavbarDesktopStringer.default, null), userRole === 'hub' && /*#__PURE__*/React.createElement(_NavbarDesktopHub.default, null), (userRole === '' || userRole === undefined || userRole === 'player') && /*#__PURE__*/React.createElement(_NavbarHamburger.default, null), userRole === 'stringer' && /*#__PURE__*/React.createElement(_NavbarHamburgerStringer.default, null), userRole === 'hub' && /*#__PURE__*/React.createElement(_NavbarHamburgerHub.default, null)));
}