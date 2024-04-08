import { PayloadAction, createAsyncThunk, createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UserPublicSet } from '../interface';
import axiosInstance from '../../utils/axios';

interface SuggestionState {
  users: UserPublicSet[];
  loading: boolean;
  error: string | null;
}

const initialState: SuggestionState = {
  users: [],
  loading: false,
  error: null
};

export const fetchSuggestionUsers = createAsyncThunk('suggestionSlice/fetchSuggestionUsers', async () => {
  const response = await axiosInstance.get('/tea');
  const users = response.data.map((user: any) => ({
    id: user.id,
    firstname: user.name,
    lastname: user.last_name,
    fancy: user.fancy,
    distance: user.distance,
    age: user.birthday,
    gender: user.gender
  }));
  // 한번에 이미지 여러장 받는 api 있는지 물어보기
  users.forEach(async (user: any) => {
    const photo = await axiosInstance.post('/user/getPicture', {
      target_id: user.id
    });
    users.mainPhoto = photo.data;
  });
  return users;
});

const suggestionSlice = createSlice({
  name: 'suggestionSlice',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<SuggestionState>) => {
    builder.addCase(fetchSuggestionUsers.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchSuggestionUsers.fulfilled,
      (state: { users: UserPublicSet[] }, action: PayloadAction<UserPublicSet[]>) => {
        // 6명 한번에 변경
        state.users = action.payload;
      }
    );
    builder.addCase(fetchSuggestionUsers.rejected, state => {
      state.loading = false;
      state.error = 'error';
    });
  }
});

export const extraReducers = suggestionSlice.reducer;

export default suggestionSlice.reducer;
