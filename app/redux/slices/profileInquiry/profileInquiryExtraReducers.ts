import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileInquiryState } from './profileInquirySlice';
import axiosInstance from '@/api/axios';
import { serverToClientMapper } from '@/redux/dto/mapper';

// 유저 프로필 상세 조회 -----------------------------------------------------
export const getProfileDetail = createAsyncThunk('profileInquirySlice/getProfileDetail', async (userId: string) => {
  const response = await axiosInstance.get(`/user/profile-detail?id=${userId}`);
  return serverToClientMapper(response.data);
});

const addGetProfileDetailCase = (builder: ActionReducerMapBuilder<ProfileInquiryState>) => {
  builder.addCase(getProfileDetail.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getProfileDetail.fulfilled, (state, action: PayloadAction<any>) => {
    state.user = { ...state.user, ...action.payload };
    state.loading = false;
  });
  builder.addCase(getProfileDetail.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// 유저 신고 -----------------------------------------------------
export const reportUser = createAsyncThunk(
  'profileInquirySlice/reportUser',
  async ({ userId, reason }: { userId: number; reason: string }) => {
    const response = await axiosInstance.post('/user/report', {
      target_id: userId,
      reason: 9,
      reason_opt: reason
    });
    return response.data;
  }
);

const addReportUserCase = (builder: ActionReducerMapBuilder<ProfileInquiryState>) => {
  builder.addCase(reportUser.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(reportUser.fulfilled, (state, action) => {
    state.loading = false;
    alert('신고가 완료되었습니다.');
  });
  builder.addCase(reportUser.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// 유저 차단 -----------------------------------------------------
export const blockUser = createAsyncThunk('profileInquirySlice/blockUser', async (userId: number) => {
  const response = await axiosInstance.post('/user/block', {
    target_id: userId
  });
  return response.data;
});

const addBlockUserCase = (builder: ActionReducerMapBuilder<ProfileInquiryState>) => {
  builder.addCase(blockUser.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(blockUser.fulfilled, (state, action) => {
    alert('차단했습니다.');
    state.loading = false;
  });
  builder.addCase(blockUser.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message ?? null;
  });
};

// extra reducers 추가 -----------------------------------------------------
export const addProfileInquiryExtraReducers = (builder: ActionReducerMapBuilder<ProfileInquiryState>) => {
  addGetProfileDetailCase(builder);
  addReportUserCase(builder);
  addBlockUserCase(builder);
};
