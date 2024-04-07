import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserPublicSet } from '../interface';
import axiosInstance from '../../utils/axios';

interface suggestionState {
  users: UserPublicSet[];
  loading: boolean;
  error: string | null;
}

const initialState: suggestionState = {
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
  extraReducers: (builder: any) => {
    builder.addCase(fetchSuggestionUsers.pending, (state: { loading: boolean; error: null }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchSuggestionUsers.fulfilled,
      (state: { users: UserPublicSet[] }, action: PayloadAction<UserPublicSet[]>) => {
        state.users = [...state.users, ...action.payload];
      }
    );
    builder.addCase(
      fetchSuggestionUsers.rejected,
      (state: { loading: boolean; error: any }, action: { error: { message: null } }) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      }
    );
  }
});

export const extraReducers = suggestionSlice.reducer;

export default suggestionSlice.reducer;
