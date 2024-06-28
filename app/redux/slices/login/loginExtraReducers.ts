import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { serverToClientMapper } from '../../dto/mapper';
import { LoginState, initialState } from '../login/loginSlice';
import { AccountState } from '../account/accountSlice';
import { Oauth, Route } from '@/redux/enum';

// 유저 라우팅 -----------------------------------------------------
const redirectToNextStep = (steps: any) => {
  const selectPath = (steps: any) => {
    if (!steps.emailCheck && steps.oauth === Oauth.NONE) {
      return Route.VERIFY_EMAIL;
    } else if (!steps.profileCheck) {
      return Route.PROFILE;
    } else if (!steps.emojiCheck) {
      return Route.EMOJI;
    } else return Route.HOME;
  };
  if (window.location.pathname !== Route.SETTING) {
    window.location.href = selectPath(steps);
  }
};

// 로그인 요청 -----------------------------------------------------
export const postLogin = createAsyncThunk('loginSlice/postLogin', async (_, { getState }) => {
  try {
    const state = getState() as { accountSlice: AccountState };
    const { user, password } = state.accountSlice;
    const response = await axiosInstance.post('/user/login', {
      login_id: user.loginId,
      pw: password
    });
    return serverToClientMapper(response.data);
  } catch (error: any) {
    return Promise.reject({
      message: error.response.data.msg
    });
  }
});

