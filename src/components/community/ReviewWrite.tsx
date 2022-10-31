import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor } from '@toast-ui/react-editor';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useCookies } from 'react-cookie';
import {
  getUserData,
  userReservationList,
} from '../../features/userData/userDataSlice';
import {
  imgUrl,
  modifyReviewDetail,
  postContent,
  reviewDetailData,
  uploadImg,
} from '../../features/communityPage/reviewWriteSlice';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ReviewWrite = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const getUrlCode = useParams().modify;
  const writeCode = useParams();
  const responseImgUrl = useAppSelector(imgUrl);
  const [cookies, setCookies] = useCookies(['token']);
  const reservationList: any = useAppSelector(userReservationList);
  const reviewDetail = useAppSelector(reviewDetailData);
  const editorRef = useRef<Editor>(null);
  useEffect(() => {
    dispatch(getUserData(cookies.token));
    getUrlCode === 'modify'
      ? (console.log(reviewDetail),
        setValue('title', reviewDetail.title),
        // setValue('mainImage', reviewDetail.mainImage),
        setValue('reservationId', reviewDetail.reservationId),
        editorRef.current?.getInstance().setHTML(reviewDetail.contents))
      : '';
  }, []);
  // console.log(reservationList.length);

  const onSubmit = (formData: any) => {
    console.log('submit 돌아가요');
    console.log(Object.keys('mainImage').length === 0);
    Object.keys('mainImage').length === 0
      ? ''
      : (formData['mainImage'] = responseImgUrl[0]);
    const contents = editorRef.current?.getInstance().getHTML();
    Object.assign(formData, { contents }, { ...cookies });
    getUrlCode === 'modify'
      ? // typeof formData.mainImage === undefined &&
        // console.log(typeof formData.mainImage === undefined),
        // (formData['mainImage'] = reviewDetail.mainImage),
        ((formData['id'] = reviewDetail.id),
        Object.assign(formData, { contents }, { ...cookies }),
        console.log(formData),
        dispatch(modifyReviewDetail(formData)).then(() => navigate(-1)))
      : dispatch(postContent(formData)).then(() => navigate(-1));
  };

  const onChange = () => {
    // 단순 로그 찍기용 함수
    const data = editorRef.current?.getInstance().getHTML();
    // console.log(data); // TODO: 지울거
  };
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [myImage, setMyImage] = useState<string>();
  const uploadImage = (e: any) => {
    setMyImage(URL.createObjectURL(e.target.files[0]));
    const blob = e.target.files[0];
    const data = { ...cookies, blob };
    dispatch(uploadImg(data)).then((res) => {
      setValue('mainImage', res.payload);
    });
  };

  const onUploadImage = async (blob: Blob, callback: any) => {
    const data = { ...cookies, blob };
    dispatch(uploadImg(data)).then((res) => {
      callback(res.payload, 'test');
    }); //url 콜백에 넣자
  };
  // console.log(writeCode)
  // console.log(Object.keys(writeCode).length)
  // console.log("responseImgUrl 의 길이 : "+ responseImgUrl.length)
  // console.log("upload후 받은 이미지 url : "+responseImgUrl)
  // console.log("upload후 이미지가 있으면 나오는 Length : " +imgRef.current?.value.length)

  return (
    <Wrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HeaderWrap>
          <ReviewLink to={'/community'}>여행후기</ReviewLink>
          <WriteSubmitWrap>
            <CancelButton type={'reset'} onClick={() => navigate(-1)}>
              취소
            </CancelButton>
            <WriteButton type={'submit'}>작성</WriteButton>
          </WriteSubmitWrap>
        </HeaderWrap>
        <ContentWrap>
          <LeftWrap>
            <InputBox>
              <InputStyle
                placeholder="제목을 적어주세요"
                style={{ outline: errors.title ? '2px solid red' : '' }}
                {...register('title', {
                  required: true,
                })}
              />
              <BirthSelect
                // defaultValue={reviewDetail?.reservationId}
                {...register('reservationId', { required: true })} // TODO: 추후 미선택시 선택되게끔 erros 설정해야함
              >
                {reservationList.length === 0
                  ? '예약내역이 없어요'
                  : reservationList.map((data: any, i: number) => {
                      if (data.reservationStatus === '예약확정') {
                        // console.log(data.reservationPackage[0].title , " id= " + data.reservationId);
                        return (
                          <option key={i} value={data.reservationId as number}>
                            {data.reservationPackage[0].title}
                          </option>
                        );
                      }
                    })}
              </BirthSelect>
            </InputBox>
            <EditorWrap>
              <Editor
                ref={editorRef}
                plugins={[colorSyntax]}
                previewStyle="vertical"
                height="900px"
                initialEditType="wysiwyg"
                hideModeSwitch={true}
                language="ko-KR"
                placeholder="내용을 작성해주세요."
                onChange={onChange}
                hooks={{
                  addImageBlobHook: onUploadImage,
                }}
              />
            </EditorWrap>
          </LeftWrap>
          <RightWrap>
            <InputImgBox>
              {responseImgUrl.length == 0 ? (
                imgRef.current?.value.length == 0 &&
                (getUrlCode == 'modify' ? (
                  <>
                    <ThunmbMainImg src={reviewDetail.mainImage} />
                    <p>수정버튼 누른후 없음</p>
                  </>
                ) : (
                  <p>아무것도 없음</p>
                ))
              ) : getUrlCode == 'modify' ? (
                <>
                  <p>수정 페이지 이미지</p>
                  <ThunmbMainImg src={reviewDetail.mainImage} />
                </>
              ) : (
                <>
                  {myImage === undefined ? '' : <ThunmbMainImg src={myImage} />}
                  <p>업로드 누른후?</p>
                </>
              )}

              {/* {responseImgUrl.length != 0 ? (
                imgRef.current?.value.length != 0 ? (
                  <>
                    <ThunmbMainImg src={myImage} />
                    <p>
                      {responseImgUrl.length}, {imgRef.current?.value.length}
                    </p>
                    <p>165번째</p>
                  </>
                ) : Object.keys(writeCode).length == 1 ? (
                  <>
                    <ThunmbMainImg src={reviewDetail.mainImage} />
                    <p>
                      {responseImgUrl.length}, {imgRef.current?.value.length}
                    </p>
                    <p>{Object.keys(writeCode).length}</p>
                    <p>여기?</p>
                  </>
                ) : (
                  <>
                    <ThunmbMainImg src={responseImgUrl[0]} />
                    <p>
                      {responseImgUrl.length}, {imgRef.current?.value.length}
                    </p>
                    <p>write 코드 : {Object.keys(writeCode).length}</p>
                    <p>170번째</p>
                    <p>{responseImgUrl[0]}</p>
                  </>
                )
              ) : (
                getUrlCode == 'modify' && (
                  <>
                    <ThunmbMainImg src={reviewDetail.mainImage} />
                    <p>177번째</p>
                    <p>{getUrlCode}</p>
                  </>
                )
              )} */}
              <ThunmbImg onClick={() => imgRef.current?.click()}>
                <img src={process.env.PUBLIC_URL + '/icons/union.svg'} />
                <p>대표 이미지 변경</p>
              </ThunmbImg>
              <input
                style={{ display: 'none' }}
                ref={imgRef}
                onChange={uploadImage}
                type="file"
                accept="image/*"
              />
            </InputImgBox>
          </RightWrap>
        </ContentWrap>
      </form>
    </Wrap>
  );
};

