import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserProfileInquirySet } from '../interface';
import axiosInstance from '../../utils/axios';

interface ProfileInquiryState {
  user: UserProfileInquirySet;
  selectedUserId: number;
  profileModalVisible: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileInquiryState = {
  user: {
    identity: {
      id: 0,
      loginId: '',
      firstname: '',
      lastname: ''
    },
    profile: {
      subPhotos: [],
      interests: [],
      rating: 0,
      sexualPreference: '',
      introduction: ''
    },
    another: {
      fancy: false,
      distance: 0
    },
    ageGender: {
      age: 0,
      gender: ''
    },
    photo: {
      mainPhoto: ''
    }
  },
  selectedUserId: 0,
  profileModalVisible: false,
  loading: false,
  error: null
};

export const asyncUpdate = createAsyncThunk('homeSlice/asyncUpdate', async () => {
  const response = await axiosInstance('https://api.example.com/data', {
    method: 'POST'
    // body: JSON.stringify();
  });
  return response.data;
});

const profileInquirySlice = createSlice({
  name: 'profileInquirySlice',
  initialState,
  reducers: {
    setProfileModalVisible: (state, action: PayloadAction<boolean>) => {
      state.profileModalVisible = action.payload;
    },
    setSelectedUserId: (state, action: PayloadAction<number>) => {
      state.selectedUserId = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(asyncUpdate.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(asyncUpdate.fulfilled, (state, action: PayloadAction<UserProfileInquirySet>) => {
      state.user = action.payload;
    });
    builder.addCase(asyncUpdate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const { setProfileModalVisible, setSelectedUserId } = profileInquirySlice.actions;
export const extraReducers = profileInquirySlice.reducer;

export default profileInquirySlice.reducer;
