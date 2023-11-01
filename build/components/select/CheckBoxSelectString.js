"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckboxSelect;
var _react = require("react");
var _reactRedux = require("react-redux");
var _productSlice = require("../../store/productSlice");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*prevOptions est une variable qui représente la valeur précédente de l'état optionSelectedForOneCategorie avant la mise à jour. Cette variable est définie en tant que paramètre de la fonction de rappel passée à setOptionSelectedForOneCategorie.
                                                                      Lorsque vous utilisez useState, la fonction useState renvoie un tableau contenant deux éléments : le premier est la valeur actuelle de l'état, et le deuxième est une fonction qui vous permet de mettre à jour cet état. La valeur actuelle de l'état est initialement définie lors de la première exécution du composant et peut être modifiée à tout moment en appelant la fonction de mise à jour retournée par useState.
                                                                      Lorsque vous appelez la fonction de mise à jour, vous pouvez passer une nouvelle valeur pour l'état, ou vous pouvez passer une fonction de rappel qui prend la valeur précédente de l'état comme paramètre et renvoie la nouvelle valeur de l'état. Dans ce cas, la fonction de rappel est utilisée pour calculer la nouvelle valeur de optionSelectedForOneCategorie en fonction de la valeur précédente. */
function CheckboxSelect(props) {
  var store = (0, _reactRedux.useStore)();
  var options = props.options;
  var title = props.title;
  var fieldNameBdd = props.fieldNameBdd;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    optionSelectedForOneCategorie = _useState4[0],
    setOptionSelectedForOneCategorie = _useState4[1];
  var categorieWithOptionSelectedForString = (0, _reactRedux.useSelector)(function (state) {
    return state.product.categorieWithOptionSelectedForString;
  });

  // fonction appelé lorsque que l'on coche une case
  //fonction resetSelectComposante mise à jour des option selectionné pour la categorie du select
  function uploadOptionsSelectLocal(newOption) {
    setOptionSelectedForOneCategorie(function (prevOptions) {
      // on enlève l'option lorsqu'on décoche
      if (prevOptions.includes(newOption)) {
        return prevOptions.filter(function (item) {
          return item !== newOption;
        });
      }
      // on ajoute l'option lorsqu'on coche
      else {
        return [].concat(_toConsumableArray(prevOptions), [newOption]);
      }
    });
  }

  //fonction de mise à jour des options selectionné pour l 'envoie au backend
  function uploadOptionsSelectForBackend() {
    //on regarde si on déjà la categorie dans le tableau redux
    var existingOptionIndex = categorieWithOptionSelectedForString.findIndex(function (option) {
      return option.fieldNameBdd === fieldNameBdd;
    });

    // on a dejà la categorie
    if (existingOptionIndex !== -1) {
      // on reprend la valeur du store redux
      var updatedoptionSelectedForOneCategorieForBackend = _toConsumableArray(categorieWithOptionSelectedForString);
      // on remplace les options pour la categorie trouvé dans existingOptionIndex
      updatedoptionSelectedForOneCategorieForBackend[existingOptionIndex] = {
        fieldNameBdd: fieldNameBdd,
        optionSelectedForOneCategorie: optionSelectedForOneCategorie
      };
      store.dispatch((0, _productSlice.setCategorieWithOptionSelectedForString)(updatedoptionSelectedForOneCategorieForBackend));
    }

    // on ajoute une nouelle categorie avec ses options
    else {
      store.dispatch((0, _productSlice.setCategorieWithOptionSelectedForString)([].concat(_toConsumableArray(categorieWithOptionSelectedForString), [{
        fieldNameBdd: fieldNameBdd,
        optionSelectedForOneCategorie: optionSelectedForOneCategorie
      }])));
    }
  }

  // fonction appelé lorsque que l'on coche une case
  function handleOptionClick(option) {
    uploadOptionsSelectLocal(option);
    setIsOpen(false);
  }

  // une fois sateState effectué on met à jour les données pour le backend
  (0, _react.useEffect)(function () {
    uploadOptionsSelectForBackend();
    // eslint-disable-next-line
  }, [optionSelectedForOneCategorie]);
  return /*#__PURE__*/React.createElement("div", {
    className: "checkBoxSelect__wrapper",
    onMouseEnter: function onMouseEnter() {
      return setIsOpen(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "checkBoxSelect__title"
  }, title, /*#__PURE__*/React.createElement("span", {
    className: "checkBoxSelect__arrow ".concat(isOpen ? "checkBoxSelect__arrow-up" : "checkBoxSelect__arrow-down")
  })), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "checkBoxSelect__submenu-contenair"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "checkBoxSelect__submenu-ul"
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option,
      className: "checkBoxSelect__submenu-li"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      id: option,
      name: option,
      checked: optionSelectedForOneCategorie.includes(option),
      onChange: function onChange() {
        return handleOptionClick(option);
      }
    }), /*#__PURE__*/React.createElement("label", {
      className: "checkBoxSelect__option-label",
      htmlFor: option
    }, option));
  }))));
}