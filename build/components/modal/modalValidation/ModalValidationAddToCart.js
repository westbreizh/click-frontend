"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalValidationAddToCart;
var _reactRedux = require("react-redux");
var _reactDom = require("react-dom");
var _reactRouterDom = require("react-router-dom");
function ModalValidationAddToCart(props) {
  var product = props.productWithQuantity;
  var setSubmenuValidation = props.setSubmenuValidation;
  var cart = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.articleList;
  });

  //console.log("produit ajouté", product)
  //console.log("panier", cart  )

  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__wrapper modal-atc__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-atc__message-wrapper"
  }, "  ", /*#__PURE__*/React.createElement("div", {
    className: "modal-atc__validation-bubble-checked"
  }, /*#__PURE__*/React.createElement("span", null, "\u2713")), /*#__PURE__*/React.createElement("div", {
    className: "modal-atc__message-text"
  }, product.quantity > 1 ? "Articles ajouté au panier !" : "Article ajouté au panier !"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close-atc",
    "aria-label": "Close",
    onClick: function onClick() {
      return setSubmenuValidation(false);
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "modal-atc__product-wrapper"
  }, /*#__PURE__*/React.createElement("img", {
    crossOrigin: "anonymous",
    src: product.image_url,
    alt: product.model,
    className: "modal-atc__image"
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal-atc__product-info-wrapper"
  }, /*#__PURE__*/React.createElement("div", null, product.mark), /*#__PURE__*/React.createElement("div", null, product.model), /*#__PURE__*/React.createElement("div", null, product.price, " \u20AC"))), /*#__PURE__*/React.createElement("div", {
    className: "modal-atc__buttons-link-wrapper"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/panier",
    className: "btn btn-green"
  }, "voire le panier")))), /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop fade show"
  })), document.getElementById('portal1'));
}