import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

export enum Fancy {
  NONE = 0,
  SEND = 1,
  RECV = 2,
  CONN = 3
}

export interface ProfileDto {
  picture: string[];
  id: number;
  login_id: string;
  name: string;
  birthday: string;
  distance: number;
  fame: number;
  tags: [number];
  fancy: number;
}

interface UserProfileState {
  profiles: ProfileDto[];
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
    setCurrentUserIndex: (state: UserProfileState, action: PayloadAction<number>) => {
      state.currentUserIndex = action.payload;
    },
    addUserProfile: (state: UserProfileState, action: PayloadAction<ProfileDto[]>) => {
      state.profiles = state.profiles.concat(action.payload);
      console.table(state.profiles);
    },
    removeUserProfile: (state: UserProfileState, action: PayloadAction<number>) => {
      state.profiles = state.profiles.filter((_, index) => index !== action.payload);
      state.currentUserIndex -= 1;
    }
  }
});

export const { addUserProfile, removeUserProfile, setCurrentUserIndex } = userProfileSlice.actions;

export default userProfileSlice.reducer;

// profile: json
// {
// picture: [str]

// id: int
// login_id: str
// name: stDate
// birthday: date
// * longitude: nmbaer
// * latitude: float
// fame: float
// tags: [int]
// fancy: int (Enum)
// }
