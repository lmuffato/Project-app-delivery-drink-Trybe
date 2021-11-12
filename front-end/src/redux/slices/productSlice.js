import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isLoadingProducts: true,
  },
  reducers: {
    setProducts(state, action) {
      return { ...state, products: action.payload, isLoadingProducts: false };
    },
  },
});

export const { setProducts } = slice.actions;

export const selectProduct = (state) => state.product;

export default slice.reducer;
