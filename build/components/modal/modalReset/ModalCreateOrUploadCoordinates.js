"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalCreateOrUploadCoordinate;
var _reactDom = require("react-dom");
var _CoordinateForm = _interopRequireDefault(require("../../form/CoordinateForm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ModalCreateOrUploadCoordinate(props) {
  var onClose = props.onClose;
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "modal__title"
  }, "Renseignez vos coordonn\xE9es"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "modal__close-button",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    onClick: onClose
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "modal__body "
  }, /*#__PURE__*/React.createElement(_CoordinateForm.default, {
    onClose: onClose
  })))), /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop fade show"
  })), document.getElementById('portal1'));
}