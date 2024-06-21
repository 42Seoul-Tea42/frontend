import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { getGoogleLogin, getKaKaoLogin, getLogout, postLogin } from './loginSlice';
import { Gender, InputLimitLength, Route } from '../enum';
import { serverToClientMapper } from '../dto/mapper';
import { updateLikeList } from './updateLikeList';
import _ from 'lodash';

export interface AccountState {
  user: any;
  password: string;
  reEnterPassword: string;
  loading: any;
  error: any;
  viewMail: string;
}

export const initialState = {
  user: {
    id: '',
    loginId: '',
    firstname: '',
    lastname: '',
    email: '',
    age: InputLimitLength.NONE_AGE, // int 0 무시
    gender: Gender.NONE,
    sexualPreference: Gender.ALL,
    introduction: '',
    pictures: [],
    interests: [],
    hateInterests: [],
    emoji: [],
    hateEmoji: [],
    simillar: true
  },
  password: '',
  reEnterPassword: '',
  viewMail: '',
  loading: false,
  error: ''
};

// 내 정보 가져오기
export const getMyAccount = createAsyncThunk<any>('accountSlice/getMyAccount', async () => {
  const response = await axiosInstance.get('/user/profile');
  const user = serverToClientMapper(response.data);
  return user;
});

// 내 이메일 가져오기 (redis에 보유)
export const getMyEmail = createAsyncThunk('accountSlice/getMyEmail', async () => {
  const response = await axiosInstance.get('/user/email');
  return serverToClientMapper(response.data);
});

// 이메일 바꾸기 ()
export const changeMyEmail = createAsyncThunk('accountSlice/changeMyEmail', async (_: any, { getState }: any) => {
  const state = getState() as { accountSlice: AccountState };
  const response = await axiosInstance.patch('/user/email', {
    email: state.accountSlice.user.email
  });
  return serverToClientMapper(response.data);
});

// 유저 프로필 정보 서버로 전송
export const patchUserProfile = createAsyncThunk(
  'accountSlice/patchUserProfile',
  async (_: any, { getState }: { getState: any }) => {
    const state = getState() as { accountSlice: AccountState };
    const user = state.accountSlice.user;
    const password = state.accountSlice.password;
    const response = await axiosInstance.patch('/user/profile', {
      pictures: user.pictures, // backend: 배열형태로 보내주세요.
      gender: parseInt(user.gender), // backend: 숫자형태로 보내주세요.
      taste: parseInt(user.sexualPreference), // backend: 숫자형태로 보내주세요.
      bio: user.introduction,
      tags: user.interests,
      emoji: user.emoji,
      hate_emoji: user.hateEmoji,
      name: user.firstname,
      last_name: user.lastname ?? '',
      age: user.age,
      pw: password,
      email: user.email
    });
    return serverToClientMapper(response.data);
  }
);

export const saveIdToLocalStorage = (id: string) => {
  localStorage.setItem('id', id);
};

// 비밀번호 재설정하기
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
      const value = parseInt(action.payload);
      state.user.gender = value;
    },
    setAccountAge: (state: AccountState, action: PayloadAction<number>) => {
      if (action.payload < 1 || action.payload > 100) return;
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
    setAccountSexualPreference: (state: AccountState, action: PayloadAction<string>) => {
      const value = parseInt(action.payload);
      state.user.sexualPreference = value;
    },
    setAccountIntroduction: (state: AccountState, action: PayloadAction<string>) => {
      state.user.introduction = action.payload;
    },
    addAccountPhotos: (state: AccountState, action: PayloadAction<[]>) => {
      state.user.pictures = [...state.user.pictures, ...action.payload];
    },
    removeAccountPhotos: (state: AccountState, action: PayloadAction<number>) => {
      state.user.pictures = state.user.pictures.filter((_: any, index: number) => index !== action.payload);
    },
    setAccountSimiller: (state: AccountState, action: PayloadAction<boolean>) => {
      state.user.simillar = action.payload;
    },
    setAccountEmoji: (state: AccountState, action: PayloadAction<number>) => {
      updateLikeList({
        state: state,
        action: action,
        property: 'emoji',
        oppositeType: 'hateEmoji',
        maxItems: 4
      });
    },
    setAccountHateEmoji: (state: AccountState, action: PayloadAction<number>) => {
      updateLikeList({
        state: state,
        action: action,
        property: 'hateEmoji',
        oppositeType: 'emoji',
        maxItems: 4
      });
    },
    setAccountInterests: (state: AccountState, action: PayloadAction<number>) => {
      updateLikeList({
        state: state,
        action: action,
        property: 'interests',
        oppositeType: 'hateInterests'
      });
    },
    setAccountHateInterests: (state: AccountState, action: PayloadAction<number>) => {
      updateLikeList({
        state: state,
        action: action,
        property: 'hateInterests',
        oppositeType: 'interests'
      });
    }
  },
  extraReducers: (builder: any) => {
    // 내정보 가져오기
    builder.addCase(getMyAccount.pending, (state: { loading: boolean; error: null }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getMyAccount.fulfilled, (state: { user: any; loading: boolean }, action: { payload: any }) => {
      state.user = { ...state.user, ...action.payload };
      state.loading = false;
    });
    builder.addCase(
      getMyAccount.rejected,
      (state: { loading: boolean; error: any }, action: { error: { message: null } }) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      }
    );

    // 내 이메일 가져오기
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
    builder.addCase(
      getMyEmail.rejected,
      (state: { loading: boolean; error: any }, action: { error: { message: string } }) => {
        state.loading = false;
        alert('이미 인증된 메일입니다.');
        state.error = action.error.message ?? '';
      }
    );

    // 이메일 로그인
    builder.addCase(postLogin.fulfilled, (state: { user: any }, action: { payload: { id: string } }) => {
      state.user = { ...state.user, ...action.payload };
      saveIdToLocalStorage(action.payload.id);
    });
    // 구글 로그인
    builder.addCase(getGoogleLogin.fulfilled, (state: { user: any }, action: { payload: { id: string } }) => {
      state.user = { ...state.user, ...action.payload };
      saveIdToLocalStorage(action.payload.id);
    });
    // 카카오 로그인
    builder.addCase(getKaKaoLogin.fulfilled, (state: { user: any }, action: { payload: { id: string } }) => {
      state.user = { ...state.user, ...action.payload };
      saveIdToLocalStorage(action.payload.id);
    });

    // 비밀번호 재설정하기
    builder.addCase(postResetPassword.pending, (state: { loading: boolean; error: null }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postResetPassword.fulfilled, (state: { loading: boolean }) => {
      alert('비밀번호가 변경되었습니다. 다시 로그인해주세요.');
      window.location.href = Route.HOME;
      state.loading = false;
    });
    builder.addCase(
      postResetPassword.rejected,
      (state: { loading: boolean; error: any }, action: { error: { message: null } }) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      }
    );
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
  setAccountEmoji,
  setAccountHateEmoji,
  setAccountInterests,
  setAccountHateInterests,
  setAccountIntroduction,
  addAccountPhotos,
  setAccountSimiller,
  removeAccountPhotos
} = accountSlice.actions;
export const extraReducers = accountSlice.reducer;

export default accountSlice.reducer;
