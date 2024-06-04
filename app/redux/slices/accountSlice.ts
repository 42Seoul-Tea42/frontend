import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAccountSet } from '../interface';
import axiosInstance from '@/api/axios';
import { getGoogleLogin, getKaKaoLogin, getLogout, postLogin } from './loginSlice';
import { Fancy } from '../interface/enum';

export interface AccountState {
  user: UserAccountSet;
  reEnterPassword: string;
  emojis: number[];
  hateEmojis: number[];
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
    photo: {
      photos: []
    },
    account: {
      email: '',
      password: ''
    },
    profile: {
      interests: [],
      rating: 0,
      sexualPreference: '0',
      introduction: ''
    },
    position: {
      latitude: 0,
      longitude: 0
    },
    ageGender: {
      age: 0,
      gender: '0'
    },
    another: {
      distance: 0,
      fancy: Fancy.NONE
    }
  },
  emojis: [],
  hateEmojis: [],
  reEnterPassword: '',
  loading: false,
  error: null
};

// 내 정보 가져오기
export const getMyAccount = createAsyncThunk('accountSlice/getMyAccount', async (_, { getState }) => {
  const response = await axiosInstance.get('/user/profile');
  return response.data;
});

// 비밀번호 재설정하기
export const postResetPassword = createAsyncThunk(
  'accountSlice/postResetPassword',
  async (key: string, { getState }) => {
    const state = getState() as { accountSlice: AccountState };
    const password = state.accountSlice.user.account.password;
    const response = await axiosInstance.post(`/user/reset-pw?key=${key}`, {
      pw: password
    });
    return response.status;
  }
);

const accountSlice = createSlice({
  name: 'accountSlice',
  initialState,
  reducers: {
    setAccountId: (state: AccountState, action: PayloadAction<number>) => {
      state.user.identity.id = action.payload;
    },
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
    addAccountPhotos: (state: AccountState, action: PayloadAction<[]>) => {
      if (state.user.photo.photos.length >= 4) return;
      const uploads = action.payload.slice(0, 4);
      state.user.photo.photos = [...state.user.photo.photos, ...uploads];
    },
    removeAccountPhotos: (state: AccountState, action: PayloadAction<number>) => {
      state.user.photo.photos = state.user.photo.photos.filter((_, index) => index !== action.payload);
    },
    setAccountEmojis: (state: AccountState, action: PayloadAction<number>) => {
      const { emojis } = state;

      // 백엔드 요청 : 4개까지만 고르게 해주세요. 4개 이상 && 새로운 이모티콘 추가 시 리턴
      if (state.emojis.length >= 4 && !emojis.includes(action.payload)) {
        return;
      }

      // 싫어요 이모티콘에 있는 경우 리턴
      if (state.hateEmojis.includes(action.payload)) {
        return;
      }

      // 이모티콘 추가 및 삭제
      emojis.includes(action.payload)
        ? (state.emojis = emojis.filter(item => item !== action.payload))
        : (state.emojis = [...emojis, action.payload]);
    },
    setAccountHateEmojis: (state: AccountState, action: PayloadAction<number>) => {
      const { hateEmojis } = state;

      // 백엔드 요청 : 4개까지만 고르게 해주세요. 4개 이상 && 새로운 이모티콘 추가 시 리턴
      if (state.hateEmojis.length >= 4 && !hateEmojis.includes(action.payload)) {
        return;
      }

      // 좋아요 이모티콘에 있는 경우 리턴
      if (state.emojis.includes(action.payload)) {
        return;
      }

      // 이모티콘 추가 및 삭제
      hateEmojis.includes(action.payload)
        ? (state.hateEmojis = hateEmojis.filter(item => item !== action.payload))
        : (state.hateEmojis = [...hateEmojis, action.payload]);
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
    // 내정보 가져오기
    builder.addCase(getMyAccount.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getMyAccount.fulfilled, (state, action) => {
      // test
      state.user.identity.id = action.payload.id;
      state.user.identity.loginId = action.payload.loginId;
      state.user.identity.firstname = action.payload.firstname;
      state.user.identity.lastname = action.payload.lastname;
      state.user.account.password = action.payload.password;
      state.user.ageGender.age = action.payload.age;
      state.user.photo.photos = action.payload.pictures;
      state.user.ageGender.age = action.payload.age;
      state.user.profile.sexualPreference = action.payload.sexualPreference;
      state.user.profile.interests = action.payload.interests;
      state.user.profile.introduction = action.payload.introduction;
      state.emojis = action.payload.emojis;
    });
    builder.addCase(getMyAccount.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 로그인시 내정보 세팅
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.user.identity.id = action.payload.id;
      state.user.identity.firstname = action.payload.name;
      state.user.identity.lastname = action.payload.last_name;
      state.user.ageGender.age = action.payload.birthday;
    });
    builder.addCase(getGoogleLogin.fulfilled, (state, action) => {
      state.user.identity.id = action.payload.id;
      state.user.identity.firstname = action.payload.name;
      state.user.identity.lastname = action.payload.last_name;
      state.user.ageGender.age = action.payload.birthday;
    });
    builder.addCase(getKaKaoLogin.fulfilled, (state, action) => {
      state.user.identity.id = action.payload.id;
      state.user.identity.firstname = action.payload.name;
      state.user.identity.lastname = action.payload.last_name;
      state.user.ageGender.age = action.payload.birthday;
    });

    // 비밀번호 재설정하기
    builder.addCase(postResetPassword.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postResetPassword.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(postResetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 로그아웃
    builder.addCase(getLogout.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getLogout.fulfilled, () => initialState);
    builder.addCase(getLogout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const {
  setAccountId,
  setAccountLoginId,
  setAccountPassword,
  setAccountEmail,
  setAccountFirstname,
  setAccountLastname,
  setAccountReEnterPassword,
  setAccountAge,
  setAccountGender,
  setAccountSexualPreference,
  setAccountEmojis,
  setAccountHateEmojis,
  setAccountInterests,
  setAccountIntroduction,
  addAccountPhotos,
  removeAccountPhotos
} = accountSlice.actions;
export const extraReducers = accountSlice.reducer;

export default accountSlice.reducer;
