import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { pageNum } from '../../features/page/page';
import CommunityReviewData from './CommunityReviewData';

const ReviewContent = () => {
  // const [page,setPage] = useState(1);
  const page = useAppSelector(pageNum);
  const offset = (page-1) * 12
  console.log("offset " +offset)
  return (
    <ReviewWrap>
      {CommunityReviewData.slice(offset,offset+12).map((review) => {
        return (
          <ReviewCont key={review.id}>
            <ReviewImg src={review.img} alt="" />
            <ReviewContentWrap>
              <ReviewContentTitle>{review.title}</ReviewContentTitle>
              <ReviewDate>
                <ReviewContentWriter>{review.date}</ReviewContentWriter>
                <ReviewContentWriter>{review.writer}</ReviewContentWriter>
                <ReviewContentWriter>{review.id}</ReviewContentWriter>
              </ReviewDate>
            </ReviewContentWrap>
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
  font-size : 0;
`;
const ReviewCont = styled.div`
  display : inline-block;
  width: 284px;
  height: 420px;
  margin-right: 16px;
  margin-bottom : 70px;
  border: 1px solid #cccccc;
  :nth-child(4n){
    margin-right : 0px;
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
  width: 284px;
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
`;
