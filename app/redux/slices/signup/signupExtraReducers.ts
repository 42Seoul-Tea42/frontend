import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { SignupState } from './signupSlice';
import { AccountState } from '../account/accountSlice';
import axiosInstance from '@/api/axios';

// 회원가입 -----------------------------------------------------
export const postSignup = createAsyncThunk('accountSlice/postSignup', async (_, { getState }) => {
  try {
    const state = getState() as { accountSlice: AccountState };
    const response = await axiosInstance.post('/user/profile', {
      login_id: state.accountSlice.user.loginId,
      email: state.accountSlice.user.email,
      pw: state.accountSlice.password,
      last_name: state.accountSlice.user.lastname,
      name: state.accountSlice.user.firstname
    });
    return response.status;
  } catch (error: any) {
    return Promise.reject({
      message: error.response.data.msg
    });
  }
});

const addPostSignupCase = (builder: ActionReducerMapBuilder<SignupState>) => {
  builder.addCase(postSignup.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(postSignup.fulfilled, (state, action) => {
    state.loading = false;
    state.validation.isSignup = true;
  });
  builder.addCase(postSignup.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// DB 유저 이메일 중복체크 -----------------------------------------------------
export const getCheckDuplicateEmail = createAsyncThunk(
  'accountSlice/getCheckDuplicateEmail',
  async (_, { getState }) => {
    try {
      const state = getState() as { accountSlice: AccountState };
      const { user } = state.accountSlice;
      const response = await axiosInstance.get(`/user/check-email?email=${user.email}`);
      return response;
    } catch (error: any) {
      return Promise.reject({
        message: error.response.data.msg
      });
    }
  }
);

const addCheckDuplicateEmailCase = (builder: ActionReducerMapBuilder<SignupState>) => {
  builder.addCase(getCheckDuplicateEmail.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getCheckDuplicateEmail.fulfilled, (state, action) => {
    state.validation.isEmailDuplicateChecked = true;
    state.loading = false;
  });
  builder.addCase(getCheckDuplicateEmail.rejected, (state, action) => {
    state.error = action.error.message ?? null;
    state.loading = false;
    state.validation.isEmailDuplicateChecked = false;
  });
};

// DB 로그인 아이디 중복체크 -----------------------------------------------------
export const getCheckDuplicateId = createAsyncThunk('accountSlice/getCheckDuplicateId', async (_, { getState }) => {
  try {
    const state = getState() as { accountSlice: AccountState };
    const { user } = state.accountSlice;
    const response = await axiosInstance.get(`/user/check-id?login_id=${user.loginId}`);
    return response;
  } catch (error: any) {
    return Promise.reject({
      message: error.response.data.msg
    });
  }
});

const addCheckDuplicateIdCase = (builder: ActionReducerMapBuilder<SignupState>) => {
  builder.addCase(getCheckDuplicateId.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getCheckDuplicateId.fulfilled, (state, action) => {
    state.validation.isIdDuplicateChecked = true;
    state.loading = false;
  });
  builder.addCase(getCheckDuplicateId.rejected, (state, action) => {
    state.error = action.error.message ?? null;
    state.loading = false;
    state.validation.isIdDuplicateChecked = false;
  });
};

// extra reducers 추가 -----------------------------------------------------
export const addSignupExtraReducers = (builder: ActionReducerMapBuilder<SignupState>) => {
  addPostSignupCase(builder);
  addCheckDuplicateEmailCase(builder);
  addCheckDuplicateIdCase(builder);
};
