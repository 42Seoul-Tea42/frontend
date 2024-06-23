import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Oauth } from '../../enum';
import { addLoginExtraReducers } from './loginExtraReducers';

/** 서버에서 받아오는 유저의 인증단계 */
export type Steps = {
  emailCheck: boolean; // 이메일 인증 필요
  profileCheck: boolean; // 프로필 작성 필요
  emojiCheck: boolean; // 이모지 선택 필요
  oauth: Oauth;
};

export interface LoginState {
  idPasswordLoginFormView: boolean;
  isResendEmail: boolean;
  steps: Steps;
  loading: boolean;
  error: string | null;
  link: string;
}

export const initialState: LoginState = {
  idPasswordLoginFormView: false,
  isResendEmail: false,
  steps: {
    emailCheck: false,
    profileCheck: false,
    emojiCheck: false,
    oauth: Oauth.NONE
  },
  link: '',
  loading: false,
  error: null
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    closeLoginError: state => {
      state.error = null;
    },
    setIdPasswordLoginFormView: (state, action: PayloadAction<boolean>) => {
      state.idPasswordLoginFormView = action.payload;
    }
  },
  extraReducers: (builder: any) => addLoginExtraReducers(builder)
});

export const { setIdPasswordLoginFormView, closeLoginError } = loginSlice.actions;

export const extraReducers = loginSlice.reducer;

export default loginSlice.reducer;
