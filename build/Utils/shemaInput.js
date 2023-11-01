"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shemaInputStringing = exports.shemaInputSignup = exports.shemaInputResetPasswordEmail = exports.shemaInputResetPassword = exports.shemaInputLogin = exports.shemaInputCoordonate = exports.shemaInputChangePassword = exports.shemaInputChangeEmail = void 0;
var yup = _interopRequireWildcard(require("yup"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var shemaInputLogin = exports.shemaInputLogin = yup.object().shape({
  email: yup.string().email("Veuillez fournir un format d'e-mail valide ").required("Veuillez saisir votre email, merci!"),
  password: yup.string()
  /*
  .required("Veuillez saisir votre mot de passe, merci!")
  .matches(/^(?=.{4,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, "Votre  mot de passe doit contenir au moins 8 caractères, 1 chiffre, une majuscule et un caractère spéciale")
  .matches(/[a-z]/, "le mot de passe doit contenir au moins une minuscule")
    .matches(/[A-Z]/, "le mot de passe doit contenir au moins une majuscule")
    .matches(/[0-9]/, "le mot de passe doit contenir au moins un chiffre")
    .min(8, "le mot de passe doit contenir au moins 8 caractères"),
  */
});

var shemaInputSignup = exports.shemaInputSignup = yup.object().shape({
  civilite: yup.string().required("Veuillez renseigner votre civilité, merci!"),
  forename: yup.string().required("Veuillez saisir votre prénom").max(30, "Votre prénom ne peut contenir 30 caratères au maximum"),
  lastname: yup.string().required("Veuillez saisir votre nom, merci!").max(30, "Votre nom ne peut contenir 30 caratères au maximum"),
  email: yup.string().email("Veuillez fournir un format d'e-mail valide ").required("Veuillez saisir votre email, merci!"),
  password: yup.string(),
  /*
  .required("Veuillez saisir votre mot de passe, merci!")
  .matches(/^(?=.{4,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, "Votre  mot de passe doit contenir au moins 8 caractères, 1 chiffre, une majuscule et un caractère spéciale")
  .matches(/[a-z]/, "le mot de passe doit contenir au moins une minuscule")
    .matches(/[A-Z]/, "le mot de passe doit contenir au moins une majuscule")
    .matches(/[0-9]/, "le mot de passe doit contenir au moins un chiffre")
    .min(8, "le mot de passe doit contenir au moins 8 caractères"),
    */

  passwordConfirm: yup.string().required('veuillez resaisir le mot de passe').oneOf([yup.ref('password')], 'Les mots de passes doivent être identiques')
});
var shemaInputChangeEmail = exports.shemaInputChangeEmail = yup.object().shape({
  email: yup.string().email("Veuillez fournir un format d'e-mail valide ").required("Veuillez saisir votre email, merci!"),
  new_email: yup.string().email("Veuillez fournir un format d'e-mail valide ").required("Veuillez saisir votre nouvel e-mail, merci!"),
  confirm_new_email: yup.string().email("Veuillez fournir un format d'e-mail valide ").required("Veuillez resaisir votre nouvel e-mail, merci!").oneOf([yup.ref('new_email')], 'Les e-mails doivent être identiques')
});
var shemaInputChangePassword = exports.shemaInputChangePassword = yup.object().shape({
  password: yup.string(),
  /*
  .required("Veuillez saisir votre mot de passe, merci!")
  .matches(/^(?=.{4,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, "Votre  mot de passe doit contenir au moins 8 caractères, 1 chiffre, une majuscule et un caractère spéciale")
  .matches(/[a-z]/, "le mot de passe doit contenir au moins une minuscule")
    .matches(/[A-Z]/, "le mot de passe doit contenir au moins une majuscule")
    .matches(/[0-9]/, "le mot de passe doit contenir au moins un chiffre")
    .min(8, "le mot de passe doit contenir au moins 8 caractères"),
  */
  new_password: yup.string(),
  /*
  .required("Veuillez saisir votre mot de passe, merci!")
  .matches(/^(?=.{4,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, "Votre  mot de passe doit contenir au moins 8 caractères, 1 chiffre, une majuscule et un caractère spéciale")
  .matches(/[a-z]/, "le mot de passe doit contenir au moins une minuscule")
  .matches(/[A-Z]/, "le mot de passe doit contenir au moins une majuscule")
  .matches(/[0-9]/, "le mot de passe doit contenir au moins un chiffre")
  .min(8, "le mot de passe doit contenir au moins 8 caractères"),
  */

  new_passwordConfirm: yup.string().required('veuillez resaisir le mot de passe').oneOf([yup.ref('new_password')], 'Les mots de passes doivent être identiques')
});
var shemaInputResetPasswordEmail = exports.shemaInputResetPasswordEmail = yup.object().shape({
  email: yup.string().email("Veuillez fournir un format d'e-mail valide ").required("Veuillez saisir votre email, merci!")
});
var shemaInputResetPassword = exports.shemaInputResetPassword = yup.object().shape({
  password: yup.string(),
  /*
  .required("Veuillez saisir votre mot de passe, merci!")
  .matches(/^(?=.{4,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, "Votre  mot de passe doit contenir au moins 8 caractères, 1 chiffre, une majuscule et un caractère spéciale")
  .matches(/[a-z]/, "le mot de passe doit contenir au moins une minuscule")
   .matches(/[A-Z]/, "le mot de passe doit contenir au moins une majuscule")
   .matches(/[0-9]/, "le mot de passe doit contenir au moins un chiffre")
   .min(8, "le mot de passe doit contenir au moins 8 caractères"),
  */

  passwordConfirm: yup.string().required('veuillez resaisir le mot de passe').oneOf([yup.ref('password')], 'Les mots de passes doivent être identiques')
});
var shemaInputStringing = exports.shemaInputStringing = yup.object().shape({
  club: yup.string().required("Veuillez choisir un club, merci!")
});
var shemaInputCoordonate = exports.shemaInputCoordonate = yup.object().shape({
  road: yup.string().max(30, "le champs ne peut contenir que 30 caratères"),
  city: yup.string().required("Veuillez saisir votre ville").max(30, "le champs ne peut contenir que 30 caratères"),
  postalCode: yup.string().max(30, "le champs ne peut contenir que 30 caratères"),
  telephone: yup.string().matches(/^\d{1}\s?\d{1}\s?\d{1}\s?\d{1}\s?\d{1}\s?\d{1}\s?\d{1}\s?\d{1}\s?\d{1}\s?\d{1}$/, "Le numéro de téléphone doit contenir 10 chiffres avec un espace éventuel entre les chiffres")
});