"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PreferencePlayer;
var _react = require("react");
var _NavbarAccount = _interopRequireDefault(require("../../components/navbar/NavbarAccount"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _SelectHub = _interopRequireDefault(require("../../components/select/SelectHub"));
var _SelectHubBack = _interopRequireDefault(require("../../components/select/SelectHubBack"));
var _SelectString = _interopRequireDefault(require("../../components/select/SelectString"));
var _SelectRopeString = _interopRequireDefault(require("../../components/select/SelectRopeString"));
var _userSlice = require("../../store/userSlice");
var _cartSlice = require("../../store/cartSlice");
var _ModalValidationChangePreferences = _interopRequireDefault(require("../../components/modal/modalValidation/ModalValidationChangePreferences"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function PreferencePlayer() {
  var userInfo = (0, _reactRedux.useSelector)(function (state) {
    return state.user.userInfo;
  });
  var stringFromShop = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.stringFromShopChoice;
  });
  var token = (0, _reactRedux.useSelector)(function (state) {
    return state.user.token;
  });
  var _useState = (0, _react.useState)(userInfo.stringFromPlayer),
    _useState2 = _slicedToArray(_useState, 2),
    stringFromPlayer = _useState2[0],
    setStringFromPlayer = _useState2[1];
  var _useState3 = (0, _react.useState)(userInfo.string_rope),
    _useState4 = _slicedToArray(_useState3, 2),
    stringRopeChoice = _useState4[0],
    setStringRopeChoice = _useState4[1];
  var _useState5 = (0, _react.useState)(userInfo.hubInfo),
    _useState6 = _slicedToArray(_useState5, 2),
    hubChoice = _useState6[0],
    setHubChoice = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    stringFromPlayerSelected = _useState8[0],
    setStringFromPlayerSelected = _useState8[1];
  var _useState9 = (0, _react.useState)(userInfo.hubBackInfo),
    _useState10 = _slicedToArray(_useState9, 2),
    hubBackChoice = _useState10[0],
    setHubBackChoice = _useState10[1];
  var _useState11 = (0, _react.useState)(userInfo.racquet_player),
    _useState12 = _slicedToArray(_useState11, 2),
    racquetPlayer = _useState12[0],
    setRacquetPlayer = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isSubmenuValidationOpen = _useState14[0],
    setSubmenuValidation = _useState14[1];
  var _useState15 = (0, _react.useState)(userInfo.stringFromPlayerOrigin),
    _useState16 = _slicedToArray(_useState15, 2),
    stringFromPlayerOrigin = _useState16[0],
    setStringFromPlayerOrigin = _useState16[1];
  var _useState17 = (0, _react.useState)(userInfo.numberKnot),
    _useState18 = _slicedToArray(_useState17, 2),
    numberKnotChoice = _useState18[0],
    setnumberKnotChoice = _useState18[1];

  // par défault on corde avec 4 noeuds
  if (numberKnotChoice == null) {
    setnumberKnotChoice("4");
  }
  ;
  var store = (0, _reactRedux.useStore)();

  //recupération de la saisie de la marque/type de la raquette
  var handleRacquetPlayerChange = function handleRacquetPlayerChange(event) {
    var value = event.target.value;
    setRacquetPlayer(value);
  };
  //recupération de la saisie de la marque/type du cordage fournit par le joueur
  var handleOwnStringPlayerChange = function handleOwnStringPlayerChange(event) {
    var value = event.target.value;
    setStringFromPlayer(value);
  };

  //fonction asynchrone vers le backend pour modifier
  //les préférences de cordages 
  var savePreferencePlayer = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var stringFromShopId, stringFromPlayerToSend, response, result, _result, errorMessage;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // met à null l'une des deux valeurs selon cordage du joueur ou du magazin choisi
            stringFromShopId = "";
            stringFromPlayerToSend = "";
            if (stringFromShop !== null && stringFromShop !== undefined && stringFromPlayerSelected === false) {
              stringFromShopId = stringFromShop.id;
              stringFromPlayerToSend = null;
            } else {
              stringFromShopId = null;
              stringFromPlayerToSend = stringFromPlayer;
            }
            _context.prev = 3;
            _context.next = 6;
            return fetch("https://click-backend.herokuapp.com/api/user/savePreferencePlayer", {
              mode: "cors",
              method: "POST",
              body: JSON.stringify({
                userId: userInfo.id,
                stringFromPlayer: stringFromPlayerToSend,
                stringFromShopId: stringFromShopId,
                stringRopeChoice: stringRopeChoice,
                racquetPlayer: racquetPlayer,
                hubChoiceId: hubChoice.id,
                hubBackChoiceId: hubBackChoice.id,
                stringFromPlayerOrigin: stringFromPlayerOrigin,
                numberKnotChoice: numberKnotChoice
              }),
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer ".concat(token)
              }
            });
          case 6:
            response = _context.sent;
            if (response.ok) {
              _context.next = 14;
              break;
            }
            _context.next = 10;
            return response.json();
          case 10:
            result = _context.sent;
            throw new Error(" ".concat(result.message));
          case 14:
            _context.next = 16;
            return response.json();
          case 16:
            _result = _context.sent;
            console.log(_result.message);
          case 18:
            _context.next = 24;
            break;
          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](3);
            errorMessage = _context.t0.toString();
            console.log(errorMessage);
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 20]]);
    }));
    return function savePreferencePlayer(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  //fonction asynchrone vers le backend pour recuperer
  //les infos utilisateurs avec les modifications venant d'être apporté  
  var loadDataPlayerAfterModif = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
      var response, result, _result2, updatedPlayerData, errorMessage;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("https://click-backend.herokuapp.com/api/user/loadDataPlayerAfterModif", {
              mode: "cors",
              method: "POST",
              body: JSON.stringify({
                email: userInfo.email
              }),
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer ".concat(token)
              }
            });
          case 3:
            response = _context2.sent;
            if (response.ok) {
              _context2.next = 11;
              break;
            }
            _context2.next = 7;
            return response.json();
          case 7:
            result = _context2.sent;
            throw new Error(" ".concat(result.message));
          case 11:
            _context2.next = 13;
            return response.json();
          case 13:
            _result2 = _context2.sent;
            console.log(_result2.message);
            updatedPlayerData = _result2.updatedPlayerData;
            console.log("updatedPlayerData", updatedPlayerData);
            store.dispatch((0, _userSlice.setUserInfo)(updatedPlayerData));
            store.dispatch((0, _cartSlice.resetStringFromShopChoice)(updatedPlayerData.stringInfo));
          case 19:
            _context2.next = 25;
            break;
          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](0);
            errorMessage = _context2.t0.toString();
            console.log(errorMessage);
          case 25:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 21]]);
    }));
    return function loadDataPlayerAfterModif(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  // fonction qui appele la fonction pour sauvegarder les preference joueur 
  //et ensuite reacharge les modifs  
  var onSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var errorMessage;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return savePreferencePlayer();
          case 3:
            _context3.next = 5;
            return loadDataPlayerAfterModif();
          case 5:
            setSubmenuValidation(true);
            _context3.next = 12;
            break;
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            errorMessage = _context3.t0.toString();
            console.log(errorMessage);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 8]]);
    }));
    return function onSubmit() {
      return _ref3.apply(this, arguments);
    };
  }();

  //console.log("numberKnotChoice", numberKnotChoice)
  //console.log("stringFromPlayerOrigin", stringFromPlayerOrigin)
  //console.log("userInfo", userInfo)
  //console.log("stringFromShop", stringFromShop)
  //console.log("stringFromplayer", stringFromPlayer)

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_NavbarAccount.default, null), /*#__PURE__*/React.createElement("main", {
    className: "stringing__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: " stringing__bg"
  }, " "), /*#__PURE__*/React.createElement("section", {
    className: " prefPlayer__contenair "
  }, /*#__PURE__*/React.createElement("div", {
    className: "stringing-header__wrapper"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "account__header__h1"
  }, "choisissez  vos pref\xE9rences")), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__contenair"
  }, /*#__PURE__*/React.createElement("div", {
    className: " stringing-form__section-wrapper"
  }, /*#__PURE__*/React.createElement("label", {
    className: "stringing-form__label"
  }, "Cordage "), /*#__PURE__*/React.createElement(_SelectString.default, {
    setStringFromPlayerSelected: setStringFromPlayerSelected,
    setStringFromPlayer: setStringFromPlayer
  }), stringFromShop !== null && stringFromShop !== undefined && stringFromPlayerSelected === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__own-string-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "validation-bubble-checked"
  }, /*#__PURE__*/React.createElement("span", null, "\u2713")), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__text-h2"
  }, "Cordage choisi : \xA0")), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__string-wrapper "
  }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
    to: "/fiche_produit/cordage/".concat(stringFromShop.id),
    className: " stringing-form__string-link "
  }, /*#__PURE__*/React.createElement("img", {
    crossOrigin: "anonymous",
    src: stringFromShop.image_url,
    alt: stringFromShop.model,
    className: "stringing-form__string-img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__string-product-info-wrapper "
  }, /*#__PURE__*/React.createElement("div", null, stringFromShop.mark), /*#__PURE__*/React.createElement("div", null, stringFromShop.model), /*#__PURE__*/React.createElement("div", null, stringFromShop.price, " \u20AC"))))), stringFromPlayerSelected === true || stringFromPlayer !== null && stringFromShop === null ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__own-string-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "validation-bubble-checked "
  }, /*#__PURE__*/React.createElement("span", null, "\u2713")), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__text-h2"
  }, "Je fournis mon propre cordage (pose 10 \u20AC)")), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__section-wrapper string-description"
  }, /*#__PURE__*/React.createElement("label", {
    className: "stringing-form__label stringing-form__sub-label"
  }, "Descriptif de votre cordage"), /*#__PURE__*/React.createElement("input", {
    value: stringFromPlayer !== null ? stringFromPlayer : "",
    type: "text",
    className: "stringing-form__input-text",
    onClick: function onClick() {
      return setStringFromPlayer("");
    },
    onChange: handleOwnStringPlayerChange
  }))) : null), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__section-wrapper"
  }, /*#__PURE__*/React.createElement("label", {
    className: "stringing-form__label"
  }, " Choix de la tension  "), /*#__PURE__*/React.createElement(_SelectRopeString.default, {
    setStringRopeChoice: setStringRopeChoice
  }), stringRopeChoice && stringRopeChoice !== "" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__own-string-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "validation-bubble-checked     "
  }, /*#__PURE__*/React.createElement("span", null, "\u2713")), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__text-h2"
  }, "Tension de cordage choisi :\xA0", /*#__PURE__*/React.createElement("span", {
    className: "stringing__important-info"
  }, stringRopeChoice, " kg"))), /*#__PURE__*/React.createElement("div", {
    className: "number-knot__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "number-knot__title"
  }, " Pos\xE9 avec : "), /*#__PURE__*/React.createElement("div", {
    className: "number-knot__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "number-knot__input-checkbox"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "order-stringer-detail__checkbox",
    onChange: function onChange() {
      return setnumberKnotChoice("4");
    },
    checked: numberKnotChoice === "4"
  }), /*#__PURE__*/React.createElement("div", {
    className: "order-stringer-detail__checkbox-text"
  }, "4 noeuds")), /*#__PURE__*/React.createElement("div", {
    className: "number-knot__input-checkbox"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "order-stringer-detail__checkbox",
    onChange: function onChange() {
      return setnumberKnotChoice("2");
    },
    checked: numberKnotChoice === "2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "order-stringer-detail__checkbox-text"
  }, "2 noeuds"))))) : null), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__section-wrapper"
  }, /*#__PURE__*/React.createElement("label", {
    className: "stringing-form__label stringing-form__sub-label"
  }, "Descriptif de votre raquette"), /*#__PURE__*/React.createElement("input", {
    value: racquetPlayer,
    type: "text",
    className: "stringing-form__input-text",
    onClick: function onClick() {
      return setRacquetPlayer("");
    },
    onChange: handleRacquetPlayerChange
  })), /*#__PURE__*/React.createElement("div", {
    className: " stringing-form__section-wrapper "
  }, /*#__PURE__*/React.createElement("label", {
    className: "stringing-form__label"
  }, "Lieu de d\xE9pot "), /*#__PURE__*/React.createElement(_SelectHub.default, {
    setHubChoice: setHubChoice
  }), hubChoice && hubChoice !== "" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__address-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "validation-bubble-checked     "
  }, /*#__PURE__*/React.createElement("span", null, "\u2713")), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__text-h2"
  }, "Lieu de d\xE9pot choisi : \xA0"), /*#__PURE__*/React.createElement("span", {
    className: "stringing__important-info"
  }, hubChoice.enterprise_name)), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__text-address"
  }, hubChoice.road, " - ", hubChoice.city)) : null), /*#__PURE__*/React.createElement("div", {
    className: " stringing-form__section-wrapper"
  }, /*#__PURE__*/React.createElement("label", {
    className: "stringing-form__label"
  }, " Retour de service "), /*#__PURE__*/React.createElement(_SelectHubBack.default, {
    setHubBackChoice: setHubBackChoice
  }), hubBackChoice && hubBackChoice !== "" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__address-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "validation-bubble-checked     "
  }, /*#__PURE__*/React.createElement("span", null, "\u2713")), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__text-h2"
  }, "Lieu de retour  :", ""), /*#__PURE__*/React.createElement("span", {
    className: "stringing__important-info"
  }, hubBackChoice.enterprise_name)), /*#__PURE__*/React.createElement("div", {
    className: "stringing-form__text-address"
  }, hubBackChoice.road, " - ", hubBackChoice.city)) : null), /*#__PURE__*/React.createElement("div", {
    className: " stringing-form__section-wrapper stringing-form__section-wrapper-button"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onSubmit();
    },
    type: "submit",
    className: "stringing-form__btn-order btn btn-blue"
  }, "Sauvegarder mes choix"), isSubmenuValidationOpen && /*#__PURE__*/React.createElement(_ModalValidationChangePreferences.default, {
    setSubmenuValidation: setSubmenuValidation
  }))))));
}