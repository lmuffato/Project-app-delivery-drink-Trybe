import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import shoppingCartReducer from './cartSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
  },
});
