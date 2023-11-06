// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import xsrfTokenReducer from "./xsrfTokenSlice";



// Combiner les différents reducers en un seul rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  xsrfToken: xsrfTokenReducer,

});

// Configuration pour redux-persist
const persistConfig = {
  key: "data", // La clé pour stocker les données dans le local storage
  storage, // Le type de stockage (ici, on utilise le local storage)
  whitelist: ["cart", "user", "xsrfToken"], // Permet de sélectionner les slices à sauvegarder
  storageOptions: {
    expires: "3d", // Durée de conservation de 3 jours
    expireKey: "persistExpires", // Clé pour stocker la date d'expiration dans le localStorage
  },
};

// Utilisation de persistReducer pour créer un reducer qui supporte le local storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store avec le reducer persistant et le préchargement pour le slice "token"
const store = configureStore({
  reducer: persistedReducer,
  preloadedState: { // Préchargement du state avec les données du local storage
    xsrfToken: {
      token: localStorage.getItem("xsrfToken"), // Préchargement du xsrfToken
    },
  },
});

// Création d'un persistor qui permet de sauvegarder automatiquement le store dans le local storage
export const persistor = persistStore(store);

export { store };