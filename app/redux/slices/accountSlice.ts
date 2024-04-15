import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAccountSet } from '../interface';
import axiosInstance from '../../utils/axios';
import { AxiosResponse } from 'axios';
import { postLoginToServer } from './loginSlice';

export interface AccountState {
  user: UserAccountSet;
  reEnterPassword: string;
  emojis: number[];
  loading: boolean;
  error: string | null;
}

const initialState: AccountState = {
  user: {
    identity: {
      id: 0,
      loginId: '',
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
  emojis: [],
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
    // setAccountId: (state: AccountState, action: PayloadAction<number>) => {
    //   state.user.identity.id = action.payload;
    // },
    setAccountLoginId: (state: AccountState, action: PayloadAction<string>) => {
      state.user.identity.loginId = action.payload;
    },
    setAccountPassword: (state: AccountState, action: PayloadAction<string>) => {
      state.user.account.password = action.payload;
    },
    setAccountGender: (state: AccountState, action: PayloadAction<string>) => {
      state.user.ageGender.gender = action.payload;
    },
    setAccountAge: (state: AccountState, action: PayloadAction<number>) => {
      if (action.payload < 0 || action.payload > 100) return;
      state.user.ageGender.age = action.payload;
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
    setAccountReEnterPassword: (state: AccountState, action: PayloadAction<string>) => {
      state.reEnterPassword = action.payload;
    },
    setAccountSexualPreference: (state: AccountState, action: PayloadAction<string>) => {
      state.user.profile.sexualPreference = action.payload;
    },
    setAccountIntroduction: (state: AccountState, action: PayloadAction<string>) => {
      state.user.profile.introduction = action.payload;
    },
    setAccountSubPhotos: (state: AccountState, action: PayloadAction<string>) => {
      const { subPhotos } = state.user.profile;
      const newSubPhotos =
        subPhotos.length >= 4 ? [...subPhotos.slice(1), action.payload] : [...subPhotos, action.payload];
      state.user.profile.subPhotos = newSubPhotos;
    },
    setAccountMainPhoto: (state: AccountState, action: PayloadAction<string>) => {
      state.user.photo.mainPhoto = action.payload;
    },
    setAccountEmojis: (state: AccountState, action: PayloadAction<number>) => {
      const { emojis } = state;
      if (emojis.includes(action.payload)) {
        state.emojis = emojis.filter(item => item !== action.payload);
      } else {
        state.emojis = [...emojis, action.payload];
      }
    },
    setAccountInterests: (state: AccountState, action: PayloadAction<number>) => {
      const { interests } = state.user.profile;
      if (interests.includes(action.payload)) {
        state.user.profile.interests = interests.filter(item => item !== action.payload);
      } else {
        state.user.profile.interests = [...interests, action.payload];
      }
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
      // state.user.identity.id = action.payload.id;
      // state.user.identity.firstname = action.payload.name;
      // state.user.identity.lastname = action.payload.last_name;
      // state.user.ageGender.age = action.payload.birthday;
    });
  }
});

export const {
  // setAccountId,
  setAccountLoginId,
  setAccountPassword,
  setAccountEmail,
  setAccountFirstname,
  setAccountLastname,
  setAccountReEnterPassword,
  setAccountAge,
  setAccountGender,
  setAccountSexualPreference,
  setAccountSubPhotos,
  setAccountMainPhoto,
  setAccountEmojis,
  setAccountInterests,
  setAccountIntroduction
} = accountSlice.actions;
export const extraReducers = accountSlice.reducer;

export default accountSlice.reducer;
