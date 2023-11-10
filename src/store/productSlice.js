import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productsListFromBackend: [],
    resetSelectComposant: false,
    categorieWithOptionSelectedForString: [],
  },
  reducers: {
    setResetSelectComposant: (state) => {
      state.resetSelectComposant = !state.resetSelectComposant;
    },
    setProductsListFromBackend: (state, action) => {
      state.productsListFromBackend = action.payload;
    },
    setCategorieWithOptionSelectedForString: (state, action) => {
      state.categorieWithOptionSelectedForString = action.payload;
    },
  },
});

export const {
  setResetSelectComposant,
  setProductsListFromBackend,
  setCategorieWithOptionSelectedForString,
} = productSlice.actions;

export default productSlice.reducer;
