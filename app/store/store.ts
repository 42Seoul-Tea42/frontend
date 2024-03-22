import { configureStore } from '@reduxjs/toolkit';
import searchPageSlice from './slices/searchParamSlice';
import signupSlice from './slices/signupSlice';
import suggestProfileSlice from './slices/suggestProfileSlice';
import userDataSlice from './slices/userDataSlice';

const store = configureStore({
  reducer: {
    searchParam: searchPageSlice,
    signup: signupSlice,
    suggestProfile: suggestProfileSlice,
    userData: userDataSlice
  }
});

export default store;
