import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import adminLoginSliceReducer from '../features/adminLogin/adminLoginSlice';
import kakaoLoginSliceReducer from '../features/kakaoLogin/kakaoLoginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    adminLogin: adminLoginSliceReducer,
    kakaoLogin : kakaoLoginSliceReducer
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
