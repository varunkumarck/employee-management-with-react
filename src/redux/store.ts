import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../components/User/userSlice';

import employeeReducer from '../components/Employee/employeeSlice';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
