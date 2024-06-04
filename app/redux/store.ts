import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import historySlice from './slices/historySlice';
import fancySlice from './slices/fancySlice';
import suggestionSlice from './slices/suggestionSlice';
import accountSlice from './slices/accountSlice';
import signupSlice from './slices/signupSlice';
import loginSlice from './slices/loginSlice';
import searchSlice from './slices/searchSlice';
import profileInquirySlice from './slices/profileInquirySlice';
import chattingSlice from './slices/chattingSlice';

const store = configureStore({
  reducer: {
    historySlice: historySlice,
    fancySlice: fancySlice,
    suggestionSlice: suggestionSlice,
    accountSlice: accountSlice,
    signupSlice: signupSlice,
    loginSlice: loginSlice,
    searchSlice: searchSlice,
    profileInquirySlice: profileInquirySlice,
    chattingSlice: chattingSlice
  },
  middleware: (
    getDefaultMiddleware: (arg0: {
      serializableCheck: boolean; // dev: false, prod: true
      immutableCheck: boolean; // dev: false, prod: true
    }) => any
  ) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false, // dev: false, prod: true
      immutableCheck: false // dev: false, prod: true
    });

    // 추가적인 미들웨어를 배열로 연결
    if (process.env.NODE_ENV === 'development') {
      middlewares.push(logger); // Redux Logger 미들웨어를 추가
    }

    return middlewares;
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
