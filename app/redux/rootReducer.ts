// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import chattingSlice, { initialState as chattingInit } from './slices/chattingSlice';
import historySlice, { initialState as historyInit } from './slices/historySlice';
import fancySlice, { initialState as fancyInit } from './slices/fancySlice';
import suggestionSlice, { initialState as suggestionInit } from './slices/suggestionSlice';
import accountSlice, { initialState as accountInit } from './slices/accountSlice';
import signupSlice, { initialState as signupInit } from './slices/signupSlice';
import loginSlice, { getLogout, initialState as loginInit } from './slices/loginSlice';
import searchSlice, { initialState as searchInit } from './slices/searchSlice';
import profileInquirySlice, { initialState as profileInquiryInit } from './slices/profileInquirySlice';

const appReducer = combineReducers({
  chattingSlice: chattingSlice,
  historySlice: historySlice,
  fancySlice: fancySlice,
  suggestionSlice: suggestionSlice,
  accountSlice: accountSlice,
  signupSlice: signupSlice,
  loginSlice: loginSlice,
  searchSlice: searchSlice,
  profileInquirySlice: profileInquirySlice
});

const rootReducer = (state: any, action: any) => {
  // 모든 리듀서 강제 초기화 || 로그아웃 성공시 초기화
  if (action.type === 'RESET' || action.type === getLogout.fulfilled.type) {
    state = {
      chattingSlice: chattingInit,
      historySlice: historyInit,
      fancySlice: fancyInit,
      suggestionSlice: suggestionInit,
      accountSlice: accountInit,
      signupSlice: signupInit,
      loginSlice: loginInit,
      searchSlice: searchInit,
      profileInquirySlice: profileInquiryInit
    };
  }
  return appReducer(state, action);
};

export default rootReducer;
