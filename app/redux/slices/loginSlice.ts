import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';
import { AccountState } from './accountSlice';

/** 서버에서 받아오는 유저의 인증단계 */
export type Steps = {
  isLogin: boolean;
  emailVerification: boolean; // 이메일 인증 필요
  profileCreation: boolean; // 프로필 작성 필요
  emojiSelection: boolean; // 이모지 선택 필요
};

interface LoginState {
  idPasswordLoginFormView: boolean;
  isResendEmail: boolean;
  steps: Steps;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  idPasswordLoginFormView: false,
  isResendEmail: false,
  steps: {
    isLogin: false,
    emailVerification: false,
    profileCreation: false,
    emojiSelection: false
  },
  loading: false,
  error: null
};

export const postLogin = createAsyncThunk('loginSlice/postLogin', async (_, { getState }) => {
  const state = getState() as { accountSlice: AccountState };
  const { user } = state.accountSlice;
  const response = await axiosInstance.post('/user/login', {
    login_id: user.identity.loginId,
    pw: user.account.password
  });
  return response.data;
});

// 인증이메일 다시보내기
export const getResendEmail = createAsyncThunk('loginSlice/getResendEmail', async () => {
  const response = await axiosInstance.get(`/user/send-email`);
  return response.data.status;
});

// 카카오 로그인
export const postKakaoLogin = createAsyncThunk('loginSlice/postKakaoLogin', async () => {
  const response = await axiosInstance.post('/user/kakao');
  return response.data;
});

// 구글 로그인
export const postGoogleLogin = createAsyncThunk('loginSlice/postGoogleLogin', async () => {
  const response = await axiosInstance.post('/user/google');
  return response.data;
});

// 토큰으로 이메일 인증받기
export const getVerifyEmail = createAsyncThunk('loginSlice/getVerifyEmail', async (token: string) => {
  await axiosInstance.get(`/user/verify-email?key=${token}`);
});

// 유저 프로필 정보 서버로 전송
export const patchUserProfile = createAsyncThunk('accountSlice/patchUserProfile', async (userProfileObject: any) => {
  const response = await axiosInstance.patch('/user/profile', userProfileObject);
  return response.status;
});

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
  // todo: 로그인 데이터 주입기
  extraReducers: builder => {
    // 로그인
    builder.addCase(postLogin.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postLogin.fulfilled, (state, action: PayloadAction<any>) => {
      state.steps.emailVerification = action.payload.email_check;
      state.steps.profileCreation = action.payload.profile_check;
      state.steps.emojiSelection = action.payload.emoji_check;
      state.steps.isLogin = true;
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
      //test
      state.steps.emailVerification = false;
      state.steps.profileCreation = false;
      state.steps.emojiSelection = false;
      state.steps.isLogin = true;
    });

    //카카오 로그인
    builder.addCase(postKakaoLogin.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postKakaoLogin.fulfilled, (state, action: PayloadAction<any>) => {
      state.steps.emailVerification = action.payload.email_check;
      state.steps.profileCreation = action.payload.profile_check;
      state.steps.emojiSelection = action.payload.emoji_check;
      state.steps.isLogin = true;
    });
    builder.addCase(postKakaoLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 구글 로그인
    builder.addCase(postGoogleLogin.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postGoogleLogin.fulfilled, (state, action: PayloadAction<any>) => {
      state.steps.emailVerification = action.payload.email_check;
      state.steps.profileCreation = action.payload.profile_check;
      state.steps.emojiSelection = action.payload.emoji_check;
      state.steps.isLogin = true;
    });
    builder.addCase(postGoogleLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    //이메일 인증받기
    builder.addCase(getVerifyEmail.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getVerifyEmail.fulfilled, state => {
      state.steps.emailVerification = true;
    });
    builder.addCase(getVerifyEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 인증이메일 다시보내기
    builder.addCase(getResendEmail.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getResendEmail.fulfilled, (state, action: PayloadAction<any>) => {
      state.isResendEmail = true;
    });
    builder.addCase(getResendEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 유저 프로필 세팅
    builder.addCase(patchUserProfile.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(patchUserProfile.fulfilled, state => {
      state.steps.profileCreation = true;
    });
    builder.addCase(patchUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const { setIdPasswordLoginFormView, closeLoginError } = loginSlice.actions;

export const extraReducers = loginSlice.reducer;

export default loginSlice.reducer;
