"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductQuantitySelect;
function ProductQuantitySelect(props) {
  var productQuantity = props.productQuantity;
  var setProductQuantity = props.setProductQuantity;
  var minValue = 1;
  var handleDecrement = function handleDecrement() {
    if (productQuantity > 1) {
      setProductQuantity(function (prevValue) {
        return prevValue - 1;
      });
    }
  };
  var handleIncrement = function handleIncrement() {
    setProductQuantity(function (prevValue) {
      return prevValue + 1;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "product-quantity__wrapper"
  }, /*#__PURE__*/React.createElement("button", {
    className: "product-quantity__decrement",
    onClick: handleDecrement,
    disabled: productQuantity === minValue
  }, "-"), /*#__PURE__*/React.createElement("span", {
    className: "product-quantity__value"
  }, productQuantity), /*#__PURE__*/React.createElement("button", {
    className: "product-quantity__increment",
    onClick: handleIncrement
  }, "+"));
}