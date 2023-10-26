import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer, { setToken, connectedToggle } from "./userSlice"; // Importez setToken et connectedToggle depuis le userSlice
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

// Combiner les différents reducers en un seul rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});

// Configuration pour redux-persist
const persistConfig = {
  key: "data", // La clé pour stocker les données dans le local storage
  storage, // Le type de stockage (ici, on utilise le local storage)
  whitelist: ["cart", "user"], // Permet de sélectionner les slices à sauvegarder
  storageOptions: {
    expires: "3d", // Durée de conservation de 3 jours
    expireKey: "persistExpires", // Clé pour stocker la date d'expiration dans le localStorage
  },
};

// Utilisation de persistReducer pour créer un reducer qui supporte le local storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store avec le reducer persistant
const store = configureStore({
  reducer: persistedReducer,
});

// Création d'un persistor qui permet de sauvegarder automatiquement le store dans le local storage
export const persistor = persistStore(store);

// Exportez à la fois le store et le persistor
export { store };



/*
// Vérification du token et mise à jour de l'état isConnected
// Cette logique sera exécutée au démarrage de l'application seulement

const checkTokenOnStartup = async () => {
  console.log("je suis dans checkTokenOnstartUp")
  const token = store.getState().user.token;
console.log("token",token)
  if (token) {
    await checkTokenValidity(token);
  }
};

checkTokenOnStartup();


const checkTokenValidity = async (token) => {
  try {
    const response = await fetch(`https://click-backend.herokuapp.com/api/user/isTokenYeatOk`, {
      mode: "cors",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
    const isValidToken = data.message === 'token valide';

    if (isValidToken) {
      store.dispatch(setToken(token));
      store.dispatch(connectedToggle(true));
    } else {
      // Si le token n'est pas valide, déconnectez l'utilisateur
      store.dispatch(setToken(""));
      store.dispatch(connectedToggle(false));
      console.log("je me suis déconnecté via redux car le token n'était plus valide")
    }
  } catch (error) {
    console.error("Erreur lors de la vérification du token :", error);
    // Gérez l'erreur ici si nécessaire
  }
};*/