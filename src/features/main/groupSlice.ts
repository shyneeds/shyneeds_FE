import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface getGroupProductState {
  getGroupProduct: [];
}

const initialState: getGroupProductState = {
  getGroupProduct: [],
};

export const groupProductSlice = createSlice({
  name: 'groupData',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getGroupProductData: (state, action: PayloadAction<any>) => {
      state.getGroupProduct = action.payload;
      // console.log(action.payload);
    },
  },
});

export const { getGroupProductData } = groupProductSlice.actions;
export const groupData = (state: RootState) => state.groupData.getGroupProduct;

export default groupProductSlice.reducer;
