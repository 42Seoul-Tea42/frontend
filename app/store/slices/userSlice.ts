import { createSlice } from '@reduxjs/toolkit';

export enum Reaction {
  Like = 'like',
  Dislike = 'dislike',
  None = 'none'
}

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
  introduction: string;
  selectedTags: number[];
  selectedReactions: Reaction[];
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
  introduction: '',
  selectedTags: [],
  dateOfBirth: undefined,
  selectedReactions: Array.from({ length: 16 }, () => Reaction.None)
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
    setIntrodution: (state: UserState, action: { payload: string }) => {
      state.introduction = action.payload;
      console.table(state.introduction);
    },
    addSelectedTags: (state: { selectedTags: number[] }, action: { payload: number }) => {
      state.selectedTags = [...state.selectedTags, action.payload];
      console.table(state.selectedTags);
    },
    removeSelectedTags: (state: { selectedTags: number[] }, action: { payload: number }) => {
      state.selectedTags = state.selectedTags.filter(tag => tag !== action.payload);
      console.table(state.selectedTags);
    },
    setReaction: (
      state: { selectedReactions: Reaction[] },
      action: { payload: { id: number } }
    ) => {
      switch (state.selectedReactions[action.payload.id]) {
        case Reaction.Like:
          state.selectedReactions[action.payload.id] = Reaction.Dislike;
          break;
        case Reaction.Dislike:
          state.selectedReactions[action.payload.id] = Reaction.None;
          break;
        case Reaction.None:
          state.selectedReactions[action.payload.id] = Reaction.Like;
          break;
      }
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
  setIntrodution,
  addSelectedTags,
  removeSelectedTags,
  setReaction
} = UserSlice.actions;

export default UserSlice.reducer;
