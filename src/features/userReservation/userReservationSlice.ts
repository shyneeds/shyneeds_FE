import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import { RootState } from '../../app/store';

export interface reservationPackageType {
  optionFlg: boolean;
  optionValue: string;
  price: string;
  quantity: number;
  optionTitle: string;
  travelPackageId: number;
}
export interface reservationProductType {
  mainImage: string;
  productTitle: string;
  totalPrice: string;
  productNum: number;
  reservationPackages: reservationPackageType[];
}
export interface userReservationInfo {
  num: number;
  peopleNum: number;
  pageIds: (string | null)[];
  reservationProducts: reservationProductType[];
}

const initialState: userReservationInfo = {
  num: 0,
  peopleNum: 0,
  pageIds: [],
  reservationProducts: [],
};

export const userReservationSlice = createSlice({
  name: 'userReservation',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addProduct: (state) => {
      state.reservationProducts.push({
        mainImage: '',
        productTitle: '',
        totalPrice: '',
        productNum: 0,
        reservationPackages: [],
      });
    },
    setProductIds: (state, action: PayloadAction<string | null>) => {
      if (!state.pageIds.includes(action.payload)) {
        if (state.pageIds.length > 1) {
          state.pageIds = state.pageIds.reverse();
          state.pageIds.pop();
          state.pageIds.push(action.payload);
        } else state.pageIds.push(action.payload);
      }
    },
    setProductImage: (state, action: PayloadAction<string>) => {
      state.reservationProducts[state.num].mainImage = action.payload;
    },
    setProductTitle: (state, action: PayloadAction<string>) => {
      state.reservationProducts[state.num].productTitle = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<string>) => {
      state.reservationProducts[state.num].totalPrice = action.payload;
    },
    reservationInfo: (
      state,
      action: PayloadAction<reservationPackageType[]>
    ) => {
      state.reservationProducts[state.num].reservationPackages = action.payload;
      state.reservationProducts[state.num].reservationPackages.map(
        (reservationPackage) => (reservationPackage.quantity = state.peopleNum)
      );
      state.reservationProducts[state.num].productNum = state.peopleNum;
      state.peopleNum = 0;
      state.num += 1;
    },
    deleteReservationInfo: (state, action: PayloadAction<number>) => {
      state.reservationProducts.splice(action.payload, 1);
      state.num -= 1;
    },
    plusNum: (state) => {
      state.peopleNum += 1;
    },
    minusNum: (state) => {
      state.peopleNum -= 1;
    },
  },
});

export const {
  addProduct,
  setProductIds,
  setProductImage,
  setProductTitle,
  setTotalPrice,
  reservationInfo,
  deleteReservationInfo,
  plusNum,
  minusNum,
} = userReservationSlice.actions;

export const reservationProductNum = (state: RootState) =>
  state.userReservation.peopleNum;
export const reservationPackages = (state: RootState) =>
  state.userReservation.reservationProducts;
export default userReservationSlice.reducer;
