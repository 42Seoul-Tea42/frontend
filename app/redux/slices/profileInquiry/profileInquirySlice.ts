import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addProfileInquiryExtraReducers } from './profileInquiryExtraReducers';

export interface ProfileInquiryState {
  user: any;
  profileModalVisible: boolean;
  loading: boolean;
  error: string | null;
  isReportView: boolean;
}

export const initialState: ProfileInquiryState = {
  user: {},
  profileModalVisible: false,
  isReportView: true,
  loading: false,
  error: null
};

const profileInquirySlice = createSlice({
  name: 'profileInquirySlice',
  initialState,
  reducers: {
    setProfileModalVisible: (state, action: PayloadAction<boolean>) => {
      state.profileModalVisible = action.payload;
    },
    setProfileInquiryUser: (state, action: PayloadAction<any>) => {
      state.user = { ...state.user, ...action.payload };
    },
    setReportView(state, action: PayloadAction<boolean>) {
      state.isReportView = action.payload;
    }
  },
  extraReducers: builder => {
    addProfileInquiryExtraReducers(builder);
  }
});

export const { setReportView, setProfileInquiryUser, setProfileModalVisible } = profileInquirySlice.actions;

export const extraReducers = profileInquirySlice.reducer;

export default profileInquirySlice.reducer;
