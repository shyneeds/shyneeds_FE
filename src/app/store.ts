import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import kakaoLoginSliceReducer from '../features/kakaoLogin/kakaoLoginSlice';
import userReservationSliceReducer from '../features/userReservation/userReservationSlice';
import productReducer from '../features/main/productSlice';
import reviewReducer from '../features/main/reviewSlice';
import adminPageSliceReducer from '../features/adminPage/adminPageSlice';
import userDataSliceReducer from '../features/userData/userDataSlice';
import pageReducer from '../features/communityPage/communityPageSlice';
import { useDispatch } from 'react-redux';
import replySliceReducer from '../features/communityPage/replySlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  userReservationSliceReducer
);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kakaoLogin: kakaoLoginSliceReducer,
    userReservation: persistedReducer,
    regionData: productReducer,
    themeData: productReducer,
    groupData: productReducer,
    exhibitionData: productReducer,
    bannerData: productReducer,
    productId: productReducer,
    productIds: productReducer,
    reviewData: reviewReducer,
    adminPage: adminPageSliceReducer,
    userData: userDataSliceReducer,
    page: pageReducer,
    reply: replySliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const persistor = persistStore(store);
