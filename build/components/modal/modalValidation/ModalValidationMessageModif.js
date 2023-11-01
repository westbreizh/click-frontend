"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalValidationMessageModif;
var _reactDom = require("react-dom");
function ModalValidationMessageModif(props) {
  var title = props.title;
  var onClose = props.onClose;
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "modal__title"
  }, " ", title, " ")), /*#__PURE__*/React.createElement("div", {
    className: "modal__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__button-wrapper"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      onClose();
    },
    className: "btn btn-blue"
  }, "ok"))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop fade show"
  })), document.getElementById('portal1'));
}