import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { userToken, userId } from '../../features/kakaoLogin/kakaoLoginSlice';
import styled from 'styled-components';

const Writing = () => {
  const token = useAppSelector(userToken);
  const userIdValue = useAppSelector(userId);
  const [review, setReview] = useState<any>('');

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://13.125.151.45:8080/api/review/mypage?offset=30`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
      setReview(res.data.data);
      console.log(review);
    });
  }, []);

  return (
    <WritingBox>
      <h2>내가 작성한 글</h2>
      {review.length === 0 ? (
        <ContentsResultBox>내가 작성한 글이 없습니다.</ContentsResultBox>
      ) : (
        review.map((data: any, i: number) => {
          return (
            <ReviewWrap key={review[i].id}>
              <img src={review[i].mainImage} alt="" />
              <ReviewContentWrap>
                <ReviewContentTitle>{review[i].title}</ReviewContentTitle>
                <ReviewDate>
                  <ReviewContentWriter>
                    {review[i].updatedAt
                      .slice(0, 10)
                      .replace(/(\d{4})-(\d{2})-(\d{2})/, '$1. $2. $3')}
                  </ReviewContentWriter>
                </ReviewDate>
              </ReviewContentWrap>
            </ReviewWrap>
          );
        })
      )}
    </WritingBox>
  );
};
const WritingBox = styled.div`
  > h2 {
    margin: 0 0 8px;
    font-weight: 700;
    font-size: 1.8rem;
    color: #666666;
  }
`;
const ContentsResultBox = styled.div`
  padding: 100px;
  text-align: center;
`;
const ReviewWrap = styled.div`
  display: inline-block;
  width: 284px;
  height: 420px;
  > img {
    width: 100%;
    height: 284px;
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

const ReviewContentWrap = styled.div`
  width: 284px;
  margin-right: 16px;
  margin-bottom: 70px;
  border: 1px solid #cccccc;
  :nth-child(4n) {
    margin-right: 0px;
  }
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
  margin-top: 12px;
`;

export default Writing;
