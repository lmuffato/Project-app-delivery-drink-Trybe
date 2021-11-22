import { combineReducers } from '@reduxjs/toolkit';
import cart from './cart';

const rootReducer = combineReducers({
  cart,
});

export default rootReducer;
