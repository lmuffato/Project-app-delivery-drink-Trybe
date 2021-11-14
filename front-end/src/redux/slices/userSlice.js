import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    role: '',
    token: '',
    isLogged: false,
  },
  reducers: {
    saveUser(state, { payload }) {
      return {
        ...state,
        isLogged: true,
        name: payload.name,
        email: payload.email,
        role: payload.role,
        token: payload.token,
      };
    },
  },
});

export const { saveUser } = slice.actions;

export default slice.reducer;
