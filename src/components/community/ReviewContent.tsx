import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { pageNum, getPageList, ReviewData, seacrchWordData } from '../../features/communityPage/communityPageSlice';
import { Link } from 'react-router-dom';

type reviewDataType = {
  id: string;
  author: string;
  mainImage: string;
  title: string;
  updatedAt: string;
};

const ReviewContent = () => {
  const dispatch = useAppDispatch();
  const searchWord = useAppSelector(seacrchWordData);
  const page = useAppSelector(pageNum);
  const reviewDatas = useAppSelector(ReviewData);
  useEffect(() => {
    const data = {page, searchWord}
    console.log(data)
    dispatch(getPageList(data));
  }, [page,searchWord]);
  // /^\d{4}.-(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01])$/
  return (
    <ReviewWrap>
      {reviewDatas.map((review: reviewDataType,i) => {
        return (
          <ReviewCont key={review.id}>
            <Link to={`/community/detail/${review.id}`} >
            <ReviewImg src={review.mainImage} alt="" />
            <ReviewContentWrap>
              <ReviewContentTitle>{review.title}</ReviewContentTitle>
              <ReviewDate>
                <ReviewContentWriter>{(review.updatedAt).slice(0,10).replace(/(\d{4})-(\d{2})-(\d{2})/ , "$1. $2. $3" )}</ReviewContentWriter>
                <ReviewContentWriter>{review.author}</ReviewContentWriter>
                <ReviewContentWriter>{review.id}</ReviewContentWriter>
              </ReviewDate>
            </ReviewContentWrap>
            </Link>
          </ReviewCont>
        );
      })}
    </ReviewWrap>
  );
};

export default ReviewContent;

const ReviewWrap = styled.div`
  width: 1184px;
  margin: 0 auto;
  /* display: flex; */
  /* flex-wrap: wrap; */
  font-size: 0;
`;
const ReviewCont = styled.div`
  display: inline-block;
  width: 284px;
  height: 420px;
  margin-right: 16px;
  margin-bottom: 70px;
  border: 1px solid #cccccc;
  :nth-child(4n) {
    margin-right: 0px;
  }
`;

const ReviewDate = styled.div`
  margin: 12px 0 0;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const ReviewImg = styled.img`
  width: 283px;
  height: 284px;
`;
const ReviewContentWrap = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 20px;
`;
const ReviewContentTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const ReviewContentWriter = styled.p`
  float: left;
  margin: 0 10px 0 0;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top :12px;
`;
