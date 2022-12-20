import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface reservationPackageType {
  optionFlg: boolean | null;
  optionValue: string | null;
  price: string;
  quantity: number;
  optionTitle: string | null;
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
  productNum: number;
  peopleNum: number;
  pageIds: (string | null)[];
  reservationProducts: reservationProductType[];
  reservationPayInfos: reservationProductType[];
}

const initialState: userReservationInfo = {
  num: 0,
  productNum: 0,
  peopleNum: 0,
  pageIds: [],
  reservationProducts: [],
  reservationPayInfos: [],
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
    reservationPayInfo: (state, action: PayloadAction<number>) => {
      if (action.payload === -1) {
        state.reservationPayInfos = state.reservationPayInfos.concat(
          state.reservationProducts[state.reservationProducts.length - 1]
        );
      } else {
        state.reservationPayInfos = state.reservationPayInfos.concat(
          state.reservationProducts[action.payload]
        );
      }
      state.productNum += 1;
    },
    deleteReservationInfo: (state, action: PayloadAction<number>) => {
      state.reservationProducts.splice(action.payload, 1);
      state.num -= 1;
    },
    deleteClickedReservationInfo: (state, action: PayloadAction<number>) => {
      state.reservationPayInfos.map((reservationPayInfo, i) => {
        let flg = false;
        reservationPayInfo.reservationPackages.map((reservationPackage) => {
          if (reservationPackage.travelPackageId === action.payload) flg = true;
        });
        if (flg) {
          state.reservationPayInfos.splice(i, 1);
          state.productNum -= 1;
        }
      });
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
  reservationPayInfo,
  deleteReservationInfo,
  deleteClickedReservationInfo,
  plusNum,
  minusNum,
} = userReservationSlice.actions;

export const reservationProductNum = (state: RootState) =>
  state.userReservation.peopleNum;
export const reservationPackages = (state: RootState) =>
  state.userReservation.reservationProducts;
export const productIds = (state: RootState) => state.userReservation.pageIds;
export const reservationPayInfos = (state: RootState) =>
  state.userReservation.reservationPayInfos;
export default userReservationSlice.reducer;
