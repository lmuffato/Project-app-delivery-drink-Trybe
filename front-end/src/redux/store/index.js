import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import productSlice from '../slices/productSlice';
import saleSlice from '../slices/saleSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    sale: saleSlice,
  },
});

export default store;
