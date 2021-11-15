import { createSlice } from '@reduxjs/toolkit';

const MINUS_ONE = -1;

export const slice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    cart: [],
    isLoadingProducts: true,
  },
  reducers: {
    setProducts(state, action) {
      return { ...state, products: action.payload, isLoadingProducts: false };
    },

    addProductToCart(state, { payload }) {
      const indexOfProductInCart = state.cart.findIndex((prod) => prod.id === payload.id);

      if (indexOfProductInCart === MINUS_ONE && payload.quantity === 0) {
        return { ...state };
      }

      if (indexOfProductInCart === MINUS_ONE) {
        return { ...state, cart: [...state.cart, payload] };
      }

      const newCart = state.cart.filter((prod) => prod.id !== payload.id);
      newCart.push(payload);
      return { ...state, cart: newCart };
    },
  },
});

export const { setProducts, addProductToCart } = slice.actions;

export const selectProduct = (state) => state.product;

export default slice.reducer;
