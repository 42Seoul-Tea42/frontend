import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Gender, InputLimitLength } from '../../enum';
import { updateLikeList } from './updateLikeList';
import _ from 'lodash';
import { addAccountExtraReducers } from './accountExtraReducers';

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
    pictures: Array.from({ length: InputLimitLength.PHOTO_COUNT }, () => ''),
    interests: [],
    hateInterests: [],
    emoji: [],
    hateEmoji: [],
    similar: true
  },
  password: '',
  reEnterPassword: '',
  viewMail: '',
  loading: false,
  error: ''
};

const accountSlice = createSlice({
  name: 'accountSlice',
  initialState,
  reducers: {
    setAccountLoginId: (state: AccountState, action: PayloadAction<string>) => {
      state.user.loginId = action.payload;
      localStorage.setItem('id', action.payload);
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
    addAccountPhotosWithIndex: (state: AccountState, action: PayloadAction<{ index: number; photo: string }>) => {
      state.user.pictures[action.payload.index] = action.payload.photo;
    },
    removeAccountPhotos: (state: AccountState, action: PayloadAction<number>) => {
      state.user.pictures = state.user.pictures.filter((_: any, index: number) => index !== action.payload);
    },
    setAccountSimiller: (state: AccountState, action: PayloadAction<boolean>) => {
      state.user.similar = action.payload;
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
    addAccountExtraReducers(builder);
  }
});

export const {
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
  addAccountPhotosWithIndex,
  setAccountSimiller,
  removeAccountPhotos
} = accountSlice.actions;
export const extraReducers = accountSlice.reducer;

export default accountSlice.reducer;
