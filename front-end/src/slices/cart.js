/// <reference path="../api/types.js" />
import { createSlice } from '@reduxjs/toolkit';

/**
 * @type {{products: {id: number, quantity: number}[]}>}
 */
const initialState = {
  products: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      /**
       * @type {{id: number, quantity: number}}
       */
      const { id, quantity } = action.payload;
      const index = state.products.findIndex((products) => products.id === id);

      if (quantity === 0) {
        const indexToDelete = state.products.findIndex((prod) => prod.id === id);
        state.products.splice(indexToDelete, 1);
        return state;
      }

      if (index < 0) state.products.push({ id, quantity });
      else {
        state.products[index] = { ...state.products[index], quantity };
      }
    },
  },
});

export const { updateProduct } = cart.actions;
export default cart.reducer;
