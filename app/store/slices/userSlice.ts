import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  gender: string;
  sexualPreference: string;
  introduce: string;
  selectedTags: number[];
}

const initialState: UserState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
  birthDate: '',
  gender: '',
  sexualPreference: '',
  introduce: '',
  selectedTags: []
};

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    setFirstname: (state: UserState, action: { payload: string }) => {
      state.firstname = action.payload;
    },
    setLastname: (state: UserState, action: { payload: string }) => {
      state.lastname = action.payload;
    },
    setEmail: (state: UserState, action: { payload: string }) => {
      state.email = action.payload;
    },
    setPassword: (state: UserState, action: { payload: string }) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state: UserState, action: { payload: string }) => {
      state.confirmPassword = action.payload;
    },
    setBirthDate: (state: UserState, action: { payload: string }) => {
      state.birthDate = action.payload;
    },
    setGender: (state: UserState, action: { payload: string }) => {
      state.gender = action.payload;
    },
    setSexualPreference: (state: UserState, action: { payload: string }) => {
      state.sexualPreference = action.payload;
    },
    setIntroduce: (state: UserState, action: { payload: string }) => {
      state.introduce = action.payload;
    },
    addSelectedTags: (state: { selectedTags: number[] }, action: { payload: number }) => {
      state.selectedTags = [...state.selectedTags, action.payload];
      console.table(state.selectedTags);
    },
    removeSelectedTags: (state: { selectedTags: number[] }, action: { payload: number }) => {
      state.selectedTags = state.selectedTags.filter(tag => tag !== action.payload);
    }
  }
});

export const { addSelectedTags, removeSelectedTags } = UserSlice.actions;

export default UserSlice.reducer;
