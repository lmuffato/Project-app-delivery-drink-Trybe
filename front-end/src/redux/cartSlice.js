import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'shoppingCart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    adddItem(state, { payload }) {
      return { ...state, cartItems: payload.newState };
    },
  },
});

export const { adddItem } = slice.actions;
export default slice.reducer;
