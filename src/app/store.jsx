import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import themeReducer from 'features/theme/themeSlice';
import authReducer from 'features/auth/authSlice';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
