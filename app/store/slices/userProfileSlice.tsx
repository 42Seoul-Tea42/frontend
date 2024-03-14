import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Fancy {
  NONE = 0,
  SEND = 1,
  RECV = 2,
  CONN = 3
}

export interface ProfileDto {
  // 이미지는 추후에 따로 처리
  id: number;
  firstname: string;
  lastname: string;
  distance: number;
}

export interface ProfileDetailDto {
  login_id: string;
  birthday: string;
  distance: number;
  fame: number;
  tags: number[];
  fancy: number;
}

interface UserProfileState {
  picture: string;
  pictureDetail: string[];
  profiles: ProfileDto[];
  profileDetail: ProfileDetailDto;
  currentUserIndex: number;
}

const initialState: UserProfileState = {
  picture: '',
  pictureDetail: [],
  profiles: [],
  profileDetail: {} as ProfileDetailDto,
  currentUserIndex: 0
};

const userProfileSlice = createSlice({
  name: 'userProfileSlice',
  initialState,
  reducers: {
    setCurrentUserIndex: (state: UserProfileState, action: PayloadAction<number>) => {
      if (action.payload < 0) return;
      state.currentUserIndex = action.payload;
    },
    setProfiles: (state: UserProfileState, action: PayloadAction<ProfileDto[]>) => {
      state.profiles = [...state.profiles, ...action.payload];
    },
    setPicture: (state: UserProfileState, action: PayloadAction<string>) => {
      state.picture = action.payload;
    },
    setPictureDetail: (state: UserProfileState, action: PayloadAction<string[]>) => {
      state.pictureDetail = action.payload;
    }
  }
});

export const { setPicture, setCurrentUserIndex, setProfiles } = userProfileSlice.actions;

export default userProfileSlice.reducer;
