import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { AccountState, patchUserProfile } from './accountSlice';
import { serverToClientMapper } from '../dto/mapper';

/** 서버에서 받아오는 유저의 인증단계 */
export type Steps = {
  isLogin: boolean;
  emailCheck: boolean; // 이메일 인증 필요
  profileCheck: boolean; // 프로필 작성 필요
  emojiCheck: boolean; // 이모지 선택 필요
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
    emailCheck: false,
    profileCheck: false,
    emojiCheck: false
  },
  loading: false,
  error: null
};

// 로그인 요청
export const postLogin = createAsyncThunk('loginSlice/postLogin', async (_, { getState }) => {
  const state = getState() as { accountSlice: AccountState };
  const { user, password } = state.accountSlice;
  const response = await axiosInstance.post('/user/login', {
    login_id: user.loginId,
    pw: password
  });
  return serverToClientMapper(response.data);
});

// 로그인 여부 조회
export const getLogin = createAsyncThunk('loginSlice/getLogin', async () => {
  const response = await axiosInstance.get('/user/login');
  return serverToClientMapper(response.data);
});

// 인증이메일 다시보내기
export const getResendEmail = createAsyncThunk('loginSlice/getResendEmail', async () => {
  const response = await axiosInstance.get(`/user/send-email`);
  return response.data.status;
});

// 카카오 로그인
export const getKaKaoLogin = createAsyncThunk('loginSlice/getKaKaoLogin', async () => {
  const response = await axiosInstance.get('/kakao/login');
  return serverToClientMapper(response.data);
});

// 구글 로그인
export const getGoogleLogin = createAsyncThunk('loginSlice/getGoogleLogin', async () => {
  const response = await axiosInstance.get('/google/login');
  return serverToClientMapper(response.data);
});

// 토큰으로 이메일 인증받기
export const getVerifyEmail = createAsyncThunk('loginSlice/getVerifyEmail', async (token: string) => {
  const response = await axiosInstance.get(`/user/verify-email?key=${token}`);
  return response.status;
});

// 로그아웃 처리
export const getLogout = createAsyncThunk('loginSlice/getLogout', async () => {
  const response = await axiosInstance.post('/user/logout');
  return response.status;
});

// 회원탈퇴 처리
export const deleteUser = createAsyncThunk('loginSlice/deleteUser', async () => {
  const response = await axiosInstance.delete('/user/unregister');
  return response.status;
});

// 비밀번호 재설정 이메일 요청
export const getResetPasswordEmail = createAsyncThunk('loginSlice/getResetPasswordEmail', async (loginId: string) => {
  const response = await axiosInstance.get(`/user/reset-pw?login_id=${loginId}`);
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
      console.log(action.payload);
      state.steps = { ...state.steps, ...action.payload };
      state.steps.isLogin = true;
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = '로그인 실패했습니다. 다시 시도해주세요.';
      state.steps.isLogin = false;
    });

    // 로그인 상태 확인하기
    builder.addCase(getLogin.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getLogin.fulfilled, (state, action: PayloadAction<any>) => {
      state.steps = { ...state.steps, ...action.payload };
      state.steps.isLogin = true;
    });
    builder.addCase(getLogin.rejected, (state, action) => {
      state.loading = false;
      state.steps.isLogin = false;
      state.error = '로그인을 해주세요.';
    });

    //카카오 로그인
    builder.addCase(getKaKaoLogin.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getKaKaoLogin.fulfilled, (state, action: PayloadAction<any>) => {
      state.steps = { ...state.steps, ...action.payload };
      state.steps.isLogin = true;
    });
    builder.addCase(getKaKaoLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 구글 로그인
    builder.addCase(getGoogleLogin.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getGoogleLogin.fulfilled, (state, action: PayloadAction<any>) => {
      state.steps = { ...state.steps, ...action.payload };
      state.steps.isLogin = true;
    });
    builder.addCase(getGoogleLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    //이메일 인증받기
    builder.addCase(getVerifyEmail.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getVerifyEmail.fulfilled, state => {
      state.steps.emailCheck = true;
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

    // 유저 프로필 세팅 !steps 설정때문에 account가 아닌 login slice에 위치
    builder.addCase(patchUserProfile.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(patchUserProfile.fulfilled, state => {
      state.steps.profileCheck = true;
    });
    builder.addCase(patchUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 로그아웃
    builder.addCase(getLogout.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getLogout.fulfilled, state => {
      state = initialState;
    });
    builder.addCase(getLogout.rejected, () => initialState);

    // 회원탈퇴
    builder.addCase(deleteUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteUser.fulfilled, state => {
      state.steps.isLogin = false;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 비밀번호 찾기
    builder.addCase(getResetPasswordEmail.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getResetPasswordEmail.fulfilled, state => {
      // test
      // none
    });
    builder.addCase(getResetPasswordEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const { setIdPasswordLoginFormView, closeLoginError } = loginSlice.actions;

export const extraReducers = loginSlice.reducer;

export default loginSlice.reducer;
