import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import { RootState } from '../../app/store';

export interface adminInfo {
  clickedIds: number[];
}

const initialState: adminInfo = {
  clickedIds: [],
};

export const adminPageSlice = createSlice({
  name: 'adminPage',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    clickId: (state, action: PayloadAction<number>) => {
      if (!state.clickedIds.includes(action.payload))
        state.clickedIds.push(action.payload);
    },
    unclickId: (state, action: PayloadAction<number>) => {
      state.clickedIds = state.clickedIds.filter(
        (clickedId) => clickedId !== action.payload
      );
    },
  },
});

export const { clickId, unclickId } = adminPageSlice.actions;
export const clickedIds = (state: RootState) => state.adminPage.clickedIds;
export default adminPageSlice.reducer;
