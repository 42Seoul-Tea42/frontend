import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserProfileInquirySet } from '../interface';
import axiosInstance from '../../api/axios';
import { Fancy } from '../interface/enum';

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
      interests: [],
      rating: 0,
      sexualPreference: '',
      introduction: ''
    },
    another: {
      fancy: Fancy.NONE,
      distance: 0
    },
    ageGender: {
      age: 0,
      gender: ''
    },
    photo: {
      photos: []
    }
  },
  selectedUserId: 0,
  profileModalVisible: false,
  loading: false,
  error: null
};

export const getProfileDetail = createAsyncThunk('profileInquirySlice/getProfileDetail', async (userId: string) => {
  const response = await axiosInstance.get(`/user/profile-detail?id=${userId}`);
  return response.data;
});

// 유저 신고
export const reportUser = createAsyncThunk('profileInquirySlice/reportUser', async (userId: string) => {
  const response = await axiosInstance.post(`/user/report`, {
    target_id: userId,
    reason: 0,
    reason_opt: '그런건 없음'
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
    builder.addCase(getProfileDetail.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProfileDetail.fulfilled, (state, action: PayloadAction<UserProfileInquirySet>) => {
      state.user = action.payload;
    });
    builder.addCase(getProfileDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    builder.addCase(reportUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(reportUser.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(reportUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const { setProfileModalVisible, setSelectedUserId } = profileInquirySlice.actions;
export const extraReducers = profileInquirySlice.reducer;

export default profileInquirySlice.reducer;
