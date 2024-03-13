import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Fancy {
  NONE = 0,
  SEND = 1,
  RECV = 2,
  CONN = 3
}

export interface ProfileDto {
  // 이미지는 추후에 따로 처리
  picture: string[];
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

export interface Profiles {
  profileDto: ProfileDto;
  profileDetailDto: ProfileDetailDto;
}

interface UserProfileState {
  profiles: Profiles[];
  currentUserIndex: number;
}

const initialState: UserProfileState = {
  profiles: [],
  currentUserIndex: 0
};

const userProfileSlice = createSlice({
  name: 'userProfileSlice',
  initialState,
  reducers: {
    updateProfileDto: (
      state: UserProfileState,
      action: PayloadAction<{
        index: number;
        profileDto: ProfileDto;
      }>
    ) => {
      console.table(action.payload);
      const { index, profileDto } = action.payload;
    },
    removeProfileFirst: (state: UserProfileState) => {
      state.profiles = state.profiles.slice(1);
    },
    updateProfileDetailDto: (
      state: UserProfileState,
      action: PayloadAction<{ index: number; profileDetailDto: ProfileDetailDto }>
    ) => {
      const { profileDetailDto } = action.payload;
      state.profiles[0].profileDetailDto = profileDetailDto;
    }
  }
});

export const { updateProfileDto, updateProfileDetailDto } = userProfileSlice.actions;

export default userProfileSlice.reducer;
