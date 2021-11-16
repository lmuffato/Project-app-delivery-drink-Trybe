import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    password: '',
    token: '',
    role: '',
    isLogged: false,
  },
  reducers: {
    userLogin(state, { payload }) {
      return { ...state, isLogged: true, token: payload.token, role: payload.role };
    },
  },
  logout(state) {
    return { ...state, isLogged: false, ...payload };
  },
});

export const { userLogin, logout } = slice.actions;
export default slice.reducer;
