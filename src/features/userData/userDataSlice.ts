import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface userDataList {
  userInfo: Array<object>;
  reservationList: Array<object>;
  cancelNum: number;
}

const initialState: userDataList = {
  userInfo: [],
  reservationList: [],
  cancelNum: 0,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    userInfo: (state, action: PayloadAction<Array<object>>) => {
      state.userInfo = action.payload;
    },
    reservationList: (state, action: PayloadAction<Array<object>>) => {
      state.reservationList = action.payload;
    },
    cancelNum: (state, action: PayloadAction<number>) => {
      state.cancelNum = action.payload;
    },
  },
});

export const { userInfo, reservationList, cancelNum } = userDataSlice.actions;
export const userUserInfo = (state: RootState) => state.userData.userInfo;
export const userReservationList = (state: RootState) =>
  state.userData.reservationList;
export const userCancelNum = (state: RootState) => state.userData.cancelNum;
export default userDataSlice.reducer;
