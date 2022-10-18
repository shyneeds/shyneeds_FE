import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface getProductState {
  getGroupProduct: [];
  getRegionProduct: [];
  getThemeProduct: [];
}

const initialState: getProductState = {
  getGroupProduct: [],
  getRegionProduct: [],
  getThemeProduct: [],
};

export const productSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    getGroupProductData: (state, action: PayloadAction<any>) => {
      state.getGroupProduct = action.payload;
    },
    getRegionProductData: (state, action: PayloadAction<any>) => {
      state.getRegionProduct = action.payload;
    },
    getThemeProductData: (state, action: PayloadAction<any>) => {
      state.getThemeProduct = action.payload;
    },
  },
});

export const {
  getGroupProductData,
  getRegionProductData,
  getThemeProductData,
} = productSlice.actions;

export const groupData = (state: RootState) => state.groupData.getGroupProduct;
export const regionData = (state: RootState) =>
  state.regionData.getRegionProduct;
export const themeData = (state: RootState) => state.themeData.getThemeProduct;

export default productSlice.reducer;
