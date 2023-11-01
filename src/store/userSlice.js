import { createSlice } from "@reduxjs/toolkit";

// Création de la tranche "userSlice"
const userSlice = createSlice({
  name: "user",
  initialState: {
    isConnected: false,
    userInfo: "",
  },

  reducers: {
    // Action pour inverser la valeur de isConnected
    connectedToggle: (state) => {
      state.isConnected = !state.isConnected;
    },
    // Action pour mettre à jour userInfo avec la valeur fournie
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// Export des actions individuelles de la tranche
export const {
  connectedToggle,
  setUserInfo,
} = userSlice.actions;

export default userSlice.reducer;
