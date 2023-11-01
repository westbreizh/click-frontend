"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BackNavArrowStringer;
var _ArrowBack = _interopRequireDefault(require("@mui/icons-material/ArrowBack"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function BackNavArrowStringer() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  function handleBackClick() {
    navigate(-1);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "btn-back-stringer__wrapper",
    onClick: handleBackClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-back-stringer__bubble"
  }, /*#__PURE__*/React.createElement(_ArrowBack.default, {
    className: "btn-back-stringer__icon-back"
  })));
}