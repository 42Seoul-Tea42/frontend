import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  dateOfBirth: any;
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
  selectedTags: [],
  dateOfBirth: undefined
};

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    setFirstname: (state: UserState, action: { payload: string }) => {
      state.firstname = action.payload;
      console.table(state.firstname);
    },
    setLastname: (state: UserState, action: { payload: string }) => {
      state.lastname = action.payload;
      console.table(state.lastname);
    },
    setEmail: (state: UserState, action: { payload: string }) => {
      state.email = action.payload;
      console.table(state.email);
    },
    setPassword: (state: UserState, action: { payload: string }) => {
      state.password = action.payload;
      console.table(state.password);
    },
    setConfirmPassword: (state: UserState, action: { payload: string }) => {
      state.confirmPassword = action.payload;
      console.table(state.confirmPassword);
    },
    setBirthDate: (state: UserState, action: { payload: string }) => {
      state.birthDate = action.payload;
      console.table(state.birthDate);
    },
    setGender: (state: UserState, action: { payload: string }) => {
      state.gender = action.payload;
      console.table(state.gender);
    },
    setSexualPreference: (state: UserState, action: { payload: string }) => {
      state.sexualPreference = action.payload;
      console.table(state.sexualPreference);
    },
    setIntroduce: (state: UserState, action: { payload: string }) => {
      state.introduce = action.payload;
      console.table(state.introduce);
    },
    addSelectedTags: (state: { selectedTags: number[] }, action: { payload: number }) => {
      state.selectedTags = [...state.selectedTags, action.payload];
      console.table(state.selectedTags);
    },
    removeSelectedTags: (state: { selectedTags: number[] }, action: { payload: number }) => {
      state.selectedTags = state.selectedTags.filter(tag => tag !== action.payload);
      console.table(state.selectedTags);
    }
  }
});

export const {
  setFirstname,
  setLastname,
  setEmail,
  setPassword,
  setConfirmPassword,
  setBirthDate,
  setGender,
  setSexualPreference,
  setIntroduce,
  addSelectedTags,
  removeSelectedTags
} = UserSlice.actions;

export default UserSlice.reducer;
