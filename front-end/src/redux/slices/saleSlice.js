import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'sale',
  initialState: {
    id: '',
    status: '',
    date: '',
    totalPrice: 0,
    address: '',
  },
  reducers: {
    saveSale(state, { payload }) {
      return {
        ...state,
        id: payload.id,
        status: payload.status,
        date: payload.date,
        totalPrice: payload.totalPrice,
        address: payload.address,
      };
    },
  },
});

export const saveSale = slice.actions;

export default slice.reducer;