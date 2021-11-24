import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'shoppingCart',
  initialState: {
    cartItems: [],
    deliveryData: {},
  },
  reducers: {
    adddItem(state, { payload }) {
      return { ...state, cartItems: payload.newState };
    },
    addAddress(state, { payload }) {
      return { ...state, deliveryData: payload.newData };
    },
  },
});

export const { adddItem, addAddress } = slice.actions;
export default slice.reducer;
