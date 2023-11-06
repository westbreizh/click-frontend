import { createSlice } from "@reduxjs/toolkit";

// Créer un nouveau slice pour le xsrfToken
const xsrfTokenSlice = createSlice({
  name: 'xsrfToken',
  initialState: '',
  reducers: {
    setXsrfToken: (state, action) => action.payload,
  },
});

export const { setXsrfToken } = xsrfTokenSlice.actions;

export default xsrfTokenSlice.reducer;