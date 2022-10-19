import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface pageState {
  testData: [];
  total : number;
  page : number;
  blockNum : number;
}

const initialState: pageState = {
  testData: [],
  total : 351, // 추후 api 받아와서 Update 하면됨
  page : 1,
  blockNum : 0,
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
    nextPage : (state,action : PayloadAction<any>)=>{
      const totalPageNum  = Math.ceil(state.total/12);
      if(state.page >= totalPageNum) return;
      if(10*(state.blockNum+1)< (state.page+1) ){
        state.blockNum+=1;
      }
      state.page +=1;
    },
    prevPage: (state, action: PayloadAction<any>) => {
      if(state.page <= 1 ) return;
      if((state.page-1) <= (10*state.blockNum) ){
        state.blockNum-=1;
      }
      state.page -=1;
    },
  },
});

export const { getTotal,setPage,nextPage,prevPage} = page.actions;
export const totalData = (state: RootState) => state.page.total;
export const pageNum = (state: RootState) => state.page.page;
export const blockNum = (state:RootState) => state.page.blockNum;

export default page.reducer;
