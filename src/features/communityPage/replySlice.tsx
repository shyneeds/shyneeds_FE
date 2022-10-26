import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

export const getReviewListAsync = createAsyncThunk(
  'GET_REVIEW_LIST',
  async (id: any, thunkAPI) => {
    return await axios({
      url: `http://13.125.151.45:8080/api/comment/${id}/list`,
      method: 'GET',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      thunkAPI.dispatch(getReply(res.data.data));
      return res;
    });
  }
);
export const postReplyAsync = createAsyncThunk(
  // 완성
  'POST_COMMENT',
  async (formData: any, thunkAPI) => {
    const { comment, reviewId, token } = formData;
    return await axios({
      url: `http://13.125.151.45:8080/api/comment/register`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.token}`,
        'Content-type': 'application/json',
      },
      data: {
        comment: comment,
        reviewId: reviewId,
      },
    }).then((res) => {
      thunkAPI.dispatch(getReviewListAsync(reviewId));
      return res;
    });
  }
);
export const modifyReplyAsync = createAsyncThunk(
  'MODIFY_REVIEW',
  async (data: any, thunkAPI) => {
    const { comment, commentId, token, reviewId} = data;
    console.log(comment);
    return await axios({
      url: `http://13.125.151.45:8080/api/comment/update/`,
      method: 'put',
      headers: {
        Authorization: `Bearer ${token.token}`,
        'Content-type': 'application/json',
      },
      data: {
        comment: comment,
        commentId: commentId,
      },
    }).then((res) => {
      thunkAPI.dispatch(getReviewListAsync(reviewId));
      console.log(res);
      return res;
    });
  }
);
export const getReplyContentAsync = createAsyncThunk(
  // 됨
  'GET_REPLY_CONTENT',
  async (data: any, thunkAPI) => {
    const { commentid, token } = data;
    return await axios({
      url: `http://13.125.151.45:8080/api/comment/${commentid}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.token}`,
        'Content-type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      thunkAPI.dispatch(setReply(res.data.data.comment));
      console.log(res.data.data.comment);
      return res;
    });
  }
);
export const delReplyAsync = createAsyncThunk(
  'DELETE_REPLY_CONTENT',
  async (data: any, thunkAPI) => {
    const { commentid, token ,reviewId } = data;
    return await axios({
      url: `http://13.125.151.45:8080/api/comment/${commentid}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token.token}`,
        'Content-type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      thunkAPI.dispatch(getReviewListAsync(reviewId));
      console.log(res);
      return res;
    });
  }
);

export interface LoginState {
  data: [];
  userId: number;
  reviewId: number;
  userName: string;
  comment: string;
  updatedAt: string;
  setReply: string;
}

const initialState: LoginState = {
  data: [],
  userId: 0,
  reviewId: 0,
  userName: '',
  comment: '',
  updatedAt: '',
  setReply: '',
};

export const replySlice = createSlice({
  name: 'reply',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getReply: (state, action) => {
      state.data = action.payload;
    },
    setReply: (state, action) => {
      state.setReply = action.payload;
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

export const { getReply, setReply } = replySlice.actions;
export const replyData = (state: RootState) => state.reply.data;
export const setReplyData = (state: RootState) => state.reply.setReply;

export default replySlice.reducer;
