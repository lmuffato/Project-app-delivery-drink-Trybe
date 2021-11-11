import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    password: '',
    token: '',
    isLogged: false,
    invalidEmail: false,
  },
  reducers: {
    userLogin(state, { payload }) {
      return { ...state, isLogged: true, ...payload,
      };
    },
    logout(state) {
      return { ...state, isLogged: false, ...payload };
    },
  },
});

export const { userLogin, logout } = slice.actions;
export const selectUser = (state) => state.user;
export default slice.reducer;
