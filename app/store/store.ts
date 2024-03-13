import { configureStore } from '@reduxjs/toolkit';
import searchPageSlice from './slices/searchParamSlice';
import signupSlice from './slices/signupSlice';
import userProfileSlice from './slices/userProfileSlice';

const store = configureStore({
  reducer: {
    searchParam: searchPageSlice,
    signup: signupSlice,
    userProfile: userProfileSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
