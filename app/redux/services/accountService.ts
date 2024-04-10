import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAccountSet } from '../interface';
import axiosInstance from '../../utils/axios';
import { AxiosResponse } from 'axios';

interface AccountState {
  user: UserAccountSet;
  reEnterPassword: string;
  isSignup: boolean;
  isEmailDuplicateChecked: boolean;
  isEmailVerifyChecked: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AccountState = {
  user: {
    identity : {
      id: '',
      firstname: '',
      lastname: '',
    },
    account: {
      email: '',
      password: '',
    },
    profile: {
      subPhotos: [],
      interests: [],
      rating: 0,
      sexualPreference: '',
      introduction: '',
    },
    position: {
      latitude: 0,
      longitude: 0,
    },
    ageGender: {
      age: 0,
      gender: '',
    },
    photo: {
      mainPhoto: ''
    }
  },
  isSignup: false,
  isEmailDuplicateChecked: false,
  isEmailVerifyChecked: false,
  reEnterPassword: '',
  loading: false,
  error: null
};

// 회원가입 정보 서버로 전송
export const postSignupDataToServer = createAsyncThunk(
  'accountService/postSignupDataToServer',
  async (_, { getState }) => {
    const state = getState() as { accountService: AccountState };
    const { user } = state.accountService;

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
  'accountService/postVerifyEmailToServer',
  async (_, { getState }) => {
    const state = getState() as { accountService: AccountState };
    const { user } = state.accountService;

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
  'accountService/postCheckDuplicateEmailToServer',
  async (_, { getState }) => {
    const state = getState() as { accountService: AccountState };
    const { user } = state.accountService;

    const response = await axiosInstance.post('https://api.example.com/data', {
      body: {
        email: user.account.email
      }
    });
    return response.status;
  }
);

const accountSlice = createSlice({
  name: 'accountSlice',
  initialState,
  reducers: {
    setAccountId: (state: AccountState, action: PayloadAction<string>) => {
      state.user.identity.id = action.payload;
    },
    setAccountPassword: (state: AccountState, action: PayloadAction<string>) => {
      state.user.account.password = action.payload;
    },
    setAccountReEnterPassword: (state: AccountState, action: PayloadAction<string>) => {
      state.reEnterPassword = action.payload;
    },
    setAccountFirstname: (state: AccountState, action: PayloadAction<string>) => {
      state.user.identity.firstname = action.payload;
    },
    setAccountLastname: (state: AccountState, action: PayloadAction<string>) => {
      state.user.identity.lastname = action.payload;
    },
    setAccountEmail: (state: AccountState, action: PayloadAction<string>) => {
      state.user.account.email = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(postSignupDataToServer.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postSignupDataToServer.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.isSignup = true;
      }
      state.user = initialState.user;
    });
    builder.addCase(postSignupDataToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
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
    builder.addCase(postCheckDuplicateEmailToServer.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postCheckDuplicateEmailToServer.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.isEmailDuplicateChecked = true;
      }
    });
    builder.addCase(postCheckDuplicateEmailToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const {
  setAccountId,
  setAccountPassword,
  setAccountReEnterPassword,
  setAccountEmail,
  setAccountFirstname,
  setAccountLastname
} = accountSlice.actions;
export const extraReducers = accountSlice.reducer;

export default accountSlice.reducer;
