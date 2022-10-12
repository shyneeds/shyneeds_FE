import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import { RootState } from '../../app/store';

export interface userReservationInfo {
  num: number;
  productInfo: [
    {
      productId: number;
      productImg: string;
      productName: string;
      productPrice: string;
      peopleNum: number;
      userOption: string[];
    }
  ];
}

const initialState: userReservationInfo = {
  num: 0,
  productInfo: [
    {
      productId: 0,
      productImg: '',
      productName: '',
      productPrice: '',
      peopleNum: 0,
      userOption: [],
    },
  ],
};

export const userReservationSlice = createSlice({
  name: 'userReservation',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    productId: (state, action: PayloadAction<string>) => {
      state.productInfo[0].productName = action.payload;
      console.log(state.productInfo[0].productName);
    },
    plusNum: (state) => {
      state.productInfo[state.num].peopleNum += 1;
    },
    minusNum: (state) => {
      if (state.productInfo[state.num].peopleNum > 0)
        state.productInfo[state.num].peopleNum -= 1;
    },
  },
});

export const { productId, plusNum, minusNum } = userReservationSlice.actions;
export const reservationProductId = (state: RootState) =>
  state.userReservation.productInfo[0].productName;
export const reservationProductNum = (state: RootState) =>
  state.userReservation.productInfo[0].peopleNum;
export default userReservationSlice.reducer;
