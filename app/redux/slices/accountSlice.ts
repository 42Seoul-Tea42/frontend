import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAccountSet } from '../interface';
import axiosInstance from '../../utils/axios';
import { AxiosResponse } from 'axios';
import { postLoginToServer } from './loginSlice';

export interface AccountState {
  user: UserAccountSet;
  reEnterPassword: string;
  loading: boolean;
  error: string | null;
}

const initialState: AccountState = {
  user: {
    identity: {
      id: '',
      firstname: '',
      lastname: ''
    },
    account: {
      email: '',
      password: ''
    },
    profile: {
      subPhotos: [],
      interests: [],
      rating: 0,
      sexualPreference: '',
      introduction: ''
    },
    position: {
      latitude: 0,
      longitude: 0
    },
    ageGender: {
      age: 0,
      gender: ''
    },
    photo: {
      mainPhoto: ''
    }
  },
  reEnterPassword: '',
  loading: false,
  error: null
};

// // 회원가입 정보 서버로 전송
// export const postSignupToServer = createAsyncThunk(
//   'accountSlice/postSignupToServer',
//   async (_, { getState }) => {
//     const state = getState() as { accountSlice: AccountState };
//     const { user } = state.accountSlice;

//     const response = await axiosInstance.post('https://api.example.com/data', {
//       body: {
//         login_id: user.identity.id,
//         email: user.account.email,
//         pw: user.account.password,
//         last_name: user.identity.lastname,
//         name: user.identity.firstname
//       }
//     });
//     return response.status;
//   }
// );

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

    setAccountFirstname: (state: AccountState, action: PayloadAction<string>) => {
      state.user.identity.firstname = action.payload;
    },
    setAccountLastname: (state: AccountState, action: PayloadAction<string>) => {
      state.user.identity.lastname = action.payload;
    },
    setAccountEmail: (state: AccountState, action: PayloadAction<string>) => {
      state.user.account.email = action.payload;
    },
    setReEnterPassword: (state: AccountState, action: PayloadAction<string>) => {
      state.reEnterPassword = action.payload;
    }
  },
  extraReducers: builder => {
    // builder.addCase(postSignupToServer.pending, state => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(postSignupToServer.fulfilled, (state, action) => {
    //   if (action.payload === 200) {
    //     state.isSignup = true;
    //   }
    //   state.user = initialState.user;
    // });
    // builder.addCase(postSignupToServer.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message ?? null;
    // });
    builder.addCase(postLoginToServer.fulfilled, (state, action) => {
      state.user.identity.id = action.payload.id;
      state.user.identity.firstname = action.payload.name;
      state.user.identity.lastname = action.payload.last_name;
      state.user.ageGender.age = action.payload.birthday;
    });
  }
});

export const {
  setAccountId,
  setAccountPassword,
  setAccountEmail,
  setAccountFirstname,
  setAccountLastname,
  setReEnterPassword
} = accountSlice.actions;
export const extraReducers = accountSlice.reducer;

export default accountSlice.reducer;
