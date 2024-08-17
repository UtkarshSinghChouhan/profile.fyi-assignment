
import { Theme } from '@/models/enums';
import { ThemeVariant } from '@/models/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState  = {
  theme: Theme.LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {

    setTheme: (state, action: PayloadAction<ThemeVariant>) => {
      state.theme = action.payload;
    }
  },
});

export const {
  setTheme,
} = themeSlice.actions;

export default themeSlice.reducer;
