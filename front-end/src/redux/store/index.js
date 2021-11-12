import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import productSlice from '../slices/productSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
  },
});

export default store;
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk),
//   ),
// );

// export default store;
