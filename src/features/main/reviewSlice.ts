import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface getReviewState {
  getReview: [];
}

const initialState: getReviewState = {
  getReview: [],
};

export const reviewSlice = createSlice({
  name: 'reviewData',
  initialState,
  reducers: {
    getReviewData: (state, action: PayloadAction<any>) => {
      state.getReview = action.payload;
    },
  },
});

export const { getReviewData } = reviewSlice.actions;

export const reviewData = (state: RootState) => state.reviewData.getReview;

export default reviewSlice.reducer;
