"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TennisSpinner;
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
function TennisSpinner() {
  return /*#__PURE__*/React.createElement("div", {
    className: "tennis-spinner"
  }, /*#__PURE__*/React.createElement(_material.CircularProgress, {
    size: 64,
    thickness: 4,
    disableShrink: true,
    color: "primary"
  }), /*#__PURE__*/React.createElement(_iconsMaterial.SportsTennis, {
    className: "tennis-ball",
    fontSize: "large"
  }));
}