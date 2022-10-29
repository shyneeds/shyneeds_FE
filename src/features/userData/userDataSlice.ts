import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';

export const getUserData = createAsyncThunk(
  'GET_USER_DATA',
  async (token: string, thunkAPI) => {
    return await axios({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      url: `http://13.125.151.45:8080/api/my/user`,
      method: 'get',
    })
      .then((response) => {
        // console.log(response.data.data.reservationList);
        // thunkAPI.dispatch(reservationList(response.data.data.reservationList));
        return response.data.data.reservationList;
      })
      .catch((error) => {
        console.log({ error });
      });
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.reservationList = action.payload;
    });
  },
});

export const { userInfo, reservationList, cancelNum } = userDataSlice.actions;
export const userUserInfo = (state: RootState) => state.userData.userInfo;
export const userReservationList = (state: RootState) =>
  state.userData.reservationList;
export const userCancelNum = (state: RootState) => state.userData.cancelNum;
export default userDataSlice.reducer;
