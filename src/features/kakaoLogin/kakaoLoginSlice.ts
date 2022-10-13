import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';
import { REDIRECT_URL } from '../../constants/KAKAO_AUTH_URL';

// export const TOKEN_TIME_OUT = 600*1000;
export const KakaoLoginAsync = createAsyncThunk(
  'GET_ACCESS_CODE',
  async (AccessCode: string) => {
    console.log("돌아가니?")
    await axios({
      url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${REDIRECT_URL}&code=${AccessCode}`,
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      console.log(res);
    });
  }
);

export interface LoginState {
  kakaoToken: string;
  userToken: string;
  expireTime: number;
  authenticated: boolean;
}

const initialState: LoginState = {
  kakaoToken: '',
  userToken: '',
  expireTime: 0,
  authenticated: false,
};

export const KakaoLoginSlice = createSlice({
  name: 'kakaoLogin',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    kakaoToken: (state, action: PayloadAction<string>) => {
      //추후 삭제 예정 굳이 가지고 있을 필요 없을듯
      state.kakaoToken = action.payload;
      console.log(state.kakaoToken);
    },
    userLogin: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload; // 백엔드에서 발급받은 토큰
      // state.expireTime = new Date().getTime() + TOKEN_TIME_OUT; // 만료시간 설정
      state.authenticated = true; // 로그인 상태 확인
      sessionStorage.setItem('accessToken', state.userToken); // 세션에 저장
      console.log(state.userToken);
    },
    userLogout: (state, action: PayloadAction<boolean>) => {
      state.authenticated = false;
      sessionStorage.removeItem('accessToken');
    },
  },
  extraReducers: {
    [(KakaoLoginAsync.pending as any)]: (state, action) => {
      console.log("pending");
    },
    [(KakaoLoginAsync.fulfilled as any)]: (state, action) => {
      state.kakaoToken = action.payload;
      console.log(state.kakaoToken);
    },
    [(KakaoLoginAsync.rejected as any)]: (state, action) => {
      console.log("rejected");
    },
  },
});

export const { kakaoToken, userLogin, userLogout } = KakaoLoginSlice.actions;
export const loginToken = (state: RootState) => state.kakaoLogin.kakaoToken;
export const authenticated = (state: RootState) =>
  state.kakaoLogin.authenticated;

export default KakaoLoginSlice.reducer;
