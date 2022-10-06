import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import { RootState } from '../../app/store';

export interface LoginState {
  id: string;
  pw: string;
  status: 'successed' | 'failed';
  userList:{
    id:string;
    pw:string;
  }
}

const initialState: LoginState = {
  id: "",
  pw: "",
  status: 'failed',
  userList: {
    id:"jim1286",
    pw:"1234"
  }
};

export const adminLoginSlice = createSlice({
  name: 'adminLogin',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    userId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    userPw: (state, action: PayloadAction<string>) => {
      state.pw = action.payload;
    },
    userLogin: (state) => {
      if(state.userList.id === state.id && state.userList.pw === state.pw) state.status = "successed"
      else{ state.status = "failed"}
    }
  },
});

export const { userId,userPw,userLogin } = adminLoginSlice.actions;
export const loginStatus = (state: RootState) => state.adminLogin.status;

export default adminLoginSlice.reducer;
