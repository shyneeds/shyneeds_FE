import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import kakaoLoginSliceReducer from '../features/kakaoLogin/kakaoLoginSlice';
import userReservationSliceReducer from '../features/userReservation/userReservationSlice';
import regionProductReducer from '../features/main/regionSlice';
import themeProductReducer from '../features/main/themeSlice';
import groupProductReducer from '../features/main/groupSlice';
import userDataSliceReducer from '../features/userData/userDataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kakaoLogin: kakaoLoginSliceReducer,
    userReservation: userReservationSliceReducer,
    regionData: regionProductReducer,
    themeData: themeProductReducer,
    groupData: groupProductReducer,
    userData: userDataSliceReducer,
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
