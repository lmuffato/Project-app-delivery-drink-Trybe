import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'sale',
  initialState: {
    sales: [],
  },
  reducers: {
    saveSale(state, { payload }) {
      return {
        ...state,
        sales: payload,
      };
    },
  },
});

export const { saveSale } = slice.actions;
export const selectSale = (state) => state.product;

export default slice.reducer;
