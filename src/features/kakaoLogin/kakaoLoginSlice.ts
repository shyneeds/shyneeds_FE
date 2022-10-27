import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';
import { REDIRECT_URL } from '../../constants/KAKAO_AUTH_URL';
import { API_URL } from '../../constants/API_URL';
import session from 'redux-persist/lib/storage/session';

export const KakaoLoginAsync = createAsyncThunk(
  'GET_ACCESS_CODE',
  async (AccessCode: string, thunkAPI) => {
    return await axios({
      url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${REDIRECT_URL}&code=${AccessCode}`,
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      thunkAPI.dispatch(getServerToken(res.data.access_token));
    });
  }
);
export const getServerToken = createAsyncThunk(
  'GET_SEVER_ACCESS_CODE',
  async (KakaoToken: string, thunkAPI) => {
    return await axios({
      url: API_URL.POST.KAKAO_LOGIN,
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: KakaoToken,
      },
    }).then((res) => {
      const state: any = thunkAPI.getState();
      thunkAPI.dispatch(userLogin(res.data.data))
      return res.data.data;
    });
  }
);

export interface LoginState {
  kakaoToken: string;
  userToken: string;
  refreshToken: string;
  expireTime: number;
  authenticated: boolean;
  userId: number;
}

const initialState: LoginState = {
  kakaoToken: '',
  userToken: '',
  refreshToken: '',
  expireTime: 0,
  authenticated: false,
  userId: 0,
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
    userLogin: (state, { payload }) => {
      console.log('슬라이스 실행');
      console.log('이건 아직 넣기전 : '+state.userToken);
      const { accessToken, userId, refreshToken } = payload;
      console.log(payload);
      state.userId = userId;
      state.userToken = accessToken
      state.refreshToken = refreshToken;
      console.log('이건 넣은후 : '+state.userToken);
      sessionStorage.setItem('refreshToken', refreshToken);
      state.authenticated = true; // 로그인 상태 확인
    },
    userLogout: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
      sessionStorage.removeItem('refreshToken');
      sessionStorage.removeItem('userId');
    },
    isLogin: (state, { payload }) => {
      state.authenticated = true;
      // const { accessToken, userId, refreshToken } = payload;
      // state.userToken = accessToken; // 백엔드에서 발급받은 토큰
      // state.refreshToken = refreshToken;
      // state.userId = userId;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getServerToken.fulfilled, (state,{payload}) => {
      state.authenticated = true; // 로그인 상태 확인
      // const {refreshToken} = payload
      // sessionStorage.setItem('refreshToken', refreshToken);
      // state.userToken = accessToken;
    });
  },
});

export const { kakaoToken, userLogin, userLogout, isLogin } =
  KakaoLoginSlice.actions;
export const loginToken = (state: RootState) => state.kakaoLogin.kakaoToken;
export const authenticated = (state: RootState) =>
  state.kakaoLogin.authenticated;
export const userToken = (state: RootState) => state.kakaoLogin.userToken;
export const userId = (state: RootState) => state.kakaoLogin.userId;

export default KakaoLoginSlice.reducer;
