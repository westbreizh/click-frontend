"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LogoutIconAdmin;
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _userSlice = require("../../../store/userSlice");
var _PowerSettingsNew = _interopRequireDefault(require("@mui/icons-material/PowerSettingsNew"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function LogoutIconAdmin(props) {
  var dispatch = (0, _reactRedux.useDispatch)();
  var navigate = (0, _reactRouterDom.useNavigate)();
  var store = (0, _reactRedux.useStore)();
  function logoutAction() {
    dispatch((0, _userSlice.connectedToggle)());
    store.dispatch((0, _userSlice.setUserInfo)(""));
    navigate("/");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "navBar__inactive signOut_wrapper",
    onClick: logoutAction
  }, /*#__PURE__*/React.createElement(_PowerSettingsNew.default, {
    className: "navBar__icon "
  }), "D\xE9connexion");
}