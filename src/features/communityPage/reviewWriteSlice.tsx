import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import { customAxios } from '../../lib/customAxios';
axios.defaults.headers.post['Content-Type']='multipart/form-data'

export const uploadImg = createAsyncThunk(
  'POST_IMG',
  async (imgData: any, thunkAPI) => {
    return await 
    customAxios.post('/review/image/upload',imgData).then((response)=>{console.log(response);
      console.log(response.data);
      thunkAPI.dispatch(getImgUrl(response.data));
      return response.data
    }).catch((error)=>{return error})
    // axios({
      // headers: {
        // 'Content-Type': 'multipart/form-data',
      //   Authorization: `Bearer ${token}`,
      // },
    //   url: `http://13.125.151.45:8080/api/review/image/upload`,
    //   method: 'post',
    //   data: formData,
    // })
    //   .then((response) => {
    //     console.log(response);
    //     console.log(response.data);
    //     thunkAPI.dispatch(getImgUrl(response.data));
    //     return response.data
    //   })
    //   .catch((error) => {
    //     console.log({ error });
    //   });
  }
);
export const postContent = createAsyncThunk(
  'POST_CONTENT',
  async (data: any) => { //TODO: 추후 인터페이스 정의 필요 
    return await customAxios.post('/review/register', data).then((response)=>{response.status === 200
      ? alert('게시글이 등록 되었습니다.')
      : alert('게시글 등록이 되지않았습니다.');}).catch((error)=>{return error})
  }
);

export const getReviewDetail = createAsyncThunk(
  'GET_REVIEW_DETAIL',
  async (id: string) => {
    return await 
    customAxios.get(`/review/${id}/details`).then((res)=>{return res.data.data}).catch((error)=>{return error})
  }
);
export const modifyReviewDetail = createAsyncThunk(
  'MODIFY_REVIEW_DETAIL',
  async (data: any, thunkAPI) => {
    return await customAxios.put('/review/update',data).then((response)=>{response.status === 200
      ? alert('게시글이 수정 되었습니다.')
      : alert('게시글 수정이 되지않았습니다.');}).catch((error)=>{return error})
  }
);

export const deleteReviewDetail = createAsyncThunk(
  'DELETE_REVIEW_DETAIL',
  async (id: string, thunkAPI) => {
    return await customAxios.delete(`/review/${id}`)
  }
);
export const reviewLikePost = createAsyncThunk(
  'POST_LIKE',
  async (review_id: string, thunkAPI) => {
    return await customAxios.post(`/review/like?review_id=${review_id}`)
  }
);

export interface writeState {
  imgUrl: Array<any>;
  reviewContent: any;
}

const initialState: writeState = {
  imgUrl: [],
  reviewContent: {},
};

export const writeSlice = createSlice({
  name: 'write',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getImgUrl: (state, action: PayloadAction<any>) => {
      // state.imgUrl = action.payload;
      state.imgUrl.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadImg.fulfilled, (state, action) => {
      // state.imgUrl.push(action.payload);
    });
    builder.addCase(getReviewDetail.fulfilled, (state, action) => {
      state.reviewContent = action.payload;
    });
  },
});

export const { getImgUrl } = writeSlice.actions;
export const imgUrl = (state: RootState) => state.write.imgUrl;
export const reviewDetailData = (state: RootState) => state.write.reviewContent;

export default writeSlice.reducer;
