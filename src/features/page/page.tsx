import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface pageState {
  testData: [];
  total : number;
  page : number;
}

const initialState: pageState = {
  testData: [],
  total : 321, // 추후 api 받아와서 Update 하면됨
  page : 1,
};

export const page = createSlice({
  name: 'page',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getTotal : (state, action : PayloadAction<any>)=>{
      state.total = action.payload;
    },
    setPage : (state,action : PayloadAction<number>)=>{
      state.page = action.payload;
      console.log("page : " +state.page)
    },
    responseTest: (state, action: PayloadAction<any>) => {
      state.testData = action.payload;
      console.log(action.payload)
    },
  },
});

export const { getTotal,setPage, } = page.actions;
export const totalData = (state: RootState) => state.page.total;
export const pageNum = (state: RootState) => state.page.page;


export default page.reducer;
