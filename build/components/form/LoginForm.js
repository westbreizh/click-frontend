"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoginForm;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _reactHookForm = require("react-hook-form");
var _yup = require("@hookform/resolvers/yup");
var _material = require("@mui/material");
var _Visibility = _interopRequireDefault(require("@mui/icons-material/Visibility"));
var _VisibilityOff = _interopRequireDefault(require("@mui/icons-material/VisibilityOff"));
var _ModalResetPassword = _interopRequireDefault(require("../modal/modalReset/ModalResetPassword"));
var _shemaInput = require("../../Utils/shemaInput");
var _userSlice = require("../../store/userSlice");
var _cartSlice = require("../../store/cartSlice");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Votre style personnalisé pour le champ de texte
var CustomTextField = (0, _material.styled)(_material.TextField)(function (_ref) {
  var theme = _ref.theme;
  return {};
});
var CustomInput = (0, _material.styled)(_material.Input)(function (_ref2) {
  var theme = _ref2.theme;
  return {
    appearance: "none !important",
    display: "flex",
    fontSize: "1.5rem",
    fontWeight: "bolder",
    backgroundColor: "#e7e4e4 !important",
    border: "none !important",
    minHeight: "4.4rem",
    padding: "0 1.6rem",
    borderRadius: "1rem !important",
    maxWidth: "40rem",
    whiteSpace: "normal",
    overflow: "hidden",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    textOverflow: "ellipsis",
    outline: "none",
    "&:before": {
      content: "none"
    },
    "&:focus": {
      outline: "none",
      boxShadow: "none",
      "&:after": {
        content: "none"
      }
    }
  };
});
function LoginForm(props) {
  var _errors$email, _errors$password;
  var closeModalConnexion = props.closeModalConnexion;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPassword = _useState2[0],
    setShowPassWord = _useState2[1];
  var handleClickShowPassword = function handleClickShowPassword() {
    setShowPassWord(!showPassword);
  };
  var handleMouseDownPassword = function handleMouseDownPassword(event) {
    event.preventDefault();
  };

  //gestion de la validité des saisie par yup
  var _useForm = (0, _reactHookForm.useForm)({
      resolver: (0, _yup.yupResolver)(_shemaInput.shemaInputLogin),
      mode: "onTouched",
      shouldFocusError: true
    }),
    register = _useForm.register,
    formState = _useForm.formState,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.formState.errors;
  var isValid = formState.isValid;

  //gestion de l'affichage des erreus venant du backend
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isPErrorFromBackEndOpen = _useState4[0],
    setShowErrorFromBackEnd = _useState4[1];
  var showPErrorFromBackend = function showPErrorFromBackend() {
    setShowErrorFromBackEnd(true);
  };
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    messageFromBackEnd = _useState6[0],
    setMessageFromBackend = _useState6[1];
  function changeMessageFromBackEnd(messageFromBack) {
    setMessageFromBackend(messageFromBack);
  }

  //gestion de l'ouverture des modales
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isModalResetPasswordOpen = _useState8[0],
    setModalResetPasswordOpen = _useState8[1];
  var showModalResetPassword = function showModalResetPassword() {
    setModalResetPasswordOpen(true);
  };
  var closeModalResetPassword = function closeModalResetPassword() {
    setModalResetPasswordOpen(false);
  };
  var store = (0, _reactRedux.useStore)();
  var navigate = (0, _reactRouterDom.useNavigate)();
  var onSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var response, result, _result, userRole, errorMessage;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("https://click-backend.herokuapp.com/api/user/login", {
              mode: "cors",
              method: "POST",
              body: JSON.stringify({
                email: data.email,
                password: data.password
              }),
              headers: {
                "Content-Type": "application/json"
              }
            });
          case 3:
            response = _context.sent;
            if (response.ok) {
              _context.next = 13;
              break;
            }
            _context.next = 7;
            return response.json();
          case 7:
            result = _context.sent;
            changeMessageFromBackEnd(result.message);
            showPErrorFromBackend();
            throw new Error(" ".concat(result.message));
          case 13:
            _context.next = 15;
            return response.json();
          case 15:
            _result = _context.sent;
            store.dispatch((0, _userSlice.setUserInfo)(_result.userInfo));
            console.log("userInfo", _result.userInfo);
            userRole = _result.userInfo.userRole;
            store.dispatch((0, _userSlice.connectedToggle)());
            store.dispatch((0, _userSlice.setToken)(_result.token));
            store.dispatch((0, _cartSlice.resetStringFromShopChoice)(_result.userInfo.stringInfo));
            closeModalConnexion();
            if (userRole === 'stringer') {
              navigate("/cordeur_raquettes-à-corder");
            }
          case 24:
            _context.next = 30;
            break;
          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](0);
            errorMessage = _context.t0.toString();
            console.log(errorMessage);
          case 30:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 26]]);
    }));
    return function onSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "form-modal"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "input__label"
  }, " Email "), /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "email"
  }, register("email"), {
    className: "input__text"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "input__error"
  }, (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message), /*#__PURE__*/_react.default.createElement("label", {
    className: "input__label"
  }, " Mot de passe "), /*#__PURE__*/_react.default.createElement(CustomInput, _extends({
    type: showPassword ? "text" : "password"
  }, register("password"), {
    endAdornment: /*#__PURE__*/_react.default.createElement(_material.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
      onClick: handleClickShowPassword,
      onMouseDown: handleMouseDownPassword
    }, showPassword ? /*#__PURE__*/_react.default.createElement(_Visibility.default, {
      className: "eye"
    }) : /*#__PURE__*/_react.default.createElement(_VisibilityOff.default, {
      className: "eye"
    })))
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "reset-password-link",
    onClick: showModalResetPassword
  }, "Mot de passe oubli\xE9 ?"), isModalResetPasswordOpen ? /*#__PURE__*/_react.default.createElement(_ModalResetPassword.default, {
    closeModalResetPassword: closeModalResetPassword,
    closeModalConnexion: closeModalConnexion
  }) : "", /*#__PURE__*/_react.default.createElement("p", {
    className: "input__error"
  }, (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message), isPErrorFromBackEndOpen ? /*#__PURE__*/_react.default.createElement("p", {
    className: "input__error message__error"
  }, messageFromBackEnd) : "", /*#__PURE__*/_react.default.createElement("div", {
    className: "submit-wrapper-connexion"
  }, /*#__PURE__*/_react.default.createElement("button", {
    disabled: !isValid,
    type: "submit",
    className: isValid ? "btn btn-blue" : "btn btn-blue-invalid"
  }, "connexion")));
}