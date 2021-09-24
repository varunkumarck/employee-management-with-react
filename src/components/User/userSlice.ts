import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

export interface User {
  id: string | null;
  name: string | null;
}

const initialState: User = {
  id: null,
  name: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.name= action.payload.name;
    },
    logout: (state) => {
      state.id = null
    }
  },
});

export const { login, logout } = userSlice.actions;

export const getLoginUserData = (state: RootState) => state.user;


export default userSlice.reducer;
