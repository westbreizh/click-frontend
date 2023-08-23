import { createSlice } from "@reduxjs/toolkit";

// Création de la tranche "userSlice"
const userSlice = createSlice({
  name: "user", // Nom de la tranche
  initialState: {
    isConnected: false, 
    userInfo: "",
    token: "", 
  },
  
  reducers: {
    
    // Action pour inverser la valeur de isConnected
    connectedToggle: (state) => {
      state.isConnected = !state.isConnected;
    },
    // Action pour mettre à jour userInfo avec la valeur fournie
    setUserInfo: (state, action) => {
      state.userInfo = action.payload ;
    },
    // Action pour mettre à jour token avec la valeur fournie
    setToken: (state, action) => {
      state.token = action.payload;
    },

    // Action pour mettre à jour uniquement racquet_player dans userInfo avec la valeur fournie
    setRacquetPlayer: (state, action) => {
      state.userInfo.racquet_player = action.payload;
    },


  },
});

// Export des actions individuelles de la tranche
export const {
  connectedToggle,
  setUserInfo,
  setToken,
  setRacquetPlayer,
} = userSlice.actions;

// Export du réducteur de la tranche
export default userSlice.reducer;