"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _App = _interopRequireDefault(require("./App"));
require("../src/css/style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var root = (0, _client.createRoot)(document.getElementById("root"));
root.render( /*#__PURE__*/_react.default.createElement(_App.default, null));