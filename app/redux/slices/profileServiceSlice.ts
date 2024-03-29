import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Profile {
  id: number;
  name: string;
  last_name: string;
  distance: number;
  fancy: number;
  birthday: string;
  fame: number;
  tags: number[];
}

interface ProfileServiceState {
  profiles: Profile[];
}

const initialState: ProfileServiceState = {
  profiles: []
};

const profileServiceSlice = createSlice({
  name: 'profileServiceSlice',
  initialState,
  reducers: {
    setProfiles: (state: { profiles: Profile[] }, actions: PayloadAction<Profile[]>) => {
      state.profiles = actions.payload;
    }
  }
});

export const { setProfiles } = profileServiceSlice.actions;

export default profileServiceSlice.reducer;
