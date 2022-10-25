import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

export const getReviewListAsync = createAsyncThunk(
  'GET_REVIEW_LIST',
  async (_, thunkAPI) => {
    return await axios({
      url: `http://13.125.151.45:8080/api/comment/1/list`,
      method: 'GET',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      thunkAPI.dispatch(getReply(res.data.data));
      console.log(res.data.data);
      return res;
    });
  }
);
export const postReplyAsync = createAsyncThunk( // 완성
  'POST_COMMENT',
  async (formData: any, thunkAPI) => {
    const {comment, reviewId, token} = formData 
    return await axios({
      url: `http://13.125.151.45:8080/api/comment/register`,
      method: 'POST',
      headers: {
       Authorization : `Bearer ${token.token}`,
        'Content-type': 'application/json',
      },
      data : {
        comment : comment,
        reviewId : reviewId
      }
    }).then((res) => {
      thunkAPI.dispatch(getReviewListAsync())
      return res;
    });
  }
);
export const modifyReplyAsync = createAsyncThunk(
  'MODIFY_REVIEW',
  async (data: any, thunkAPI) => {
    const {comment,commentid} = data
    return await axios.put(`http://13.125.151.45:8080/api/comment/update`,data)
    .then((res) => {
      // thunkAPI.dispatch(getReply(res.data.data));
      console.log(res);
      return res;
    });
  }
);
// export const getServerToken = createAsyncThunk(
//   'GET_SEVER_ACCESS_CODE',
//   async (KakaoToken: string, thunkAPI) => {
//     return await axios({
//       url: API_URL.POST.KAKAO_LOGIN,
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/x-www-form-urlencoded',
//         Authorization: KakaoToken,
//       },
//     }).then((res) => {
//       thunkAPI.dispatch(userLogin(res.data.data));
//       return res.data.data;
//     });
//   }
// );

export interface LoginState {
  data : []
  userId: number;
  reviewId: number;
  userName: string;
  comment: string;
  updatedAt: string;
}

const initialState: LoginState = {
  data : [],
  userId: 0,
  reviewId: 0,
  userName: '',
  comment: '',
  updatedAt: '',
};

export const replySlice = createSlice({
  name: 'reply',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getReply: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getReviewListAsync.fulfilled, (state, action) => {
      // console.log(action.payload);
    })
    .addCase(postReplyAsync.pending, (state) => {
      // console.log("테스트")
    });
  },
});

export const { getReply } = replySlice.actions;
export const replyData = (state: RootState) => state.reply.data;

export default replySlice.reducer;
