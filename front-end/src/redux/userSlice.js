import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    password: '',
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, ...payload,
      };
    },
    logout(state) {
      return { ...state, isLogged: false, user: '', password: '' };
    },
  },
});

export const { changeUser, logout } = slice.actions;
export const selectUser = (state) => state.user;
export default slice.reducer;
