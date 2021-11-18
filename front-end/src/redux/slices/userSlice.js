import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    id: 0,
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
        id: payload.id,
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
