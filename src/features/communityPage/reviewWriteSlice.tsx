import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';

export const uploadImg = createAsyncThunk(
  'POST_IMG',
  async (data: any, thunkAPI) => {
    const { token, blob } = data;
    const formData = new FormData();
    formData.append('upload', blob);
    return await axios({
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      url: `http://13.125.151.45:8080/api/review/image/upload`,
      method: 'post',
      data: formData,
    })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        thunkAPI.dispatch(getImgUrl(response.data));
        return thunkAPI.fulfillWithValue(response.data as any);
      })
      .catch((error) => {
        console.log({ error });
      });
  }
);
export const postContent = createAsyncThunk(
  'POST_CONTENT',
  async (data: any, thunkAPI) => {
    const { token, reservationId, mainImage, contents, title } = data;
    console.log(data);
    return await axios({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      url: `http://13.125.151.45:8080/api/review/register`,
      method: 'post',
      data: {
        token: token,
        reservationId: reservationId,
        mainImage: mainImage,
        contents: contents,
        title: title,
      },
    })
      .then((response) => {
        console.log(response);
        response.status === 200
          ? alert('게시글이 등록 되었습니다.')
          : alert('게시글 등록이 되지않았습니다.');
        // console.log(response.data)
        // thunkAPI.dispatch(getImgUrl(response.data))
        // return response.data as any
      })
      .catch((error) => {
        console.log({ error });
      });
  }
);
export const getReviewDetail = createAsyncThunk(
  'GET_REVIEW_DETAIL',
  async (data: any, thunkAPI) => {
    const { token, id } = data;
    return await axios({
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      url: `http://13.125.151.45:8080/api/review/${id}/details`,
      method: 'get',
    })
      .then((response) => {
        console.log(response.data.data);
        // thunkAPI.dispatch(getImgUrl(response.data))
        return response.data.data;
      })
      .catch((error) => {
        console.log({ error });
      });
  }
);
export const modifyReviewDetail = createAsyncThunk(
  'MODIFY_REVIEW_DETAIL',
  async (data: any, thunkAPI) => {
    const { token, id, reservationId, mainImage, contents, title } = data;
    console.log(data);
    return await axios({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      url: `http://13.125.151.45:8080/api/review/update`,
      method: 'put',
      data : {
        contents : contents,
        id : id,
        mainImage : mainImage,
        reservationId : reservationId,
        title : title,
      }
    })
      .then((response) => {
        console.log(response);
        response.status === 200
          ? alert('게시글이 수정 되었습니다.')
          : alert('게시글 수정이 되지않았습니다.');
        // console.log(response.data)
        // thunkAPI.dispatch(getImgUrl(response.data))
        // return response.data as any
      })
      .catch((error) => {
        console.log({ error });
      });
  }
);
// export const modifyReviewDetail = createAsyncThunk(
//   'MODIFY_REVIEW_DETAIL',
//   async (data: any, thunkAPI) => {
//     const { token, id , contents, mainImage, title, reservationId} = data;
//     console.log(data)
//     return await axios({
//       url: `http://13.125.151.45:8080/api/review/update/`,
//       method: 'put',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'aplication/json',
//       },
//       data : {
//         contents : contents,
//         id : id,
//         mainImage : mainImage,
//         reservationId : reservationId,
//         title : title,
//       }
//     })
//       .then((response) => {
//         console.log(response);
//         response.status === 200
//           ? alert('게시글이 수정 되었습니다.')
//           : alert('게시글이 수정 되지 않았습니다.');
//       })
//       .catch((error) => {
//         console.log({ error });
//       });
//   }
// );
export const deleteReviewDetail = createAsyncThunk(
  'DELETE_REVIEW_DETAIL',
  async (data: any, thunkAPI) => {
    const { token, id } = data;
    return await axios({
      headers: {
        'Content-Type': 'aplication/json',
        Authorization: `Bearer ${token}`,
      },
      url: `http://13.125.151.45:8080/api/review/${id}`,
      method: 'delete',
    })
      .then((response) => {
        response.status === 200
          ? alert('게시글이 삭제 되었습니다.')
          : alert('게시글이 삭제 되지 않았습니다.');
      })
      .catch((error) => {
        console.log({ error });
      });
  }
);
export const reviewLikePost = createAsyncThunk(
  'POST_LIKE',
  async (data: any, thunkAPI) => {
    const { token, review_id } = data
    return await axios({
      headers: {
        'Content-Type': 'aplication/json',
        Authorization: `Bearer ${token}`,
      },
      url: `http://13.125.151.45:8080/api/review/like?review_id=${review_id}`,
      method: 'post',
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log({ error });
      });
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
