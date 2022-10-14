import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface LoginState {
  testData: [];
}

const initialState: LoginState = {
  testData: [],
};

export const test = createSlice({
  name: 'testResponse',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    responseTest: (state, action: PayloadAction<any>) => {
      state.testData = action.payload;
      console.log(action.payload)
    },
  },
});

export const { responseTest } = test.actions;
export const testData1 = (state: RootState) => state.testResponse.testData;


export default test.reducer;
