// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import loginViewSlice from './slices/loginViewSlice';
import searchPageSlice from './slices/searchValueDataSlice';
import signupSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    loginViewer: loginViewSlice,
    searchValue: searchPageSlice,
    signupViewer: signupSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
