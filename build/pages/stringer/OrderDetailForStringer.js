"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OrderDetailForStringer;
var _react = require("react");
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _TennisSpinner = _interopRequireDefault(require("../../components/loadingSpinner/TennisSpinner"));
var _BackNavArrowStringer = _interopRequireDefault(require("../../components/button/BackNavArrowStringer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function OrderDetailForStringer() {
  // on récupère l'id dans l'url de la page
  var orderIdParam = (0, _reactRouterDom.useParams)();
  var orderId = orderIdParam.orderId;
  var token = (0, _reactRedux.useSelector)(function (state) {
    return state.user.token;
  });
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    oneOrder = _useState2[0],
    setOneOrder = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedOrder = _useState4[0],
    setSelectedOrder = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    hub = _useState6[0],
    setHub = _useState6[1];

  // gestion de l'état de validation du bouton pour ajouter le produit  
  var isValid = selectedOrder.length !== 0;
  var navigate = (0, _reactRouterDom.useNavigate)();

  //fonction asynchrone vers le backend pour recupérer 
  //l'historique de la  commandes effectué par le joueur 
  var loadOneOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var response, result, _result, orderInfo, errorMessage;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("https://click-backend.herokuapp.com/api/stringer/oneOrder", {
              mode: "cors",
              method: "POST",
              body: JSON.stringify({
                orderId: orderId
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
            orderInfo = _result.data.orderInfo;
            setOneOrder(orderInfo[0]);
            setHub(JSON.parse(orderInfo[0].hub));
            console.log(_result.message);
          case 18:
            _context.next = 24;
            break;
          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            errorMessage = _context.t0.toString();
            console.log(errorMessage);
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 20]]);
    }));
    return function loadOneOrder(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  //fonction asynchrone vers le backend pour valider 
  //le changement de status
  var changeStatusOrder = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
      var response, result, _result2, errorMessage;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("https://click-backend.herokuapp.com/api/stringer/change-status-order", {
              mode: "cors",
              method: "POST",
              body: JSON.stringify({
                orderId: selectedOrder,
                statusOrder: oneOrder.statusOrder
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
            navigate(-1);
          case 16:
            _context2.next = 22;
            break;
          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            errorMessage = _context2.t0.toString();
            console.log(errorMessage);
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 18]]);
    }));
    return function changeStatusOrder(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  //fonction qui ajoute l'id de la commande à la liste
  var handleCheckboxChange = function handleCheckboxChange(e, orderId) {
    var isChecked = e.target.checked;
    if (isChecked) {
      setSelectedOrder(function (prevSelectedOrders) {
        return [].concat(_toConsumableArray(prevSelectedOrders), [orderId]);
      });
    } else {
      setSelectedOrder(function (prevSelectedOrders) {
        return prevSelectedOrders.filter(function (id) {
          return id !== orderId;
        });
      });
    }
  };

  // charger la listes des commandes  au chargement de la page
  (0, _react.useEffect)(function () {
    loadOneOrder();
  }, []);

  // console.log("oneorder", oneOrder)
  // console.log("hubObject", hub)

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("main", {
    className: "order-stringer__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-stringer__bg"
  }, " "), /*#__PURE__*/React.createElement("section", {
    className: "order-stringer__contenair"
  }, oneOrder !== "" ? /*#__PURE__*/React.createElement("div", {
    className: "oneOrder__contenair-cart oneOrder-stringer__contenair-cart"
  }, /*#__PURE__*/React.createElement(_BackNavArrowStringer.default, null), /*#__PURE__*/React.createElement("h2", {
    className: "oneOrder__sub-title oneOrder-stringer__sub-tittle"
  }, "  Commande n\xB0 ", oneOrder.id, " "), /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__wrapper-status"
  }, /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__first-line-status"
  }, /*#__PURE__*/React.createElement("div", null, "  Statut "), /*#__PURE__*/React.createElement("div", null, " ", oneOrder.statusOrder, " ")), /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__line-status"
  }, "Command\xE9 le ", " ", function () {
    var orderDate = new Date(oneOrder.orderDate);
    var options = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    };
    var dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
    return dateFrancaise;
  }()), oneOrder.statusOrder === "initié" ? /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__line-status"
  }, "Pr\xEAt \xE0 \xEAtre retir\xE9 \xE0  ", ' ', function () {
    var hub = JSON.parse(oneOrder.hub);
    return hub.enterprise_name;
  }()) : "", oneOrder.statusOrder === "prêt à corder" && hub.enterprise_name !== "KST Boutique" ? /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__line-status"
  }, "Raquette collect\xE9e le  ", ' ', function () {
    var orderDate = new Date(oneOrder.racquetTakenDate);
    var options = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    };
    var dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
    return dateFrancaise;
  }()) : "", oneOrder.statusOrder === "prête" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__line-status"
  }, "Raquette collect\xE9e le  ", ' ', function () {
    var orderDate = new Date(oneOrder.racquetTakenDate);
    var options = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    };
    var dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
    return dateFrancaise;
  }()), /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__line-status"
  }, "Raquette cord\xE9e le  ", ' ', function () {
    var orderDate = new Date(oneOrder.racquetTakenDate);
    var options = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    };
    var dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
    return dateFrancaise;
  }())) : "", oneOrder.statusOrder === "commande validée" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__line-status"
  }, "Raquette collect\xE9e le  ", ' ', function () {
    var orderDate = new Date(oneOrder.racquetTakenDate);
    var options = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    };
    var dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
    return dateFrancaise;
  }()), /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__line-status"
  }, "Raquette cord\xE9e le  ", ' ', function () {
    var orderDate = new Date(oneOrder.racquetTakenDate);
    var options = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    };
    var dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
    return dateFrancaise;
  }()), /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__line-status"
  }, "Commande valid\xE9e le  ", ' ', function () {
    var orderDate = new Date(oneOrder.orderValidateDate);
    var options = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    };
    var dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
    return dateFrancaise;
  }())) : ""), /*#__PURE__*/React.createElement("div", {
    className: "oneOrder__cart-detail-wrapper"
  }, JSON.parse(oneOrder.articleList).map(function (product, index) {
    switch (product.categorie) {
      case "fourniture et pose cordage":
        return /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__product-wrapper-instal-with-string",
          key: index
        }, console.log(product), /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__instal-with-string-top"
        }, /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__text-weight-uppercase"
        }, "  Fourniture et pose cordage "), /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__product-price"
        }, /*#__PURE__*/React.createElement("div", null, (product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", {
          minimumFractionDigits: 2
        }), " \u20AC"))), /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__content-on-one-line"
        }, /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__cordage"
        }, /*#__PURE__*/React.createElement("div", null, " Cordage :", /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          key: index,
          to: "/fiche_produit/cordage/".concat(product.stringFromShop.id),
          className: "oneOrderCart__link-to-card-product"
        }, product.stringFromShop.mark + " " + product.stringFromShop.model), " ")), /*#__PURE__*/React.createElement("div", null, product.stringFromShop.price, " \u20AC ")), /*#__PURE__*/React.createElement("div", null, " Tension de cordage : ", /*#__PURE__*/React.createElement("span", {
          className: "order-stringer__important-info"
        }, " ", product.stringRopeChoice, " kg"), "  "), /*#__PURE__*/React.createElement("div", null, " Nombre de noeuds : ", /*#__PURE__*/React.createElement("span", {
          className: "order-stringer__important-info"
        }, " ", product.numberKnotChoice, " "), "  "), /*#__PURE__*/React.createElement("div", null, " Raquette : ", /*#__PURE__*/React.createElement("span", {
          className: "order-stringer__important-info"
        }, " ", product.racquetPlayer, " "), " "), /*#__PURE__*/React.createElement("div", null, " Retour pr\xE9vu le : ", /*#__PURE__*/React.createElement("span", {
          className: "order-stringer__important-info"
        }, " ", product.dateRacquetReady, " "), " "));
      case "pose cordage seule":
        return /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__product-wrapper-installation",
          key: index
        }, console.log("produit", product), /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__product-info-wrapper-left"
        }, /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__text-weight-uppercase"
        }, "  Pose cordage "), /*#__PURE__*/React.createElement("div", null, " Cordage : votre propre cordage "), /*#__PURE__*/React.createElement("div", null, " ", product.stringFromPlayer, " "), /*#__PURE__*/React.createElement("div", null, " Tension de cordage : ", /*#__PURE__*/React.createElement("span", {
          className: "order-stringer__important-info"
        }, " ", product.stringRopeChoice, " kg"), "  "), /*#__PURE__*/React.createElement("div", null, " Nombre de noeuds : ", /*#__PURE__*/React.createElement("span", {
          className: "order-stringer__important-info"
        }, " ", product.numberKnotChoice, " "), "  "), /*#__PURE__*/React.createElement("div", null, " Raquette : ", /*#__PURE__*/React.createElement("span", {
          className: "order-stringer__important-info"
        }, " ", product.racquetPlayer, " "), " ")), /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__product-price"
        }, /*#__PURE__*/React.createElement("div", null, parseFloat((product.price * product.quantity).toFixed(2)), " \u20AC")));
      case "balle":
      case "accessoire":
        return /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__product-wrapper",
          key: index
        }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          key: index,
          to: "/fiche_produit/".concat(product.categorie, "/").concat(product.id),
          className: "oneOrderCart__link-to-card-product"
        }, /*#__PURE__*/React.createElement("img", {
          crossOrigin: "anonymous",
          src: product.image_url,
          alt: product.model,
          className: "oneOrderCart__image"
        })), /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__product-info-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__product-info-wrapper-left"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__text-weight-uppercase"
        }, product.categorie), /*#__PURE__*/React.createElement("div", null, product.mark), /*#__PURE__*/React.createElement("div", null, product.model), /*#__PURE__*/React.createElement("div", null, " Quantit\xE9 : ", product.quantity))), /*#__PURE__*/React.createElement("div", {
          className: "oneOrderCart__product-price"
        }, /*#__PURE__*/React.createElement("div", null, parseFloat((product.price * product.quantity).toFixed(2)), " \u20AC"))));
      default:
        return null;
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__wrapper-status"
  }, /*#__PURE__*/React.createElement("div", {
    className: "oneOrderCart__first-line-status"
  }, /*#__PURE__*/React.createElement("div", null, "Joueur")), function () {
    var userInfo = JSON.parse(oneOrder.userInfo);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, " ", userInfo.forename, " ", userInfo.lastname), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
      to: "/fiche_joueur/".concat(userInfo.id),
      className: "oneOrderCart__link-to-card-product"
    }, "Fiche joueur")));
  }()), /*#__PURE__*/React.createElement("div", {
    className: "cart-summary__total-line"
  }, /*#__PURE__*/React.createElement("div", null, " Total "), /*#__PURE__*/React.createElement("div", null, " ", oneOrder.totalPrice, " \u20AC "))) : /*#__PURE__*/React.createElement("div", {
    className: "loadingspinnerString"
  }, /*#__PURE__*/React.createElement(_TennisSpinner.default, null)), /*#__PURE__*/React.createElement("div", null, oneOrder.statusOrder !== "commande validée" ? /*#__PURE__*/React.createElement("div", {
    className: "order-stringer-detail__checkbox-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "order-stringer-detail__checkbox",
    onChange: function onChange(e) {
      return handleCheckboxChange(e, oneOrder.id);
    }
  }), oneOrder.statusOrder === "initié" ? /*#__PURE__*/React.createElement("div", {
    className: "order-stringer-detail__checkbox-text"
  }, "Valider la collecte de la raquette") : "", oneOrder.statusOrder === "prêt à corder" ? /*#__PURE__*/React.createElement("div", {
    className: "order-stringer-detail__checkbox-text"
  }, "Valider le cordage de la raquette") : "", oneOrder.statusOrder === "prête" ? /*#__PURE__*/React.createElement("div", {
    className: "order-stringer-detail__checkbox-text"
  }, "Valider la r\xE9cup\xE9ration de la commande") : "") : "", oneOrder.statusOrder === "initié" ? /*#__PURE__*/React.createElement("button", {
    disabled: !isValid,
    className: "stringing-form__btn-order btn btn-blue order-stringer__btn ".concat(isValid ? "" : "btn-blue-invalid"),
    onClick: function onClick() {
      return changeStatusOrder();
    }
  }, "Raquette collect\xE9e") : "", oneOrder.statusOrder === "prêt à corder" ? /*#__PURE__*/React.createElement("button", {
    disabled: !isValid,
    className: "stringing-form__btn-order btn btn-blue order-stringer__btn ".concat(isValid ? "" : "btn-blue-invalid"),
    onClick: function onClick() {
      return changeStatusOrder();
    }
  }, "Raquette cord\xE9e") : "", oneOrder.statusOrder === "prête" ? /*#__PURE__*/React.createElement("button", {
    disabled: !isValid,
    className: "stringing-form__btn-order btn btn-blue order-stringer__btn ".concat(isValid ? "" : "btn-blue-invalid"),
    onClick: function onClick() {
      return changeStatusOrder();
    }
  }, "Commande valid\xE9e") : ""))));
}