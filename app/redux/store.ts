import { configureStore } from '@reduxjs/toolkit';
import searchPageSlice from './slices/searchParamSlice';
import signupSlice from './slices/signupSlice';
import suggestProfileSlice from './slices/suggestProfileSlice';
import userDataSlice from './slices/userDataSlice';
import socketEventSlice from './slices/socketEventSlice';
import profileServiceSlice from './slices/profileServiceSlice';

const store = configureStore({
  reducer: {
    searchParam: searchPageSlice,
    signup: signupSlice,
    suggestProfile: suggestProfileSlice,
    userData: userDataSlice,
    socketEvent: socketEventSlice,
    profileService: profileServiceSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
