import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface getRegionProductState {
  getRegionProduct: [];
}

const initialState: getRegionProductState = {
  getRegionProduct: [],
};

export const regionProductSlice = createSlice({
  name: 'regionData',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getRegionProductData: (state, action: PayloadAction<any>) => {
      state.getRegionProduct = action.payload;
      console.log(action.payload);
    },
  },
});

export const { getRegionProductData } = regionProductSlice.actions;
export const regionData = (state: RootState) =>
  state.regionData.getRegionProduct;

export default regionProductSlice.reducer;
