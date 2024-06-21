// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import chattingSlice, { initialState as chattingInit } from './slices/chatting/chattingSlice';
import suggestionSlice, { initialState as suggestionInit } from './slices/suggestion/suggestionSlice';
import accountSlice, { initialState as accountInit } from './slices/account/accountSlice';
import signupSlice, { initialState as signupInit } from './slices/signup/signupSlice';
import loginSlice, { getLogout, initialState as loginInit } from './slices/login/loginSlice';
import searchSlice, { initialState as searchInit } from './slices/searchSlice';
import profileInquirySlice, { initialState as profileInquiryInit } from './slices/profileInquiry/profileInquirySlice';

const appReducer = combineReducers({
  chattingSlice: chattingSlice,
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
    localStorage.clear();
    state = {
      chattingSlice: chattingInit,
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
