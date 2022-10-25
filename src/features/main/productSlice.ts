import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface getProductState {
  getGroupProduct: [];
  getRegionProduct: [];
  getThemeProduct: [];
  getExhibitionProduct: [];
}

const initialState: getProductState = {
  getGroupProduct: [],
  getRegionProduct: [],
  getThemeProduct: [],
  getExhibitionProduct: [],
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
    getExhibitionProductData: (state, action: PayloadAction<any>) => {
      state.getExhibitionProduct = action.payload;
    },
  },
});

export const {
  getGroupProductData,
  getRegionProductData,
  getThemeProductData,
  getExhibitionProductData,
} = productSlice.actions;

export const groupData = (state: RootState) => state.groupData.getGroupProduct;
export const regionData = (state: RootState) =>
  state.regionData.getRegionProduct;
export const themeData = (state: RootState) => state.themeData.getThemeProduct;
export const exhibitionData = (state: RootState) =>
  state.exhibitionData.getExhibitionProduct;

export default productSlice.reducer;
