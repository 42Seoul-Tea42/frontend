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

interface ProfileSliceState {
  profiles: Profile[];
}

const initialState: ProfileSliceState = {
  profiles: []
};

const profileSliceSlice = createSlice({
  name: 'profileSliceSlice',
  initialState,
  reducers: {
    setProfiles: (state: { profiles: Profile[] }, actions: PayloadAction<Profile[]>) => {
      state.profiles = actions.payload;
    }
  }
});

export const { setProfiles } = profileSliceSlice.actions;

export default profileSliceSlice.reducer;
