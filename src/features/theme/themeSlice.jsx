import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
      document.body.classList = [action.payload];
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
