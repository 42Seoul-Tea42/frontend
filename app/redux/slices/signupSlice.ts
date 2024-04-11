import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAccountSet } from '../interface';
import axiosInstance from '../../utils/axios';
import { AxiosResponse } from 'axios';
import { AccountState } from './accountSlice';

interface SignupState {
  validation: {
    reEnterPassword: string;
    isSignup: boolean;
    isEmailDuplicateChecked: boolean;
    isEmailVerifyChecked: boolean;
    isIdDuplicateChecked: boolean;
  };
  loading: boolean;
  error: string | null;
}

const initialState: SignupState = {
  validation: {
    isSignup: false,
    isEmailDuplicateChecked: false,
    isEmailVerifyChecked: false,
    isIdDuplicateChecked: false,
    reEnterPassword: ''
  },
  loading: false,
  error: null
};

// 회원가입 정보 서버로 전송
export const postSignupDataToServer = createAsyncThunk(
  'accountSlice/postSignupDataToServer',
  async (_, { getState }) => {
    const state = getState() as { accountSlice: AccountState };
    const { user } = state.accountSlice;

    const response = await axiosInstance.post('https://api.example.com/data', {
      body: {
        login_id: user.identity.id,
        email: user.account.email,
        pw: user.account.password,
        last_name: user.identity.lastname,
        name: user.identity.firstname
      }
    });
    return response.status;
  }
);

// 이메일 인증 요청
export const postVerifyEmailToServer = createAsyncThunk(
  'accountSlice/postVerifyEmailToServer',
  async (_, { getState }) => {
    const state = getState() as { accountSlice: AccountState };
    const { user } = state.accountSlice;

    const response = await axiosInstance.post('https://api.example.com/data', {
      body: {
        email: user.account.email
      }
    });
    return response.status;
  }
);

// 재가입 방지 이메일 중복체크
export const postCheckDuplicateEmailToServer = createAsyncThunk(
  'accountSlice/postCheckDuplicateEmailToServer',
  async (_, { getState }) => {
    const state = getState() as { accountSlice: AccountState };
    const { user } = state.accountSlice;

    const response = await axiosInstance.post('https://api.example.com/data', {
      body: {
        email: user.account.email
      }
    });
    return response.status;
  }
);

// 아이디 중복체크
export const postCheckDuplicateIdToServer = createAsyncThunk(
  'accountSlice/postCheckDuplicateIdToServer',
  async (_, { getState }) => {
    const state = getState() as { accountSlice: AccountState };
    const { user } = state.accountSlice;

    const response = await axiosInstance.post('https://api.example.com/data', {
      body: {
        id: user.identity.id
      }
    });
    return response.status;
  }
);

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    setAccountReEnterPassword: (state: SignupState, action: PayloadAction<string>) => {
      state.validation.reEnterPassword = action.payload;
    }
  },
  extraReducers: builder => {
    // 회원가입 정보 서버로 전송
    builder.addCase(postSignupDataToServer.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postSignupDataToServer.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.validation.isSignup = true;
      }
    });
    builder.addCase(postSignupDataToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 이메일 인증 요청
    builder.addCase(postVerifyEmailToServer.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postVerifyEmailToServer.fulfilled, (state, action) => {
      if (action.payload === 200) {
        // state.verify
      }
    });
    builder.addCase(postVerifyEmailToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 이메일 중복체크
    builder.addCase(postCheckDuplicateEmailToServer.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postCheckDuplicateEmailToServer.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.validation.isEmailVerifyChecked = true;
      }
    });
    builder.addCase(postCheckDuplicateEmailToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // id 중복체크
    builder.addCase(postCheckDuplicateIdToServer.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postCheckDuplicateIdToServer.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.validation.isIdDuplicateChecked = true;
      }
    });
    builder.addCase(postCheckDuplicateIdToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const { setAccountReEnterPassword } = signupSlice.actions;
export const extraReducers = signupSlice.reducer;