export default ReviewWrite;

const EditorWrap = styled.div`
  width: 960px;
  margin: 0 auto;
`;
const Wrap = styled.div`
  position: relative;
  width: 100%;
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(33, 33, 33, 0.15);
`;
const ReviewLink = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin-left: 40px;
`;
const WriteSubmitWrap = styled.div`
  width: 230px;
`;

const WriteButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: #4286f4;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
  margin-right: 20px;
  cursor: pointer;
  transition: box-shadow 400ms ease;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;
const CancelButton = styled.button`
  width: 80px;
  height: 40px;
  background: #ffffff;
  color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #aaaaaa;
  border-radius: 6px;
  margin-right: 10px;
  cursor: pointer;
  transition: box-shadow 400ms ease;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;

const LeftWrap = styled.section`
  width: 80%;
  height: 1080px;
  padding: 20px;
`;
const RightWrap = styled.section`
  width: 20%;
  height: 1080px;
  padding: 20px;
  border-left: 1px solid #cccccc;
`;
const InputBox = styled.div`
  display: flex;
  width: 960px;
  margin: 0 auto;
`;
const InputStyle = styled.input`
  height: 50px;
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #cccccc;
`;
const ContentWrap = styled.div`
  display: flex;
`;

const InputImgBox = styled.div`
  margin-bottom: 34px;
`;
const ThunmbMainImg = styled.img`
  width: 170px;
  height: 170px;
  margin: 0 auto;
  margin-bottom: 54px;
`;
const ThunmbImg = styled.div`
  width: 170px;
  height: 170px;
  margin: 0 auto;
  background: #f5f5f5;
  border: 1px solid #cccccc;
  img {
    width: 24px;
    height: 24px;
    margin: 0 auto;
    margin-top: 58px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #aaaaaa;
  }
`;
const BirthSelect = styled.select`
  align-items: center;
  padding: 11px 20px;
  width: 190px;
  height: 50px;
  border: 1px solid #cccccc;
`;
