import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import { RootState } from '../../app/store';
import { packageOptionRequestDtoListType } from '../../components/common/Product_Type';

export interface adminInfo {
  clickedIds: number[];
  options: packageOptionRequestDtoListType[];
}
const initialState: adminInfo = {
  clickedIds: [],
  options: [],
};

export const adminPageSlice = createSlice({
  name: 'adminPage',
  initialState,
  reducers: {
    clickId: (state, action: PayloadAction<number>) => {
      if (!state.clickedIds.includes(action.payload))
        state.clickedIds.push(action.payload);
    },
    unclickId: (state, action: PayloadAction<number>) => {
      state.clickedIds = state.clickedIds.filter(
        (clickedId) => clickedId !== action.payload
      );
    },
    productOption: (
      state,
      action: PayloadAction<packageOptionRequestDtoListType>
    ) => {
      if (
        action.payload.title !== '' &&
        action.payload.optionValue !== '' &&
        action.payload.price !== ''
      )
        state.options.push(action.payload);
    },
    deleteOption: (state, action: PayloadAction<string>) => {
      state.options = state.options.filter(
        (option) => option.title !== action.payload
      );
    },
  },
});

export const { clickId, unclickId, productOption, deleteOption } =
  adminPageSlice.actions;
export const clickedIds = (state: RootState) => state.adminPage.clickedIds;
export const options = (state: RootState) => state.adminPage.options;

export default adminPageSlice.reducer;
