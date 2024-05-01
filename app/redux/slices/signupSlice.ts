import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';
import { AccountState } from './accountSlice';

interface SignupState {
  validation: {
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
    isIdDuplicateChecked: false
  },
  loading: false,
  error: null
};

// 회원가입 정보 서버로 전송
export const postSignup = createAsyncThunk('accountSlice/postSignup', async (_, { getState }) => {
  const state = getState() as { accountSlice: AccountState };
  const { user } = state.accountSlice;

  const response = await axiosInstance.post('/user/profile', {
    login_id: user.identity.loginId,
    email: user.account.email,
    pw: user.account.password,
    last_name: user.identity.lastname,
    name: user.identity.firstname
  });
  return response.status;
});

// 이메일로 링크보내기 요청
export const postVerifyEmail = createAsyncThunk('accountSlice/postVerifyEmail', async (_, { getState }) => {
  const state = getState() as { accountSlice: AccountState };
  const { user } = state.accountSlice;
  const response = await axiosInstance.post('https://api.example.com/data', {
    body: {
      email: user.account.email
    }
  });
  return response.status;
});

// 재가입 방지 이메일 중복체크
export const getCheckDuplicateEmail = createAsyncThunk(
  'accountSlice/getCheckDuplicateEmail',
  async (_, { getState }) => {
    const state = getState() as { accountSlice: AccountState };
    const { user } = state.accountSlice;

    const response = await axiosInstance.get(`/user/check-email?email=${user.account.email}`);
    return response;
  }
);

// 아이디 중복체크
export const getCheckDuplicateId = createAsyncThunk('accountSlice/getCheckDuplicateId', async (_, { getState }) => {
  const state = getState() as { accountSlice: AccountState };
  const { user } = state.accountSlice;

  const response = await axiosInstance.get(`/user/check-id?login_id=${user.identity.loginId}`);
  return response;
});

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    closeSignupError: state => {
      state.error = null;
    },
    setIsSignup: (state, action: PayloadAction<boolean>) => {
      state.validation.isSignup = action.payload;
    },
    setIsEmailDuplicateChecked: (state, action: PayloadAction<boolean>) => {
      state.validation.isEmailDuplicateChecked = action.payload;
    },
    setIsLoginIdDuplicateChecked: (state, action: PayloadAction<boolean>) => {
      state.validation.isIdDuplicateChecked = action.payload;
    }
  },
  extraReducers: builder => {
    // 회원가입 정보 서버로 전송
    builder.addCase(postSignup.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postSignup.fulfilled, (state, action) => {
      state.validation.isSignup = true;
    });
    builder.addCase(postSignup.rejected, (state, action) => {
      state.loading = false;
      state.error = '회원가입이 실패했습니다.';
    });

    // 이메일 인증 요청
    builder.addCase(postVerifyEmail.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postVerifyEmail.fulfilled, (state, action) => {
      if (action.payload === 200) {
        // state.verify
      }
    });
    builder.addCase(postVerifyEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 이메일 중복체크
    builder.addCase(getCheckDuplicateEmail.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCheckDuplicateEmail.fulfilled, (state, action) => {
      action.payload.data.occupied === false
        ? (state.validation.isEmailDuplicateChecked = true)
        : (state.validation.isEmailDuplicateChecked = false);
    });
    builder.addCase(getCheckDuplicateEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = '이메일이 유효하지 않습니다.';
      state.validation.isEmailDuplicateChecked = false;
    });

    // id 중복체크
    builder.addCase(getCheckDuplicateId.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCheckDuplicateId.fulfilled, (state, action) => {
      action.payload.data.occupied === false
        ? (state.validation.isIdDuplicateChecked = true)
        : (state.validation.isIdDuplicateChecked = false);
    });
    builder.addCase(getCheckDuplicateId.rejected, (state, action) => {
      state.loading = false;
      state.error = '아이디가 유효하지 않습니다.';
      state.validation.isIdDuplicateChecked = false;
    });
  }
});

export const { setIsEmailDuplicateChecked, setIsLoginIdDuplicateChecked, closeSignupError, setIsSignup } =
  signupSlice.actions;

export const extraReducers = signupSlice.reducer;

export default signupSlice.reducer;
