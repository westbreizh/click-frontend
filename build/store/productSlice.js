"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setResetSelectComposant = exports.setProductsListFromBackend = exports.setCategorieWithOptionSelectedForString = exports.setCategorieWithOptionSelectedForBall = exports.setCategorieWithOptionSelectedForAccessories = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var productSlice = (0, _toolkit.createSlice)({
  name: "product",
  initialState: {
    productsListFromBackend: [],
    resetSelectComposant: false,
    categorieWithOptionSelectedForString: [],
    categorieWithOptionSelectedForBall: [],
    categorieWithOptionSelectedForAccessories: []
  },
  reducers: {
    setResetSelectComposant: function setResetSelectComposant(state) {
      state.resetSelectComposant = !state.resetSelectComposant;
    },
    setProductsListFromBackend: function setProductsListFromBackend(state, action) {
      state.productsListFromBackend = action.payload;
    },
    setCategorieWithOptionSelectedForString: function setCategorieWithOptionSelectedForString(state, action) {
      state.categorieWithOptionSelectedForString = action.payload;
    },
    setCategorieWithOptionSelectedForBall: function setCategorieWithOptionSelectedForBall(state, action) {
      state.categorieWithOptionSelectedForBall = action.payload;
    },
    setCategorieWithOptionSelectedForAccessories: function setCategorieWithOptionSelectedForAccessories(state, action) {
      state.categorieWithOptionSelectedForAccessories = action.payload;
    }
  }
});
var _productSlice$actions = productSlice.actions,
  setResetSelectComposant = exports.setResetSelectComposant = _productSlice$actions.setResetSelectComposant,
  setProductsListFromBackend = exports.setProductsListFromBackend = _productSlice$actions.setProductsListFromBackend,
  setCategorieWithOptionSelectedForString = exports.setCategorieWithOptionSelectedForString = _productSlice$actions.setCategorieWithOptionSelectedForString,
  setCategorieWithOptionSelectedForBall = exports.setCategorieWithOptionSelectedForBall = _productSlice$actions.setCategorieWithOptionSelectedForBall,
  setCategorieWithOptionSelectedForAccessories = exports.setCategorieWithOptionSelectedForAccessories = _productSlice$actions.setCategorieWithOptionSelectedForAccessories;
var _default = exports.default = productSlice.reducer;