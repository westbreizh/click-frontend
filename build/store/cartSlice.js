"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetStringFromShopChoice = exports.resetCart = exports.deleteArticle = exports.default = exports.changeQuantityArticle = exports.calculTotalPrice = exports.calculNumberArticle = exports.addInstallationString = exports.addArticle = void 0;
var _toolkit = require("@reduxjs/toolkit");
// Créez une slice pour le panier
var cartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: {
    articleList: [],
    numberArticle: 0,
    totalPrice: 0,
    stringFromShopChoice: null,
    stringingPrice: 10
  },
  reducers: {
    // Action pour ajouter des articles aux panier
    addArticle: function addArticle(state, action) {
      console.log("statejson", JSON.stringify(state));
      // Vérifier si action.payload est défini
      if (!action.payload) {
        // Si action.payload est indéfini ou falsy, ne rien faire
        return;
      }
      var newProduct = action.payload;
      if (!newProduct.id) {
        // Vérifier si newProduct.id est défini
        // Si newProduct.id est indéfini ou falsy, ne rien faire
        return;
      }

      // Si le panier est vide, ajouter simplement newProduct au panier
      if (state.articleList.length === 0 || state.articleList.length === undefined) {
        state.articleList.push(newProduct);
      } else {
        // Rechercher un produit existant avec le même ID que newProduct.id
        var existingProduct = state.articleList.find(function (product) {
          return product.id === newProduct.id;
        });

        // Si le produit existe déjà dans le panier, augmenter la quantité
        if (existingProduct) {
          existingProduct.quantity += newProduct.quantity;
        } else {
          // Sinon, ajouter le produit à la liste du panier
          state.articleList.push(newProduct);
        }
      }
    },
    // Action pour ajouter une pose cordage 
    addInstallationString: function addInstallationString(state, action) {
      var newProduct = action.payload;
      state.articleList.push(newProduct);
    },
    // Action pour supprimer un article du panier
    deleteArticle: function deleteArticle(state, action) {
      var index = action.payload;
      state.articleList.splice(index, 1);
    },
    // Action pour changer la quantité d'un produit dans le panier
    changeQuantityArticle: function changeQuantityArticle(state, action) {
      var _action$payload = action.payload,
        quantity = _action$payload.quantity,
        index = _action$payload.index;
      var product = state.articleList[index];
      if (product) {
        product.quantity = quantity;
      }
    },
    // Action pour calculer le nombre de produits dans.articleList et l'enregistrer dans numberProduct
    calculNumberArticle: function calculNumberArticle(state) {
      state.numberArticle = state.articleList.reduce(function (total, article) {
        return total + article.quantity;
      }, 0);
    },
    // Action pour calculer le prix du panier
    calculTotalPrice: function calculTotalPrice(state) {
      var totalPrice = state.articleList.reduce(function (total, article) {
        return total + article.price * article.quantity;
      }, 0);
      var formattedPrice = totalPrice.toFixed(2).replace('.', ',');
      state.totalPrice = formattedPrice;
    },
    // Action pour réinitialiser la valeur de stringChoice
    resetStringFromShopChoice: function resetStringFromShopChoice(state, action) {
      state.stringFromShopChoice = action.payload;
    },
    // Action pour réinitialiser complètement le panier
    resetCart: function resetCart(state) {
      state.articleList = [];
      state.numberArticle = 0;
      state.totalPrice = 0;
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
  addArticle = exports.addArticle = _cartSlice$actions.addArticle,
  addInstallationString = exports.addInstallationString = _cartSlice$actions.addInstallationString,
  deleteArticle = exports.deleteArticle = _cartSlice$actions.deleteArticle,
  changeQuantityArticle = exports.changeQuantityArticle = _cartSlice$actions.changeQuantityArticle,
  calculNumberArticle = exports.calculNumberArticle = _cartSlice$actions.calculNumberArticle,
  calculTotalPrice = exports.calculTotalPrice = _cartSlice$actions.calculTotalPrice,
  resetStringFromShopChoice = exports.resetStringFromShopChoice = _cartSlice$actions.resetStringFromShopChoice,
  resetCart = exports.resetCart = _cartSlice$actions.resetCart;
var _default = exports.default = cartSlice.reducer;