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
      productPrice: number;
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
      productPrice: 0,
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
    },
    productPrice: (state, action: PayloadAction<number>) => {
      state.productInfo[0].productPrice = action.payload;
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

export const { productId, productPrice, plusNum, minusNum } =
  userReservationSlice.actions;
export const reservationProductId = (state: RootState) =>
  state.userReservation.productInfo[0].productName;
export const reservationProductPrice = (state: RootState) =>
  state.userReservation.productInfo[0].productPrice;
export const reservationProductNum = (state: RootState) =>
  state.userReservation.productInfo[0].peopleNum;
export default userReservationSlice.reducer;
