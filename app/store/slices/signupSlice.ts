import { createSlice } from '@reduxjs/toolkit';
export const TagType = Object.freeze({
  SPORTS: 1 << 0,
  TRAVEL: 1 << 1,
  FOOD: 1 << 2,
  GAME: 1 << 3,
  BOOK: 1 << 4,
  'IT / SCIENCE': 1 << 5,
  VIDEO: 1 << 6,
  LANGUE: 1 << 7,
  FASHION: 1 << 8,
  PETS: 1 << 9,
  ART: 1 << 10,
  SMOKE: 1 << 11,
  DRINK: 1 << 12
} as const);

export enum signupSteps {
  AccountInfo,
  PersonalInfo,
  ProfileUpload,
  EmojiInfo
}

interface signupState {
  currentStep: number;
  // profileImage: string;
  selectedTags: number[];
  EmojiInfo: number;
}

const initialState: signupState = {
  currentStep: signupSteps.AccountInfo,
  // profileImage: '',
  selectedTags: [],
  EmojiInfo: 0
};

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    setCurrentStep: (state: { currentStep: number }, action: { payload: number }) => {
      state.currentStep = action.payload;
    },
    addSelectedTags: (state: { selectedTags: number[] }, action: { payload: number }) => {
      state.selectedTags = [...state.selectedTags, action.payload];
    },
    removeSelectedTags: (state: { selectedTags: number[] }, action: { payload: number }) => {
      state.selectedTags = state.selectedTags.filter(tag => tag !== action.payload);
    }
  }
});
export const { setCurrentStep, addSelectedTags, removeSelectedTags } = signupSlice.actions;

export default signupSlice.reducer;
