import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { getGoogleLogin, getKaKaoLogin, getLogout, postLogin } from './loginSlice';
import { Gender } from '../enum';
import { MyAccountDTO } from '../dto/userDto';

export interface AccountState {
  user: MyAccountDTO;
  password: string;
  reEnterPassword: string;
  loading: boolean;
  error: string | null;
}

const initialState = {
  user: new MyAccountDTO({}),
  password: '',
  reEnterPassword: '',
  loading: false,
  error: null
};

// 내 정보 가져오기
export const getMyAccount = createAsyncThunk<MyAccountDTO>('accountSlice/getMyAccount', async () => {
  const response = await axiosInstance.get('/user/profile');
  const user = new MyAccountDTO(response.data.profile);
  return user;
});

// 유저 프로필 정보 서버로 전송
export const patchUserProfile = createAsyncThunk('accountSlice/patchUserProfile', async (_, { getState }) => {
  const state = getState() as { accountSlice: AccountState };
  const user = state.accountSlice.user;
  const response = await axiosInstance.patch('/user/profile', {
    pictures: user.pictures // backend: 배열형태로 보내주세요.
    // gender: parseInt(user.ageGender.gender), // backend: 숫자형태로 보내주세요.
    // taste: parseInt(user.profile.sexualPreference), // backend: 숫자형태로 보내주세요.
    // bio: user.profile.introduction,
    // tags: user.profile.interests
  });
  return response.status;
});

// 비밀번호 재설정하기
export const postResetPassword = createAsyncThunk(
  'accountSlice/postResetPassword',
  async (key: string, { getState }) => {
    // 패스워드 직접 받는 것으로 변경 필요 -- test --
    // const state = getState() as { accountSlice: AccountState };
    // const password = state.accountSlice.user.password;
    const response = await axiosInstance.post(`/user/reset-pw?key=${key}`, {
      // pw: password
    });
    return response.status;
  }
);

const accountSlice = createSlice({
  name: 'accountSlice',
  initialState,
  reducers: {
    // setAccountId: (state: AccountState, action: PayloadAction<number>) => {
    //   state.user.id = action.payload;
    // },
    setAccountLoginId: (state: AccountState, action: PayloadAction<string>) => {
      state.user.loginId = action.payload;
    },
    setAccountPassword: (state: AccountState, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setAccountGender: (state: AccountState, action: PayloadAction<string>) => {
      state.user.gender = action.payload;
    },
    setAccountAge: (state: AccountState, action: PayloadAction<number>) => {
      if (action.payload < 0 || action.payload > 100) return;
      state.user.age = action.payload;
    },
    setAccountFirstname: (state: AccountState, action: PayloadAction<string>) => {
      state.user.firstname = action.payload;
    },
    setAccountLastname: (state: AccountState, action: PayloadAction<string>) => {
      state.user.lastname = action.payload;
    },
    setAccountEmail: (state: AccountState, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
    setAccountReEnterPassword: (state: AccountState, action: PayloadAction<string>) => {
      state.reEnterPassword = action.payload;
    },
    setAccountSexualPreference: (state: AccountState, action: PayloadAction<Gender>) => {
      state.user.sexualPreference = action.payload;
    },
    setAccountIntroduction: (state: AccountState, action: PayloadAction<string>) => {
      state.user.introduction = action.payload;
    },
    addAccountPhotos: (state: AccountState, action: PayloadAction<[]>) => {
      state.user.pictures = [...state.user.pictures, ...action.payload];
    },
    removeAccountPhotos: (state: AccountState, action: PayloadAction<number>) => {
      state.user.pictures = state.user.pictures.filter((_, index) => index !== action.payload);
    },
    setAccountEmojis: (state: AccountState, action: PayloadAction<number>) => {
      // 백엔드 요청 : 4개까지만 고르게 해주세요. 4개 이상 && 새로운 이모티콘 추가 시 리턴
      if (state.user.emoji.length >= 4 && !state.user.emoji.includes(action.payload)) {
        return;
      }

      // 싫어요 이모티콘에 있는 경우 리턴
      if (state.user.hateEmoji.includes(action.payload)) {
        return;
      }

      // 이모티콘 추가 및 삭제
      if (state.user.emoji.includes(action.payload)) {
        state.user.emoji = state.user.emoji.filter(item => item !== action.payload);
      } else {
        state.user.emoji = [...state.user.emoji, action.payload];
      }
    },
    setAccountHateEmojis: (state: AccountState, action: PayloadAction<number>) => {
      // 백엔드 요청 : 4개까지만 고르게 해주세요. 4개 이상 && 새로운 이모티콘 추가 시 리턴
      if (state.user.hateEmoji.length >= 4 && !state.user.hateEmoji.includes(action.payload)) {
        return;
      }

      // 좋아요 이모티콘에 있는 경우 리턴
      if (state.user.emoji.includes(action.payload)) {
        return;
      }

      // 이모티콘 추가 및 삭제
      state.user.hateEmoji.includes(action.payload)
        ? (state.user.hateEmoji = state.user.hateEmoji.filter(item => item !== action.payload))
        : (state.user.hateEmoji = [...state.user.hateEmoji, action.payload]);
    },
    setAccountInterests: (state: AccountState, action: PayloadAction<number>) => {
      const interests = state.user.interests;
      if (interests.includes(action.payload)) {
        state.user.interests = interests.filter(item => item !== action.payload);
      } else {
        state.user.interests = [...interests, action.payload];
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
      state.user = { ...state.user, ...action.payload };
    });
    builder.addCase(getMyAccount.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 로그인시 내정보 세팅
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload };
    });
    builder.addCase(getGoogleLogin.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload };
    });
    builder.addCase(getKaKaoLogin.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload };
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
  setAccountEmojis,
  setAccountHateEmojis,
  setAccountInterests,
  setAccountIntroduction,
  addAccountPhotos,
  removeAccountPhotos
} = accountSlice.actions;
export const extraReducers = accountSlice.reducer;

export default accountSlice.reducer;
