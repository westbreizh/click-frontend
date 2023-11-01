"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ScrollToTop;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
function ScrollToTop() {
  // Récupère l'objet de localisation actuel depuis le routeur React
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;

  // Utilise l'effet React pour scroller vers le haut de la page lorsqu'un changement d'URL est détecté
  (0, _react.useEffect)(function () {
    window.scrollTo(0, 0); // Scrolle vers le haut de la page
  }, [pathname]); // Exécute l'effet uniquement lorsque l'URL change

  // Retourne null car il n'y a pas d'éléments à rendre
  return null;
}