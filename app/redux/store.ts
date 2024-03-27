import { configureStore } from '@reduxjs/toolkit';
import searchPageSlice from './slices/searchParamSlice';
import signupSlice from './slices/signupSlice';
import suggestProfileSlice from './slices/suggestProfileSlice';
import userDataSlice from './slices/userDataSlice';
import socketEventSlice from './slices/socketEventSlice';

const store = configureStore({
  reducer: {
    searchParam: searchPageSlice,
    signup: signupSlice,
    suggestProfile: suggestProfileSlice,
    userData: userDataSlice,
    socketEvent: socketEventSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
