"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserInfo = exports.setToken = exports.default = exports.connectedToggle = void 0;
var _toolkit = require("@reduxjs/toolkit");
// Création de la tranche "userSlice"
var userSlice = (0, _toolkit.createSlice)({
  name: "user",
  initialState: {
    isConnected: false,
    userInfo: "",
    token: ""
  },
  reducers: {
    // Action pour inverser la valeur de isConnected
    connectedToggle: function connectedToggle(state) {
      state.isConnected = !state.isConnected;
    },
    // Action pour mettre à jour userInfo avec la valeur fournie
    setUserInfo: function setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    // Action pour mettre à jour token avec la valeur fournie
    setToken: function setToken(state, action) {
      state.token = action.payload;
    }
  }
});

// Export des actions individuelles de la tranche
var _userSlice$actions = userSlice.actions,
  connectedToggle = exports.connectedToggle = _userSlice$actions.connectedToggle,
  setUserInfo = exports.setUserInfo = _userSlice$actions.setUserInfo,
  setToken = exports.setToken = _userSlice$actions.setToken;
var _default = exports.default = userSlice.reducer;