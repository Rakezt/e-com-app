import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    authDrawerOpen: false,
  },
  reducers: {
    openAuthDrawer(state) {
      state.authDrawerOpen = true;
    },
    closeAuthDrawer(state) {
      state.authDrawerOpen = false;
    },
  },
});

export const { openAuthDrawer, closeAuthDrawer } = uiSlice.actions;
export default uiSlice.reducer;
