import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import kakaoLoginSliceReducer from '../features/kakaoLogin/kakaoLoginSlice';
import userReservationSliceReducer from '../features/userReservation/userReservationSlice';
import testSliceReducer from '../features/test/test';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kakaoLogin: kakaoLoginSliceReducer,
    userReservation: userReservationSliceReducer,
    testResponse : testSliceReducer
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
