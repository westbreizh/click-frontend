"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Order;
var _react = require("react");
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _ModalLoginOrSignupFromOrder = _interopRequireDefault(require("../../components/modal/modalLoginOrSignup/ModalLoginOrSignupFromOrder"));
var _cartSlice = require("../../store/cartSlice");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//import logoPaiment from "../../assets/logo-Paiement-carte-bleu.webp"
//import logoPaypal from "../../assets/logo-paypal.jpeg"
//import { loadStripe } from '@stripe/stripe-js'
function Order() {
  var isConnected = (0, _reactRedux.useSelector)(function (state) {
    return state.user.isConnected;
  });
  var articleList = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.articleList;
  });
  var totalPrice = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.totalPrice;
  });
  var userInfo = (0, _reactRedux.useSelector)(function (state) {
    return state.user.userInfo;
  });
  var token = (0, _reactRedux.useSelector)(function (state) {
    return state.user.token;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var navigate = (0, _reactRouterDom.useNavigate)();

  //on récupère les infos du lieu et de la raquette depuis articleList 
  var racquetPlayer = null;
  var hubBackChoice = null;
  var hubChoice = null;
  if (articleList && articleList.length > 0) {
    var _iterator = _createForOfIteratorHelper(articleList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var article = _step.value;
        if (article.categorie !== "balle" && article.categorie !== "accessoire") {
          racquetPlayer = article.racquetPlayer;
          hubBackChoice = article.hubBackChoice;
          hubChoice = article.hubChoice;
          break; // Utilisation du break pour sortir de la boucle
        } else {
          console.log("on boucle");
        }
      }
      // Le reste de votre composant
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  //on arrive sur la page non connecté, le modal de connexion ou inscription s'affiche
  // transmet comme props au modal la fonction interrupteur on //off pour le X de fermeture 
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isModalConnexionOpen = _useState2[0],
    setModalConnexionOpen = _useState2[1];
  var closeModalConnexion = function closeModalConnexion() {
    setModalConnexionOpen(false);
  };

  //gestion du choix de paiement
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    paiementInlineChecked = _useState4[0],
    setPaiementInlineChecked = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    paiementInShopChecked = _useState6[0],
    setPaiementInShopChecked = _useState6[1];
  var handlePaiementInlineChange = function handlePaiementInlineChange() {
    setPaiementInlineChecked(!paiementInlineChecked);
    setPaiementInShopChecked(false); // Décoche l'autre case si elle est cochée
    setShowError(false);
  };
  var handlePaiementInShopChange = function handlePaiementInShopChange() {
    setPaiementInShopChecked(!paiementInShopChecked);
    setPaiementInlineChecked(false); // Décoche l'autre case si elle est cochée
    setShowError(false);
  };
  // gestion du cas ou pas de moyen de paiement a été selectionné
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showError = _useState8[0],
    setShowError = _useState8[1];
  var handleClickNoOptionPaiement = function handleClickNoOptionPaiement(event) {
    setShowError(true);
  };

  //logique pour paiement en ligne
  //const PUBLIC_KEY = "pk_live_51NGdYqI8HrVwrRfPvO0VCSPgquB0SZOcQeifdVeXzlryvLj2gpTf6EufvCPRJ7SD1M9iCjTY7ZTwySpWtjYibzb100TJ7uXJag"
  //const stripePromise =loadStripe (PUBLIC_KEY)
  var handleSubmitInlignePaiement = function handleSubmitInlignePaiement(event) {
    event.preventDefault();

    // Créez un formulaire virtuel pour envoyer les données
    var form = document.createElement('form');
    form.method = 'POST';

    // Traitement pour paiement en ligne
    form.action = 'https://click-backend.herokuapp.com/api/stripe/create-checkout-session';

    // Ajoutez un champ de formulaire caché avec la valeur de la liste d'articles
    var datasInput = document.createElement('input');
    datasInput.type = 'hidden';
    datasInput.name = 'datas';
    datasInput.value = JSON.stringify({
      userInfo: userInfo,
      articleList: articleList,
      totalPrice: totalPrice,
      hubChoice: hubChoice,
      hubBackChoice: hubBackChoice,
      token: token,
      racquetPlayer: racquetPlayer
    });

    // Ajoutez le champ de formulaire au formulaire virtuel
    form.appendChild(datasInput);

    // Ajoutez le formulaire virtuel à la page et soumettez-le
    document.body.appendChild(form);
    form.submit();
  };

  //logique pour paiement en direct
  var handleClickShopPaiement = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var response, result, _result, errorMessage;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("https://click-backend.herokuapp.com/api/shop/paiement-in-shop", {
              mode: "cors",
              method: "POST",
              body: JSON.stringify({
                userInfo: userInfo,
                articleList: articleList,
                totalPrice: totalPrice,
                hubChoice: hubChoice,
                hubBackChoice: hubBackChoice,
                token: token,
                racquetPlayer: racquetPlayer
              }),
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer ".concat(token)
              }
            });
          case 3:
            response = _context.sent;
            if (response.ok) {
              _context.next = 11;
              break;
            }
            _context.next = 7;
            return response.json();
          case 7:
            result = _context.sent;
            throw new Error(" ".concat(result.message));
          case 11:
            _context.next = 13;
            return response.json();
          case 13:
            _result = _context.sent;
            dispatch((0, _cartSlice.resetCart)());
            navigate("/commande-passé");
            console.log(_result);
          case 17:
            _context.next = 23;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            errorMessage = _context.t0.toString();
            console.log(errorMessage);
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 19]]);
    }));
    return function handleClickShopPaiement(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    dispatch((0, _cartSlice.calculNumberArticle)());
    dispatch((0, _cartSlice.calculTotalPrice)());
  }, []);

  //console.log("articleList", articleList)
  //console.log("raquet player",racquetPlayer)
  //console.log("articleList",articleList)

  return /*#__PURE__*/React.createElement("main", {
    className: "order__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order__bg"
  }), /*#__PURE__*/React.createElement("section", {
    className: "order__contenair"
  }, isConnected ? /*#__PURE__*/React.createElement(React.Fragment, null, articleList && articleList.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "order__title"
  }, " Finaliser ma commande "), /*#__PURE__*/React.createElement("div", {
    className: "order__sub-contenair"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order__contenair-cart"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "order__sub-title"
  }, " r\xE9capitulatif "), /*#__PURE__*/React.createElement("div", {
    className: "order__cart-detail-wrapper"
  }, articleList.map(function (product, index) {
    switch (product.categorie) {
      case "fourniture et pose cordage":
        return /*#__PURE__*/React.createElement("div", {
          className: "order-cart__product-wrapper-instal-with-string",
          key: index
        }, console.log("product", product), /*#__PURE__*/React.createElement("div", {
          className: "order-cart__instal-with-string-top"
        }, /*#__PURE__*/React.createElement("div", {
          className: "order-cart__text-weight-uppercase"
        }, "  Fourniture et pose cordage "), /*#__PURE__*/React.createElement("div", {
          className: "order-cart__product-price"
        }, /*#__PURE__*/React.createElement("div", null, (product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", {
          minimumFractionDigits: 2
        }), " \u20AC"))), /*#__PURE__*/React.createElement("div", {
          className: "order-cart__content-on-one-line"
        }, /*#__PURE__*/React.createElement("div", {
          className: "order-cart__cordage"
        }, /*#__PURE__*/React.createElement("div", null, " Cordage : "), /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          key: index,
          to: "/fiche_produit/cordage/".concat(product.stringFromShop.id),
          className: "order-cart__link-to-card-product"
        }, product.stringFromShop.mark + " " + product.stringFromShop.model))));
      case "pose cordage seule":
        return /*#__PURE__*/React.createElement("div", {
          className: "order-cart__product-wrapper-installation",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "order-cart__product-info-wrapper-left"
        }, /*#__PURE__*/React.createElement("div", {
          className: "order-cart__text-weight-uppercase"
        }, "  Pose cordage "), /*#__PURE__*/React.createElement("div", null, " Cordage : votre propre cordage "), /*#__PURE__*/React.createElement("div", null, " ", product.stringFromPlayer, " ")), /*#__PURE__*/React.createElement("div", {
          className: "order-cart__product-price"
        }, /*#__PURE__*/React.createElement("div", null, (product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", {
          minimumFractionDigits: 2
        }), " \u20AC")));
      case "balle":
      case "accessoire":
        return /*#__PURE__*/React.createElement("div", {
          className: "order-cart__product-wrapper",
          key: index
        }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          key: index,
          to: "/fiche_produit/".concat(product.categorie, "/").concat(product.id),
          className: "order-cart__link-to-card-product"
        }, /*#__PURE__*/React.createElement("img", {
          crossOrigin: "anonymous",
          src: product.image_url,
          alt: product.model,
          className: "order-cart__image"
        })), /*#__PURE__*/React.createElement("div", {
          className: "order-cart__product-info-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "order-cart__product-info-wrapper-left"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "order-cart__text-weight-uppercase"
        }, product.categorie), /*#__PURE__*/React.createElement("div", null, product.mark), /*#__PURE__*/React.createElement("div", null, product.model), /*#__PURE__*/React.createElement("div", null, " Quantit\xE9 : ", product.quantity))), /*#__PURE__*/React.createElement("div", {
          className: "order-cart__product-price"
        }, /*#__PURE__*/React.createElement("div", null, (product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", {
          minimumFractionDigits: 2
        }), " \u20AC"))));
      default:
        return null;
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "cart-summary__total-line"
  }, /*#__PURE__*/React.createElement("div", null, " Total "), /*#__PURE__*/React.createElement("div", null, " ", totalPrice, " \u20AC "))), /*#__PURE__*/React.createElement("div", {
    className: "order__contenair-info"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "order__sub-title"
  }, " Lieu de d\xE9pot et retour "), /*#__PURE__*/React.createElement("div", {
    className: "order-hub__title"
  }, " D\xE9pot :"), /*#__PURE__*/React.createElement("div", null, " ", hubChoice.enterprise_name, " "), /*#__PURE__*/React.createElement("div", null, " ", hubChoice.road, " - ", hubChoice.city, " "), /*#__PURE__*/React.createElement("div", {
    className: "order-hub__title"
  }, " Retour de service :"), /*#__PURE__*/React.createElement("div", null, " ", hubBackChoice.enterprise_name, " "), /*#__PURE__*/React.createElement("div", null, " ", hubBackChoice.road, " - ", hubBackChoice.city, " ")), /*#__PURE__*/React.createElement("div", {
    className: "order__contenair-info"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "order__sub-title"
  }, " Moyen de paiement "), /*#__PURE__*/React.createElement("div", {
    className: "order_paiement-mode-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order_paiement-mode-subWrapper"
  }, /*#__PURE__*/React.createElement("label", {
    className: "order_checkbox_label"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "paiementInShop",
    className: "order_checkbox_input",
    checked: paiementInShopChecked
  }), "Paiement en boutique"), /*#__PURE__*/React.createElement("div", {
    className: "order_checkbox-text-under"
  }, "Le r\xE8glement se fera lors de ", /*#__PURE__*/React.createElement("br", null), " votre passage en boutique")))), /*#__PURE__*/React.createElement("div", {
    className: "order__contenair-info order__contenair-info-button"
  }, showError && /*#__PURE__*/React.createElement("p", {
    className: "input__error message__errorOrderPaiement"
  }, "Veuillez saisir un mode de paiement, merci !"), paiementInlineChecked === true ? /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmitInlignePaiement
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-green btn-commander btn-cart",
    type: "submit"
  }, "Commander")) : "", paiementInShopChecked === true ? /*#__PURE__*/React.createElement("button", {
    onClick: handleClickShopPaiement,
    className: "btn btn-green btn-commander btn-cart",
    type: "submit"
  }, "Commander") : "", paiementInShopChecked === false && paiementInlineChecked === false ? /*#__PURE__*/React.createElement("button", {
    onClick: handleClickNoOptionPaiement,
    className: "btn btn-green btn-commander btn-cart",
    type: "submit"
  }, "Commander") : ""))) : "") : /*#__PURE__*/React.createElement(_ModalLoginOrSignupFromOrder.default, {
    closeModalConnexion: closeModalConnexion
  })));
}