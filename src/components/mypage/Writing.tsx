import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { userToken, userId } from '../../features/kakaoLogin/kakaoLoginSlice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
              <Link to={`/community/detail/${review.id}`}>
                <img src={review[i].mainImage} alt="" />
                <ReviewContentWrap>
                  <ReviewContentTitle>{review[i].title}</ReviewContentTitle>
                  <ReviewContentWriter>
                    {review[i].updatedAt
                      .slice(0, 10)
                      .replace(/(\d{4})-(\d{2})-(\d{2})/, '$1. $2. $3')}
                  </ReviewContentWriter>
                </ReviewContentWrap>
              </Link>
            </ReviewWrap>
          );
        })
      )}
    </WritingBox>
  );
};
const WritingBox = styled.div`
  > h2 {
    margin: 0 0 23px;
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
  width: 199px;
  margin: 0 10px 10px 0;
  > img {
    width: 100%;
    height: 199px;
  }
`;

const ReviewContentWrap = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid #e9ecef;
  :nth-child(4n) {
    margin-right: 0px;
  }
`;
const ReviewContentTitle = styled.p`
  font-weight: 500;
  font-size: 1rem;
`;

const ReviewContentWriter = styled.p`
  margin: 0 10px 0 0;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 1rem;
  margin-top: 12px;
`;

export default Writing;
