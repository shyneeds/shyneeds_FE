import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { customAxios } from '../../lib/customAxios';

export const getReviewListAsync = createAsyncThunk(
  'GET_REVIEW_LIST',
  async (id: string) => {
    return await customAxios
      .get(`comment/${id}/list`)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        return error;
      });
  }
);
export const postReplyAsync = createAsyncThunk(
  'POST_COMMENT',
  async (formData: any) => {
    return await customAxios
      .post('/comment/register', formData)
      .then((response) => {
        return response.data.statusCode;
      });
  }
);
export const modifyReplyAsync = createAsyncThunk(
  'MODIFY_REVIEW',
  async (data: any, thunkAPI) => {
    return await customAxios.put('/comment/update', data).then((res) => {
      return res.data;
    });
  }
);
export const getReplyContentAsync = createAsyncThunk(
  'GET_REPLY_CONTENT',
  async (id: any, thunkAPI) => {
    return await customAxios
      .get(`/comment/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      });
  }
);
export const delReplyAsync = createAsyncThunk(
  'DELETE_REPLY_CONTENT',
  async (id: number, thunkAPI) => {
    return await customAxios.delete(`/comment/${id}`).then((res) => {
      return res.data;
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
  reducers: {
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
        state.data = action.payload;
      })
      .addCase(postReplyAsync.fulfilled, () => {
        // console.log("테스트")
      })
      .addCase(getReplyContentAsync.fulfilled, () => {
        // console.log("테스트")
      })
      .addCase(modifyReplyAsync.fulfilled, () => {
        // console.log("테스트")
      });
  },
});

export const { getReply, setReply } = replySlice.actions;
export const replyData = (state: RootState) => state.reply.data;
export const setReplyData = (state: RootState) => state.reply.setReply;

export default replySlice.reducer;
