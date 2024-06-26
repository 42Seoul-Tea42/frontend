import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { serverToClientMapper } from '../../dto/mapper';
import { AccountState } from './accountSlice';
import { Route } from '@/redux/enum';
import {
  addGetGoogleLoginAccountCase,
  addGetKaKaoLoginAccountCase,
  addPostLoginAccountCase
} from '../login/loginExtraReducers';

// 내 정보 가져오기 -----------------------------------------------------
export const getMyAccount = createAsyncThunk<any>('accountSlice/getMyAccount', async () => {
  const response = await axiosInstance.get('/user/profile');
  const user = serverToClientMapper(response.data);
  return user;
});

const addGetMyAccountCase = (builder: ActionReducerMapBuilder<AccountState>) => {
  builder.addCase(getMyAccount.pending, (state: any, action: any) => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getMyAccount.fulfilled, (state: any, action: any) => {
    state.user = { ...state.user, ...action.payload };
    state.loading = false;
  });
  builder.addCase(getMyAccount.rejected, (state: any, action: any) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// 내 이메일 가져오기 (redis에 보유) -----------------------------------------------------
export const getMyEmail = createAsyncThunk('accountSlice/getMyEmail', async () => {
  const response = await axiosInstance.get('/user/email');
  return serverToClientMapper(response.data);
});

const addGetMyEmailCase = (builder: ActionReducerMapBuilder<AccountState>) => {
  builder.addCase(getMyEmail.pending, (state: { loading: boolean; error: null }) => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(
    getMyEmail.fulfilled,
    (state: { viewMail: any; loading: boolean }, action: { payload: { email: any } }) => {
      state.viewMail = action.payload.email;
      state.loading = false;
    }
  );
  builder.addCase(getMyEmail.rejected, (state: any, action: any) => {
    state.loading = false;
    alert('이미 인증된 메일입니다.');
    state.error = action.error.message ?? '';
  });
};

// 비밀번호 재설정하기 -----------------------------------------------------
export const postResetPassword = createAsyncThunk(
  'accountSlice/postResetPassword',
  async (key: string, { getState }: { getState: any }) => {
    const state = getState() as { accountSlice: AccountState };
    const password = state.accountSlice.password;
    const response = await axiosInstance.post(`/user/reset-pw?key=${key}`, {
      pw: password
    });
    return response.status;
  }
);

const addPostResetPasswordCase = (builder: ActionReducerMapBuilder<AccountState>) => {
  builder.addCase(postResetPassword.pending, (state: any, action: any) => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(postResetPassword.fulfilled, (state: any, action: any) => {
    alert('비밀번호가 변경되었습니다. 다시 로그인해주세요.');
    window.location.href = Route.LOGIN;
    state.loading = false;
  });
  builder.addCase(postResetPassword.rejected, (state: any, action: any) => {
    alert('올바르지 않은 인증입니다. 재설정을 다시 시도하세요.');
    window.location.href = Route.RESET_PASSWORD;
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// extra reducers 추가 -----------------------------------------------------
export const addAccountExtraReducers = (builder: ActionReducerMapBuilder<AccountState>) => {
  addGetMyAccountCase(builder);
  addGetMyEmailCase(builder);
  addPostResetPasswordCase(builder);
  addPostLoginAccountCase(builder);
  addGetGoogleLoginAccountCase(builder);
  addGetKaKaoLoginAccountCase(builder);
};
