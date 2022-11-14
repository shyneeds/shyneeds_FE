import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { customAxios } from '../../lib/customAxios';

export const getUserData = createAsyncThunk(
  'GET_USER_DATA',
  async () => {
    return await customAxios
      .get('/my/user')
      .then((response) => {
        console.log(response)
        return response.data.data.reservationList;
      })
      .catch((error) => {
        console.log(error)
        return error;
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
      state.reservationList = action.payload
      // .map((data:any,i:number)=>{
      //   if(data.reservationStatus ==='예약확정'){return data.reservationPackage[0].title} 
      // });
      // console.log(action.payload)
    });
  },
});

export const { userInfo, reservationList, cancelNum } = userDataSlice.actions;
export const userUserInfo = (state: RootState) => state.userData.userInfo;
export const userReservationList = (state: RootState) =>
  state.userData.reservationList;
export const userCancelNum = (state: RootState) => state.userData.cancelNum;
export default userDataSlice.reducer;
