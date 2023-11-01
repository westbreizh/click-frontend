"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cart;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _cartSlice = require("../../store/cartSlice");
var _dropDownSelectQuantity = _interopRequireDefault(require("../../components/select/dropDownSelectQuantity"));
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _ModalToAskToAddString = _interopRequireDefault(require("../../components/modal/modalValidation/ModalToAskToAddString"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Cart() {
  var articleList = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.articleList;
  });
  var numberArticle = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.numberArticle;
  });
  var totalPrice = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.totalPrice;
  });
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isArticleListWithoutString = _useState2[0],
    setIsArticleListWithoutString = _useState2[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  function handleClickDelete(index) {
    dispatch((0, _cartSlice.deleteArticle)(index));
  }
  var navigate = (0, _reactRouterDom.useNavigate)();
  (0, _react.useEffect)(function () {
    dispatch((0, _cartSlice.calculNumberArticle)());
    dispatch((0, _cartSlice.calculTotalPrice)());
  }, [articleList]);
  var isOnlyAccesories = function isOnlyAccesories(articleList, navigate) {
    var containsCordages = false;
    var _iterator = _createForOfIteratorHelper(articleList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var article = _step.value;
        if (article.categorie !== "balle" && article.categorie !== "accessoire") {
          containsCordages = true;
          break; // Utilisation du break pour sortir de la boucle
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (containsCordages) {
      console.log("Le panier contient des cordages.");
      setIsArticleListWithoutString(false);
      console.log("isArticleListWithoutString", isArticleListWithoutString);
      navigate("/commande");
    } else {
      console.log("Le panier ne contient que des accessoires ou des balles.");
      setIsArticleListWithoutString(true);
      console.log("isArticleListWithoutString", isArticleListWithoutString);
    }
  };
  var handleClickGoToOrder = function handleClickGoToOrder() {
    console.log("je vais construire ma fonction qui teste si je n'ai que des accessoires");
    isOnlyAccesories(articleList, navigate); // Passez navigate en tant qu'argument
  };

  // console.log("article dans panier",articleList )

  return /*#__PURE__*/React.createElement("main", {
    className: "cart__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart__bg"
  }), /*#__PURE__*/React.createElement("section", {
    className: "cart__contenair"
  }, articleList.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cart__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-content__first-line"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-content__title"
  }, " panier "), /*#__PURE__*/React.createElement("div", {
    className: "cart-content__nbre-article"
  }, numberArticle > 1 ? "( ".concat(numberArticle, " articles )") : "( ".concat(numberArticle, " article )"))), articleList.map(function (product, index) {
    switch (product.categorie) {
      case "fourniture et pose cordage":
        return /*#__PURE__*/React.createElement("div", {
          className: "cart-content__product-wrapper-instal-with-string",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "cart-content__instal-with-string-top"
        }, /*#__PURE__*/React.createElement("div", {
          className: "cart-content__text-weight-uppercase"
        }, "  Fourniture et pose cordage "), /*#__PURE__*/React.createElement("div", {
          className: "cart-content__product-price"
        }, /*#__PURE__*/React.createElement("div", null, (product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", {
          minimumFractionDigits: 2
        }), " \u20AC"))), /*#__PURE__*/React.createElement("div", {
          className: "cart-content__content-on-one-line"
        }, /*#__PURE__*/React.createElement("div", {
          className: "cart-content__cordage"
        }, /*#__PURE__*/React.createElement("div", null, " Cordage :"), /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          key: index,
          to: "/fiche_produit/cordage/".concat(product.stringFromShop.id),
          className: "cart-content__link-to-card-product"
        }, "  " + product.stringFromShop.mark + " " + product.stringFromShop.model))), /*#__PURE__*/React.createElement("div", null, " Tension cordage : ", product.stringRopeChoice, " kg "), /*#__PURE__*/React.createElement("div", {
          className: "cart-content__wrapper-icons"
        }, /*#__PURE__*/React.createElement(_dropDownSelectQuantity.default, {
          quantityForOneProduct: product.quantity,
          indexProductInArrayCart: index
        }), /*#__PURE__*/React.createElement(_Delete.default, {
          onClick: function onClick() {
            return handleClickDelete(index);
          },
          className: "cart-content__deleteIcon"
        })));
      case "pose cordage seule":
        return /*#__PURE__*/React.createElement("div", {
          className: "cart-content__product-wrapper-installation",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "cart-content__product-info-wrapper-left"
        }, /*#__PURE__*/React.createElement("div", {
          className: "cart-content__text-weight-uppercase"
        }, "  Pose cordage "), /*#__PURE__*/React.createElement("div", null, " Cordage : votre propre cordage "), /*#__PURE__*/React.createElement("div", null, " ", product.stringFromPlayer, " "), /*#__PURE__*/React.createElement("div", null, " Tension cordage : ", product.stringRopeChoice, " kg "), /*#__PURE__*/React.createElement("div", {
          className: "cart-content__wrapper-icons"
        }, /*#__PURE__*/React.createElement(_dropDownSelectQuantity.default, {
          quantityForOneProduct: product.quantity,
          indexProductInArrayCart: index
        }), /*#__PURE__*/React.createElement(_Delete.default, {
          onClick: function onClick() {
            return handleClickDelete(index);
          },
          className: "cart-content__deleteIcon"
        }))), /*#__PURE__*/React.createElement("div", {
          className: "cart-content__product-price"
        }, /*#__PURE__*/React.createElement("div", null, (product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", {
          minimumFractionDigits: 2
        }), " \u20AC")));
      case "balle":
      case "accessoire":
        return /*#__PURE__*/React.createElement("div", {
          className: "cart-content__product-wrapper",
          key: index
        }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          key: index,
          to: "/fiche_produit/".concat(product.categorie, "/").concat(product.id),
          className: "cart-content__link-to-card-product"
        }, /*#__PURE__*/React.createElement("img", {
          crossOrigin: "anonymous",
          src: product.image_url,
          alt: product.model,
          className: "cart-content__image"
        })), /*#__PURE__*/React.createElement("div", {
          className: "cart-content__product-info-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "cart-content__product-info-wrapper-left"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "cart-content__text-weight-uppercase"
        }, product.categorie), /*#__PURE__*/React.createElement("div", null, product.mark), /*#__PURE__*/React.createElement("div", null, product.model)), /*#__PURE__*/React.createElement("div", {
          className: "cart-content__wrapper-icons"
        }, /*#__PURE__*/React.createElement(_dropDownSelectQuantity.default, {
          quantityForOneProduct: product.quantity,
          indexProductInArrayCart: index
        }), /*#__PURE__*/React.createElement(_Delete.default, {
          onClick: function onClick() {
            return handleClickDelete(index);
          },
          className: "cart-content__deleteIcon"
        }))), /*#__PURE__*/React.createElement("div", {
          className: "cart-content__product-price"
        }, /*#__PURE__*/React.createElement("div", null, (product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", {
          minimumFractionDigits: 2
        }), " \u20AC"))));
      default:
        return null;
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "cart__summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-summary__first-line"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-summary__title"
  }, " r\xE9capitulatif ")), /*#__PURE__*/React.createElement("div", {
    className: "cart-summary__detail-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-summary__number-product"
  }, /*#__PURE__*/React.createElement("div", null, numberArticle > 1 ? " ".concat(numberArticle, " articles ") : " ".concat(numberArticle, " article ")), /*#__PURE__*/React.createElement("div", null, "  ", totalPrice, " \u20AC "))), /*#__PURE__*/React.createElement("div", {
    className: "cart-summary__total-line"
  }, /*#__PURE__*/React.createElement("div", null, " Total "), /*#__PURE__*/React.createElement("div", null, " ", totalPrice, " \u20AC ")), /*#__PURE__*/React.createElement("button", {
    onClick: handleClickGoToOrder,
    className: "btn btn-green btn-commander btn-cart",
    type: "submit"
  }, "Commander"), isArticleListWithoutString ? /*#__PURE__*/React.createElement(_ModalToAskToAddString.default, null) : "")) : /*#__PURE__*/React.createElement("h2", {
    className: "empty-cart"
  }, "Votre panier est vide")));
}