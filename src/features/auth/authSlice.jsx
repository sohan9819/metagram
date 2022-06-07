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
      console.log('Set the user credentials ');
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUserStatus = (state) => state.auth.authStatus;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