const addPostLoginCase = (builder: ActionReducerMapBuilder<LoginState>) => {
  builder.addCase(postLogin.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(postLogin.fulfilled, (state, action: PayloadAction<any>) => {
    state.steps = { ...state.steps, ...action.payload };
    state.loading = false;
    redirectToNextStep(state.steps);
  });
  builder.addCase(postLogin.rejected, (state, action: any) => {
    state.error = action.error.message ?? null;
    state.loading = false;
  });
};

export const addPostLoginAccountCase = (builder: ActionReducerMapBuilder<AccountState>) => {
  builder.addCase(postLogin.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(postLogin.fulfilled, (state: any, action: any) => {
    state.user = { ...state.user, ...action.payload };
    localStorage.setItem('id', state.user.id);
  });
  builder.addCase(postLogin.rejected, (state: any, action: any) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// 로그인 여부 조회 -----------------------------------------------------
export const getLogin = createAsyncThunk('loginSlice/getLogin', async () => {
  const response = await axiosInstance.get('/user/login');
  return serverToClientMapper(response.data);
});

const addGetLoginCase = (builder: ActionReducerMapBuilder<LoginState>) => {
  builder.addCase(getLogin.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getLogin.fulfilled, (state, action: PayloadAction<any>) => {
    state.steps = { ...state.steps, ...action.payload };
  });
  builder.addCase(getLogin.rejected, (state, action) => {
    state.loading = false;
  });
};

// 이메일 바꾸기 -----------------------------------------------------
export const changeMyEmail = createAsyncThunk('accountSlice/changeMyEmail', async (_: any, { getState }: any) => {
  const state = getState() as { accountSlice: AccountState };
  const response = await axiosInstance.patch('/user/email', {
    email: state.accountSlice.user.email
  });
  return serverToClientMapper(response.data);
});

const addChangeMyEmailCase = (builder: ActionReducerMapBuilder<LoginState>) => {
  builder.addCase(changeMyEmail.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(changeMyEmail.fulfilled, (state, action) => {
    state.steps = { ...state.steps, ...action.payload };
    state.loading = false;
  });
  builder.addCase(changeMyEmail.rejected, (state, action) => {
    state.loading = false;
    alert('이미 존재하는 이메일입니다.');
    state.error = action.error.message ?? null;
  });
};

// 인증이메일 다시보내기 -----------------------------------------------------
export const getResendEmail = createAsyncThunk('loginSlice/getResendEmail', async () => {
  const response = await axiosInstance.get(`/user/send-email`);
  return response.data.status;
});

const addResendEmailCase = (builder: ActionReducerMapBuilder<LoginState>) => {
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
};

// 카카오 로그인 -----------------------------------------------------
export const getKaKaoLogin = createAsyncThunk(
  'loginSlice/getKaKaoLogin',
  async ({ code, state }: { code: string; state: string }) => {
    const response = await axiosInstance.get(`/kakao/login?code=${code}&state=${state}`);
    return serverToClientMapper(response.data);
  }
);

const addGetKaKaoLoginCase = (builder: ActionReducerMapBuilder<LoginState>) => {
  builder.addCase(getKaKaoLogin.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getKaKaoLogin.fulfilled, (state, action: PayloadAction<any>) => {
    state.steps = { ...state.steps, ...action.payload };
    state.loading = false;
    redirectToNextStep(state.steps);
  });
  builder.addCase(getKaKaoLogin.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

export const addGetKaKaoLoginAccountCase = (builder: ActionReducerMapBuilder<AccountState>) => {
  builder.addCase(getKaKaoLogin.pending, (state: any, action: any) => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getKaKaoLogin.fulfilled, (state: any, action: any) => {
    state.user = { ...state.user, ...action.payload };
    localStorage.setItem('id', state.user.id);
  });
  builder.addCase(getKaKaoLogin.rejected, (state: any, action: any) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// 구글 로그인 -----------------------------------------------------
export const getGoogleLogin = createAsyncThunk('loginSlice/getGoogleLogin', async () => {
  const response = await axiosInstance.get('/google/login');
  return serverToClientMapper(response.data);
});

const addGetGoogleLoginCase = (builder: ActionReducerMapBuilder<LoginState>) => {
  builder.addCase(getGoogleLogin.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getGoogleLogin.fulfilled, (state, action: PayloadAction<any>) => {
    state.steps = { ...state.steps, ...action.payload };
    state.loading = false;
    redirectToNextStep(state.steps);
  });
  builder.addCase(getGoogleLogin.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

export const addGetGoogleLoginAccountCase = (builder: ActionReducerMapBuilder<AccountState>) => {
  builder.addCase(getGoogleLogin.pending, (state: any, action: any) => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getGoogleLogin.fulfilled, (state: any, action: any) => {
    state.user = { ...state.user, ...action.payload };
    localStorage.setItem('id', state.user.id);
  });
  builder.addCase(getGoogleLogin.rejected, (state: any, action: any) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// 토큰으로 이메일 인증받기 -----------------------------------------------------
export const getVerifyEmail = createAsyncThunk('loginSlice/getVerifyEmail', async (token: string) => {
  const response = await axiosInstance.get(`/user/verify-email?key=${token}`);
  return response.status;
});

const addGetVerifyEmailCase = (builder: ActionReducerMapBuilder<LoginState>) => {
  builder.addCase(getVerifyEmail.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getVerifyEmail.fulfilled, state => {
    state.steps.emailCheck = true;
    alert('이메일 인증이 완료되었습니다.');
    window.location.href = Route.LOGIN;
  });
  builder.addCase(getVerifyEmail.rejected, (state, action) => {
    state.loading = false;
    alert('로그인 해주세요.');
    window.location.href = Route.LOGIN;
    state.error = action.error.message ?? null;
  });
};

// 로그아웃 처리 -----------------------------------------------------
export const getLogout = createAsyncThunk('loginSlice/getLogout', async () => {
  const response = await axiosInstance.post('/user/logout', {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.status;
});

const addGetLogoutCase = (builder: ActionReducerMapBuilder<LoginState>) => {
  builder.addCase(getLogout.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getLogout.fulfilled, state => {
    state = initialState;
    window.location.href = Route.LOGIN;
  });
  builder.addCase(getLogout.rejected, state => {
    alert('로그아웃 실패했습니다.');
  });
};

// 회원탈퇴 처리 -----------------------------------------------------
export const deleteUser = createAsyncThunk('loginSlice/deleteUser', async () => {
  const response = await axiosInstance.delete('/user/unregister');
  return response.status;
});

const addDeleteUserCase = (builder: ActionReducerMapBuilder<LoginState>) => {
  builder.addCase(deleteUser.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(deleteUser.fulfilled, state => {
    state = initialState;
    window.location.href = Route.LOGIN;
  });
  builder.addCase(deleteUser.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// 비밀번호 재설정 이메일 요청 -----------------------------------------------------
export const getResetPasswordEmail = createAsyncThunk('loginSlice/getResetPasswordEmail', async (loginId: string) => {
  const response = await axiosInstance.get(`/user/reset-pw?login_id=${loginId}`);
  return response.status;
});

const addGetResetPasswordEmailCase = (builder: ActionReducerMapBuilder<LoginState>) => {
  builder.addCase(getResetPasswordEmail.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getResetPasswordEmail.fulfilled, state => {
    alert('비밀번호 재설정 메일을 보냈습니다. 확인해주세요.');
  });
  builder.addCase(getResetPasswordEmail.rejected, (state, action) => {
    alert('존재하지 않는 로그인 id입니다.');
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// 유저 프로필 정보 서버로 전송 -----------------------------------------------------
export const patchUserProfile = createAsyncThunk('accountSlice/patchUserProfile', async (data: any) => {
  const response = await axiosInstance.patch('/user/profile', data);
  return serverToClientMapper(response.data);
});

const addPatchUserProfileCase = (builder: ActionReducerMapBuilder<LoginState>) => {
  builder.addCase(patchUserProfile.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(patchUserProfile.fulfilled, (state, action) => {
    state.steps = { ...state.steps, ...action.payload };
    state.loading = false;
    alert('프로필이 업데이트 되었습니다.');
    redirectToNextStep(state.steps);
  });
  builder.addCase(patchUserProfile.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// extra reducers 추가 -----------------------------------------------------
export const addLoginExtraReducers = (builder: ActionReducerMapBuilder<LoginState>) => {
  addChangeMyEmailCase(builder);
  addGetLoginCase(builder);
  addPostLoginCase(builder);
  addResendEmailCase(builder);
  addGetKaKaoLoginCase(builder);
  addGetGoogleLoginCase(builder);
  addGetVerifyEmailCase(builder);
  addGetLogoutCase(builder);
  addDeleteUserCase(builder);
  addGetResetPasswordEmailCase(builder);
  addPatchUserProfileCase(builder);
};
