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
        console.log(response.data.data.reservationList);
        // thunkAPI.dispatch(reservationList(response.data.data.reservationList));
        return response.data.data.reservationList;
      })
      .catch((error) => {
        console.log({ error });
      });
  }
);

export interface userDataList {
  // userInfo: [
  //   {
  //     email: string;
  //     name: string;
  //     birthday: string;
  //     gender: string;
  //     profileImage: string;
  //     totalPaymentAmount: number;
  //   }
  // ];
  userInfo: Array<object>;
  reservationList: Array<object>;
  cancelNum: number;
  cancelReason: Array<object>;
  // cancle: [
  //   {
  //     cancelReason: string;
  //     cancelReasonDetail: string;
  //   }
  // ];
}

const initialState: userDataList = {
  // userInfo: [
  //   {
  //     email: '',
  //     name: '',
  //     birthday: '',
  //     gender: '',
  //     profileImage: '',
  //     totalPaymentAmount: 0,
  //   },
  // ],
  userInfo: [],
  reservationList: [],
  cancelNum: 0,
  cancelReason: [],
  // cancle: [
  //   {
  //     cancelReason: '',
  //     cancelReasonDetail: '',
  //   },
  // ],
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // email: (state, action: PayloadAction<string>) => {
    //   state.userInfo[0].email = action.payload;
    //   // console.log('이메일:' + state.userInfo[0].email);
    // },
    // name: (state, action: PayloadAction<string>) => {
    //   state.userInfo[0].name = action.payload;
    // },
    // birthday: (state, action: PayloadAction<string>) => {
    //   state.userInfo[0].birthday = action.payload;
    // },
    // gender: (state, action: PayloadAction<string>) => {
    //   state.userInfo[0].gender = action.payload;
    // },
    // profileImage: (state, action: PayloadAction<string>) => {
    //   state.userInfo[0].profileImage = action.payload;
    // },
    // totalPaymentAmount: (state, action: PayloadAction<number>) => {
    //   state.userInfo[0].totalPaymentAmount = action.payload;
    // },
    userInfo: (state, action: PayloadAction<Array<object>>) => {
      state.userInfo = action.payload;
    },
    reservationList: (state, action: PayloadAction<Array<object>>) => {
      state.reservationList = action.payload;
    },
    cancelNum: (state, action: PayloadAction<number>) => {
      state.cancelNum = action.payload;
    },
    cancelReason: (state, action: PayloadAction<Array<object>>) => {
      state.cancelReason = action.payload;
    },
    // cancelReason: (state, action: PayloadAction<string>) => {
    //   state.cancle[0].cancelReason = action.payload;
    //   console.log(state.cancle[0].cancelReason);
    // },
    // cancelReasonDetail: (state, action: PayloadAction<string>) => {
    //   state.cancle[0].cancelReasonDetail = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.reservationList = action.payload;
    });
  },
});

export const {
  // email,
  // name,
  // birthday,
  // gender,
  // profileImage,
  // totalPaymentAmount,
  userInfo,
  reservationList,
  cancelNum,
  cancelReason,
  // cancelReasonDetail,
} = userDataSlice.actions;
// export const userDataEmail = (state: RootState) =>
//   state.userData.userInfo[0].email;
// export const userDataName = (state: RootState) =>
//   state.userData.userInfo[0].name;
// export const userDataBirthday = (state: RootState) =>
//   state.userData.userInfo[0].birthday;
// export const userDataGender = (state: RootState) =>
//   state.userData.userInfo[0].gender;
// export const userDataImage = (state: RootState) =>
//   state.userData.userInfo[0].profileImage;
// export const userTotalPaymentAmount = (state: RootState) =>
//   state.userData.userInfo[0].totalPaymentAmount;
export const userUserInfo = (state: RootState) => state.userData.userInfo;
export const userReservationList = (state: RootState) =>
  state.userData.reservationList;
export const userCancelNum = (state: RootState) => state.userData.cancelNum;
export const userCancelReason = (state: RootState) =>
  state.userData.cancelReason;
// export const userCancelReasonDetail = (state: RootState) =>
//   state.userData.cancle[0].cancelReasonDetail;
export default userDataSlice.reducer;
