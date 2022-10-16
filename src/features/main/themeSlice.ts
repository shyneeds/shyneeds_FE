import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface getThemeProductState {
  getThemeProduct: [];
}

const initialState: getThemeProductState = {
  getThemeProduct: [],
};

export const themeProductSlice = createSlice({
  name: 'themeData',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getThemeProductData: (state, action: PayloadAction<any>) => {
      state.getThemeProduct = action.payload;
      console.log(action.payload);
    },
  },
});

export const { getThemeProductData } = themeProductSlice.actions;
export const themeData = (state: RootState) => state.themeData.getThemeProduct;

export default themeProductSlice.reducer;
