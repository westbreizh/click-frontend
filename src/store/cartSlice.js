import { listItemIconClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";


// Créez une slice pour le panier
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    articleList: [], // comprend les balles et accessoires
    numberArticle: 0, // comprend tous les éléments articleList et installationWithStringList
    totalPriceProducts: 0,
    priceDelivery: 0,
    totalPrice: 0,
    hubChoice:"",
    hubBackChoice:"",
    stringChoice:[{id: "" }],
    stringRopeChoice:"",
    stringingPrice: 10,
  },

  reducers: {

    // Action pour ajouter des articles aux panier
    addArticle: (state, action) => {
      console.log("statejson",JSON.stringify(state));
      // Vérifier si action.payload est défini
      if (!action.payload) {
        // Si action.payload est indéfini ou falsy, ne rien faire
        return;
      }
    
      const newProduct = action.payload;
      if (!newProduct.id) {
        // Vérifier si newProduct.id est défini
        // Si newProduct.id est indéfini ou falsy, ne rien faire
        return;
      }
    
      // Si le panier est vide, ajouter simplement newProduct au panier
      if (state.articleList.length === 0 ||state.articleList.length === undefined) {
        state.articleList.push(newProduct);
      } else {
        // Rechercher un produit existant avec le même ID que newProduct.id
        const existingProduct = state.articleList.find(
          (product) => product.id === newProduct.id
        );
    
        // Si le produit existe déjà dans le panier, augmenter la quantité
        if (existingProduct) {
          existingProduct.quantity += newProduct.quantity;
        } else {
          // Sinon, ajouter le produit à la liste du panier
          state.articleList.push(newProduct);
        }
      }
    },
  
    // Action pour ajouter une pose cordage (avec ou sans fourniture du cordage)
    addInstallationString: (state, action) => {
    const newProduct = action.payload;
    state.articleList.push(newProduct);
    },


    // Action pour supprimer un article du panier
    deleteArticle: (state, action) => {
      const index = action.payload;
      state.articleList.splice(index, 1);
    },



    // Action pour changer la quantité d'un produit dans le panier
    changeQuantityArticle: (state, action) => {
      const { quantity, index } = action.payload;
      const product = state.articleList[index];

      if (product) {
        
        product.quantity = quantity;
      }
    },

    // Action pour calculer le nombre de produits dans.articleList et l'enregistrer dans numberProduct
    calculNumberArticle: (state) => {
      state.numberArticle = state.articleList.reduce(
        (total, article) => total + article.quantity,
        0
      ) ;
    },

    // Action pour calculer le prix du panier
    calculTotalPriceProducts: (state) => {
      const totalPrice = state.articleList.reduce(
        (total, article) => total + article.price * article.quantity,
        0
      );
      const roundedPrice = Math.round(totalPrice * 100) / 100;
      const formattedPrice = Number.isInteger(roundedPrice) ? roundedPrice.toFixed(0) : roundedPrice.toFixed(2).replace('.', ',');
      state.totalPriceProducts = formattedPrice;
      state.totalPrice = formattedPrice;
    },
    
    // Action pour réinitialiser la valeur de hubChoice
    resetHubChoice: (state, action) => {
      state.hubChoice = action.payload;
    },

    // Action pour réinitialiser la valeur de hubChoice
    resetHubBackChoice: (state, action) => {
      state.hubBackChoice = action.payload;
    },

    // Action pour réinitialiser la valeur de stringChoice
    resetStringChoice: (state, action) => {
      state.stringChoice = action.payload;
    },

    // Action pour réinitialiser la valeur de stringRopeChoice
    resetStringRopeChoice: (state, action) => {
      state.stringRopeChoice = action.payload;
    },

    // Action pour mettre à jour stringingPrice
    updateStringingPrice: (state, action) => {
      state.stringingPrice = action.payload;
    },

    // Action pour réinitialiser complètement le panier
    resetCart: (state) => {
      state.articleList = [];
      state.numberArticle = 0;
      state.totalPriceProducts = 0;
      state.totalPrice = 0;
    },
    
  },
});


export const {

  addArticle,
  addInstallationString,
  changeQuantityArticle,
  calculTotalPriceProducts,
  calculNumberArticle,
  deleteArticle,
  deleteInstallationWithString,
  deleteInstallationAlone ,
  resetHubChoice,
  resetHubBackChoice,
  resetStringChoice,
  resetStringRopeChoice,
  setStringingPrice,
  updateStringingPrice,
  resetCart,
} = cartSlice.actions;



export default cartSlice.reducer;



