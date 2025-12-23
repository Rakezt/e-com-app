import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    authDrawerOpen: false,
    authMode: 'login',
  },
  reducers: {
    openLogin(state) {
      state.authDrawerOpen = true;
      state.authMode = 'login';
    },
    openSignup(state) {
      state.authDrawerOpen = true;
      state.authMode = 'signup';
    },
    closeAuthDrawer(state) {
      state.authDrawerOpen = false;
    },
  },
});

export const { openLogin, openSignup, closeAuthDrawer } = uiSlice.actions;
export default uiSlice.reducer;
