import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Cookies } from 'react-cookie';

// export const TOKEN_TIME_OUT = 600*1000;

export interface LoginState {
  kakaoToken: string;
  userToken : string;
  expireTime: number;
  authenticated : boolean
}

const initialState: LoginState = {
  kakaoToken: "",
  userToken : "",
  expireTime : 0,
  authenticated : false
};

export const KakaoLoginSlice = createSlice({
  name: 'kakaoLogin',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    kakaoToken: (state, action: PayloadAction<string>) => {
      state.kakaoToken = action.payload;
      console.log(state.kakaoToken)
    },
    userToken: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload; // 백엔드에서 발급받은 토큰 
      // state.expireTime = new Date().getTime() + TOKEN_TIME_OUT; // 만료시간 설정
      state.authenticated = true; // 로그인 상태 확인
      console.log(state.userToken)
    },
  },
});

export const { kakaoToken,userToken } = KakaoLoginSlice.actions;
export const loginToken = (state: RootState) => state.kakaoLogin.kakaoToken;
export const authenticated = (state: RootState) => state.kakaoLogin.authenticated;

export default KakaoLoginSlice.reducer;
