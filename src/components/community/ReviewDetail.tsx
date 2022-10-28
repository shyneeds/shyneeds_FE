import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReviewDetailData from './ReviewDetailData';
import { useState } from 'react';
import RelatedData from './RelatedData';
import ReviewReply from './ReviewReply';
import { useNavigate, useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  deleteReviewDetail,
  getReviewDetail,
  reviewDetailData,
  reviewLikePost,
} from '../../features/communityPage/reviewWriteSlice';
import { useCookies } from 'react-cookie';

const ReviewDetail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const detailData = useAppSelector(reviewDetailData);
  const [cookies, setCookie] = useCookies(['token']);
  const id = useParams().id;
  useEffect(() => {
    dispatch(getReviewDetail({ id, ...cookies }));
  }, []);
  const onDeleteClick = (id: string) =>{
    dispatch(deleteReviewDetail({ id, ...cookies })).then(()=>navigate(-1));
  }
  const onModifyClick = () =>{
    navigate('/community/write/modify')
  }
  const onLikeClick = (review_id: string) =>{
    dispatch(reviewLikePost({review_id,...cookies})).then(()=>dispatch(getReviewDetail({ id, ...cookies })))
  }

  return (
    <Wrap>
      <TopCategoryWrap>
        <CategoryWrap>
          <TripReviewText>여행후기</TripReviewText>
          <ReviewTitle>{detailData?.title}</ReviewTitle>
          <ReviewDate>
            <ReviewLeftTop>
              <ReviewContentWriter>{detailData?.author}</ReviewContentWriter>
              <ReviewContentWriter>
                {detailData?.updatedAt
                  ?.slice(0, 10)
                  .replace(/(\d{4})-(\d{2})-(\d{2})/, '$1. $2. $3')}
              </ReviewContentWriter>
              <ReviewContentWriter>
                조회수 : {detailData?.lookupCount}
              </ReviewContentWriter>
            </ReviewLeftTop>
            <ReviewRightTop>
              {detailData?.like === false ? (
                <>
                  <img
                    src={process.env.PUBLIC_URL + '/icons/EmptyLoveIcon.svg'}
                    alt="EmptyLoveIcon"
                    onClick={() => onLikeClick(id as string)}
                  />
                  <Like>좋아요</Like>
                  <p>{detailData?.likeCount}</p>
                </>
              ) : (
                <>
                  <img
                    src={process.env.PUBLIC_URL + '/icons/LoveIcon.svg'}
                    alt="EmptyLoveIcon"
                    onClick={() => onLikeClick(id as string)}
                  />
                  <Like>좋아요</Like>
                  <p>{detailData?.likeCount}</p>
                </>
              )}
            </ReviewRightTop>
          </ReviewDate>
        </CategoryWrap>
      </TopCategoryWrap>
      <ReviewContentWrap>
        <ReviewContent
          dangerouslySetInnerHTML={{ __html: detailData?.contents }}
        ></ReviewContent>
        {/* <ReviewImage src={detailData.img}></ReviewImage> */}
        <RelateProduct>
          <img
            src={detailData?.visitPackageResponseDto?.mainImage}
            alt="다녀온 상품"
          />
          <RelateProductMiddleWrap>
            <RelatedProduct>고객님이 다녀온 상품</RelatedProduct>
            <RelatedContentTitle>
              {detailData?.visitPackageResponseDto?.title}
            </RelatedContentTitle>
            <RelatedContentDate>{RelatedData.date}</RelatedContentDate>{' '}
            {/* TODO: 추후 날짜 들어와야함*/}
          </RelateProductMiddleWrap>
          <div>
            <ShowProduct>상품 보기</ShowProduct>
          </div>
        </RelateProduct>
        <ReviewReply /> {/*댓글 기능*/}
        <MenuWrap>
          <ContentModiftyButton onClick={()=>onModifyClick()}>게시글 수정</ContentModiftyButton>
          <ContentDeleteButton onClick={()=>onDeleteClick(id as string)}>게시글 삭제</ContentDeleteButton>
        </MenuWrap>
      </ReviewContentWrap>
    </Wrap>
  );
};

export default ReviewDetail;

const Wrap = styled.div`
  width: 1184px;
  margin: 0 auto;
`;

const TopCategoryWrap = styled.div`
  width: 1184px;
`;
const CategoryWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
`;

const TripReviewText = styled.p`
  height: 24px;
  font-weight: 600;
  font-size: 16px;
  margin: 0 auto;
  line-height: 24px;
  text-align: center;
  color: #666666;
`;

const ReviewTitle = styled.div`
  width: 1000px;
  height: 24px;
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
`;

const ReviewDate = styled.div`
  margin: 12px 0 0;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  margin-bottom: 10px;
`;
const ReviewContentWriter = styled.p`
  float: left;
  margin: 0 10px 0 10px;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  :nth-child(1) {
    margin-left: 0px;
  }
`;

const ReviewLeftTop = styled.div`
  float: left;
`;
const ReviewRightTop = styled.div`
  display: flex;
  float: right;
  border: 1px solid #cccccc;
  width: 118px;
  height: 28px;
  line-height: 28px;
  img {
    width: 20px;
    margin-left: 12px;
    margin-right: 7px;
    cursor: pointer;
  }
  p {
    line-height: 25px;
    color: #666666;
  }
`;
const Like = styled.p`
  width: 44px;
  height: 28px;
  line-height: 25px;
  margin-right: 5px;
  color: #666666;
`;

const ReviewContentWrap = styled.div`
  width: 1184px;
  margin-bottom: 58px;
  border-top: 1px solid #eeeeee;
  padding: 40px 92px 0;
`;

const ReviewContent = styled.pre`
  width: 1000px;
  margin-bottom: 58px;
`;
const ReviewImage = styled.img`
  width: 1000px;
  margin: 0 auto;
`;
const RelateProduct = styled.div`
  display: flex;
  width: 1000px;
  height: 200px;
  margin: 0 auto;
  margin-top: 40px;
  background: #f5f5f5;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
  img {
    width: 220px;
    height: 160px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 30px;
  }
`;

const RelatedProduct = styled.p`
  width: 430px;
  height: 24px;
  margin-bottom: 7px;
  margin-top: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #4286f4;
`;
const RelatedContentTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
`;
const RelatedContentDate = styled.p`
  margin-top: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
`;

const RelateProductMiddleWrap = styled.div`
  width: 530px;
`;
const MenuWrap = styled.div`
  margin-top : 10px;
  float: right;
`;
const ContentModiftyButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #4286f4;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
  margin-right: 2px;
  cursor: pointer;
  transition: box-shadow 400ms ease;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;
const ContentDeleteButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #4286f4;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow 400ms ease;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;
const ShowProduct = styled.button`
  width: 130px;
  height: 44px;
  background-color: #4286f4;
  color: white;
  margin-top: 126px;
  margin-right: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;

  cursor: pointer;
  transition: box-shadow 400ms ease;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;

const TopLi = styled.li`
  color: #222222;

  &:hover {
    padding-bottom: 1.25rem;
    margin-top: 1.25rem;
    color: #4286f4;
  }
`;
