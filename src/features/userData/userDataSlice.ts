import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface userDataList {
  userInfo: [
    {
      email: string;
      name: string;
      birthday: string;
      gender: string;
      profileImage: string;
    }
  ];
}

const initialState: userDataList = {
  userInfo: [
    {
      email: '',
      name: '',
      birthday: '',
      gender: '',
      profileImage: '',
    },
  ],
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    email: (state, action: PayloadAction<string>) => {
      state.userInfo[0].email = action.payload;
      // console.log('이메일:' + state.userInfo[0].email);
    },
    name: (state, action: PayloadAction<string>) => {
      state.userInfo[0].name = action.payload;
    },
  },
});

export const { email, name } = userDataSlice.actions;
export const userDataEmail = (state: RootState) =>
  state.userData.userInfo[0].email;
export const userDataName = (state: RootState) =>
  state.userData.userInfo[0].name;
export default userDataSlice.reducer;
