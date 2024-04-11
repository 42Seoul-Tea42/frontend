import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserData {
  // jwt
  accessToken: string;
  refreshToken: string;
  // user
  id: number;
  name: string;
  birthday: string;
  //signup step
  emailCheck: boolean;
  profileCheck: boolean;
  emojiCheck: boolean;
  oauth: boolean;
}

const initialState = {
  accessToken: 'asdfasdf',
  refreshToken: 'asdfasdf',

  id: 0,
  name: '',
  birthday: new Date().toISOString(),

  emailCheck: false,
  profileCheck: false,
  emojiCheck: false,
  oauth: false
};

const userDataSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {
    setUserData: (state: UserData, action: PayloadAction<UserData>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.birthday = action.payload.birthday;
      state.emailCheck = action.payload.emailCheck;
      state.profileCheck = action.payload.profileCheck;
      state.emojiCheck = action.payload.emojiCheck;
      state.oauth = action.payload.oauth;
    }
  }
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
