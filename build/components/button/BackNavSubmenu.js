"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BackNavSubmenu;
var _ArrowBack = _interopRequireDefault(require("@mui/icons-material/ArrowBack"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function BackNavSubmenu(props) {
  var toggleMobileSubmenu = props.toggleMobileSubmenu;
  return /*#__PURE__*/React.createElement("div", {
    className: "submenuMobile__wrapper-back",
    onClick: function onClick() {
      return toggleMobileSubmenu();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "submenuMobile__bubble-back"
  }, /*#__PURE__*/React.createElement(_ArrowBack.default, {
    className: "submenuMobile__icon-back"
  })), /*#__PURE__*/React.createElement("div", {
    className: "submenuMobile__text-back"
  }, "retour"));
}