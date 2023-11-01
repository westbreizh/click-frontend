"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.persistor = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _reduxPersist = require("redux-persist");
var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));
var _userSlice = _interopRequireWildcard(require("./userSlice"));
var _productSlice = _interopRequireDefault(require("./productSlice"));
var _cartSlice = _interopRequireDefault(require("./cartSlice"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Importez setToken et connectedToggle depuis le userSlice

// Combiner les différents reducers en un seul rootReducer
var rootReducer = (0, _toolkit.combineReducers)({
  user: _userSlice.default,
  product: _productSlice.default,
  cart: _cartSlice.default
});

// Configuration pour redux-persist
var persistConfig = {
  key: "data",
  // La clé pour stocker les données dans le local storage
  storage: _storage.default,
  // Le type de stockage (ici, on utilise le local storage)
  whitelist: ["cart", "user"],
  // Permet de sélectionner les slices à sauvegarder
  storageOptions: {
    expires: "3d",
    // Durée de conservation de 3 jours
    expireKey: "persistExpires" // Clé pour stocker la date d'expiration dans le localStorage
  }
};

// Utilisation de persistReducer pour créer un reducer qui supporte le local storage
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);

// Création du store avec le reducer persistant
var store = exports.store = (0, _toolkit.configureStore)({
  reducer: persistedReducer
});

// Création d'un persistor qui permet de sauvegarder automatiquement le store dans le local storage
var persistor = exports.persistor = (0, _reduxPersist.persistStore)(store);

// Exportez à la fois le store et le persistor

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