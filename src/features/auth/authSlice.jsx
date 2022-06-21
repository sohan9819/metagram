import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authStatus: JSON.parse(localStorage.getItem('AUTH_TOKEN')) ? true : false,
  user: JSON.parse(localStorage.getItem('user')),
  token: JSON.parse(localStorage.getItem('AUTH_TOKEN')),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.authStatus = true;
      state.user = user;
      state.token = token;
    },
    logout: (state, action) => {
      state.authStatus = false;
      state.user = null;
      state.token = null;
      localStorage.clear();
    },
    updateUser: (state, action) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
  },
});

export const { setCredentials, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUserStatus = (state) => state.auth.authStatus;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
