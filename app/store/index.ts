// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import loginViewSlice from './slices/loginViewSlice';

const store = configureStore({
  reducer: {
    loginViewer: loginViewSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
