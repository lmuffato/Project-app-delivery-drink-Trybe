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
      const index = state.products.findIndex((product) => product.id === id);

      if (index < 0) {
        state.products.push({ id, quantity });
      } else {
        state.products[index].quantity = quantity;
      }
    },
    deleteItem: (state, action) => {
      /**
       * @type {{id: number}}
       */
      const { id: idToDelete } = action.payload;
      state.products = state.products.filter((item) => item.id !== idToDelete);
    },
  },
});

export const { updateProduct, deleteItem } = cart.actions;
export default cart.reducer;
