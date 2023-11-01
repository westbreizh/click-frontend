"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _react2 = require("redux-persist/integration/react");
var _Router = _interopRequireDefault(require("./router/Router"));
var _store = require("./store/store");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _store.store
  }, /*#__PURE__*/_react.default.createElement(_react2.PersistGate, {
    loading: null,
    persistor: _store.persistor
  }, /*#__PURE__*/_react.default.createElement(_Router.default, null)));
}