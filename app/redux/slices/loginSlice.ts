import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';
import { AccountState } from './accountSlice';

/** 서버에서 받아오는 유저의 인증단계 */
export type Steps = {
  emailVerification: boolean | null; // 이메일 인증 필요
  profileCreation: boolean | null; // 프로필 작성 필요
  emojiSelection: boolean | null; // 이모지 선택 필요
};

interface LoginState {
  isLogin: boolean;
  steps: Steps;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  isLogin: false,
  steps: {
    emailVerification: null,
    profileCreation: null,
    emojiSelection: null
  },
  loading: false,
  error: null
};

export const postLoginToServer = createAsyncThunk('loginSlice/postLoginToServer', async (_, { getState }) => {
  // const state = getState() as { accountSlice: AccountState };
  // const { user } = state.accountSlice;
  // const response = await axiosInstance.post('https://api.example.com/data', {
  //   body: {
  //     login_id: user.identity.id,
  //     pw: user.account.password
  //   }
  // });
  // return response.data;
  return {
    email_check: false,
    profile_check: false,
    emoji_check: false
  };
});

export const getRegisterEmailToServer = createAsyncThunk(
  'loginSlice/getRegisterEmailToServer',
  async (token: string) => {
    // const response = await axiosInstance.get('https://api.example.com/data?token=' + token);
    // return response.data.status;
    return { status: 'success' };
  }
);

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(postLoginToServer.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postLoginToServer.fulfilled, (state, action: PayloadAction<any>) => {
      if (action.payload.email_check === false) {
        state.steps.emailVerification = false;
      }
      if (action.payload.profile_check === false) {
        state.steps.profileCreation = false;
      }
      if (action.payload.emoji_check === false) {
        state.steps.emojiSelection = false;
      }
      state.isLogin = true;
    });
    builder.addCase(postLoginToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
    builder.addCase(getRegisterEmailToServer.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getRegisterEmailToServer.fulfilled, (state, action: PayloadAction<any>) => {
      state.steps.emailVerification = true;
    });
    builder.addCase(getRegisterEmailToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const {} = loginSlice.actions;

export const extraReducers = loginSlice.reducer;

export default loginSlice.reducer;
