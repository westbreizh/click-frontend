"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Router;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Header = _interopRequireDefault(require("../components/header/Header"));
var _Footer = _interopRequireDefault(require("../components/footer/Footer"));
var _ScrollToTop = _interopRequireDefault(require("../components/scrollToTop/ScrollToTop"));
var _Home = _interopRequireDefault(require("../pages/home/Home"));
var _Singup = _interopRequireDefault(require("../pages/singup/Singup"));
var _Coordinate = _interopRequireDefault(require("../pages/account/Coordinate"));
var _PreferencePlayer = _interopRequireDefault(require("../pages/account/PreferencePlayer"));
var _OrderHistory = _interopRequireDefault(require("../pages/account/OrderHistory"));
var _OrderDetailHistory = _interopRequireDefault(require("../pages/account/OrderDetailHistory"));
var _Stringing = _interopRequireDefault(require("../pages/stringing/Stringing"));
var _String = _interopRequireDefault(require("../pages/shop/String"));
var _Ball = _interopRequireDefault(require("../pages/shop/Ball"));
var _Accessories = _interopRequireDefault(require("../pages/shop/Accessories"));
var _ProductStringPage = _interopRequireDefault(require("../pages/shop/ProductStringPage"));
var _ProductBallPage = _interopRequireDefault(require("../pages/shop/ProductBallPage"));
var _ProductAccessoriesPage = _interopRequireDefault(require("../pages/shop/ProductAccessoriesPage"));
var _Cart = _interopRequireDefault(require("../pages/cart/Cart"));
var _ErrorPages = _interopRequireDefault(require("../pages/errorPage/ErrorPages"));
var _order = _interopRequireDefault(require("../pages/order/order"));
var _ResetPassword = _interopRequireDefault(require("../pages/resetPassword/ResetPassword"));
var _SuccesPaiement = _interopRequireDefault(require("../pages/afterPaiement/SuccesPaiement"));
var _EchecPaiement = _interopRequireDefault(require("../pages/afterPaiement/EchecPaiement"));
var _OrderPassed = _interopRequireDefault(require("../pages/orderPassed/OrderPassed"));
var _OrderDetailForStringer = _interopRequireDefault(require("../pages/stringer/OrderDetailForStringer"));
var _RacquetToTake = _interopRequireDefault(require("../pages/stringer/RacquetToTake"));
var _RacquetToString = _interopRequireDefault(require("../pages/stringer/RacquetToString"));
var _RacquetReady = _interopRequireDefault(require("../pages/stringer/RacquetReady"));
var _historyOrderStringer = _interopRequireDefault(require("../pages/stringer/historyOrderStringer"));
var _CoordinatePlayer = _interopRequireDefault(require("../pages/stringer/CoordinatePlayer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Router() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, {
    scrollBehavior: "smooth"
  }, /*#__PURE__*/_react.default.createElement(_ScrollToTop.default, null), /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_Home.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/inscription",
    element: /*#__PURE__*/_react.default.createElement(_Singup.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/cordez",
    element: /*#__PURE__*/_react.default.createElement(_Stringing.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/cordages",
    element: /*#__PURE__*/_react.default.createElement(_String.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/fiche_produit/cordage/:productId",
    element: /*#__PURE__*/_react.default.createElement(_ProductStringPage.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/balles",
    element: /*#__PURE__*/_react.default.createElement(_Ball.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/fiche_produit/balle/:productId",
    element: /*#__PURE__*/_react.default.createElement(_ProductBallPage.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/accessoires",
    element: /*#__PURE__*/_react.default.createElement(_Accessories.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/fiche_produit/accessoire/:productId",
    element: /*#__PURE__*/_react.default.createElement(_ProductAccessoriesPage.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/panier",
    element: /*#__PURE__*/_react.default.createElement(_Cart.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/coordonn\xE9es",
    element: /*#__PURE__*/_react.default.createElement(_Coordinate.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/commande",
    element: /*#__PURE__*/_react.default.createElement(_order.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/pr\xE9f\xE9rences_joueur",
    element: /*#__PURE__*/_react.default.createElement(_PreferencePlayer.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/historique_commandes",
    element: /*#__PURE__*/_react.default.createElement(_OrderHistory.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/historique_commandes/:orderId",
    element: /*#__PURE__*/_react.default.createElement(_OrderDetailHistory.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/passwordReset/:token/:id",
    element: /*#__PURE__*/_react.default.createElement(_ResetPassword.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/paiement-accepte",
    element: /*#__PURE__*/_react.default.createElement(_SuccesPaiement.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/paiement-refuse",
    element: /*#__PURE__*/_react.default.createElement(_EchecPaiement.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/commande-pass\xE9",
    element: /*#__PURE__*/_react.default.createElement(_OrderPassed.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/*",
    element: /*#__PURE__*/_react.default.createElement(_ErrorPages.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/cordeur_raquettes-\xE0-retirer",
    element: /*#__PURE__*/_react.default.createElement(_RacquetToTake.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/cordeur_raquettes-\xE0-corder",
    element: /*#__PURE__*/_react.default.createElement(_RacquetToString.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/cordeur_raquettes-pr\xEAte",
    element: /*#__PURE__*/_react.default.createElement(_RacquetReady.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/cordeur_commandes-historique",
    element: /*#__PURE__*/_react.default.createElement(_historyOrderStringer.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/d\xE9tails_commande/:orderId",
    element: /*#__PURE__*/_react.default.createElement(_OrderDetailForStringer.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/fiche_joueur/:userId",
    element: /*#__PURE__*/_react.default.createElement(_CoordinatePlayer.default, null)
  })), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}