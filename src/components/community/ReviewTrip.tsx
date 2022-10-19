import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Pagenation from './Pagenation';
import ReviewContent from './ReviewContent';

const ReviewTrip = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <>
      <CategoryWrap>
        <CategoryButton
          onClick={() => {
            setTab(0);
          }}
          className={tab === 0 ? 'active' : undefined}
        >
          <CategoryText>여행후기( 1234 )</CategoryText>
        </CategoryButton>
        <CategoryButton
          onClick={() => {
            setTab(1);
          }}
          className={tab === 1 ? 'active' : undefined}
        >
          <CategoryText>공지사항</CategoryText>
        </CategoryButton>
      </CategoryWrap>
      <SearchWrap>
        <SearchBox>
          <img
            src={process.env.PUBLIC_URL + '/icons/search.png'}
            alt="search.png"
          />
          <input type="text" placeholder="검색" />
        </SearchBox>
        <WriteButton to='/community/write'>
          글쓰기
        </WriteButton>
      </SearchWrap>
      <ReviewContent/>
      <Pagenation/>
    </>
  );
};

export default ReviewTrip;

const CategoryText = styled.p`
  display: inline-block;
  padding-top: 21px;
  padding-bottom: 23px;
`;

const CategoryButton = styled.button`
  height: 70px;
  width: 100%;
  border: 1px solid #cccccc;
  background: #f5f5f5;
  cursor: pointer;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.07);
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #666666;
  &.active {
    background: #ffffff;
    color: #4286f4;
    border: 0px solid #cccccc;
    ${CategoryText} {
      border-bottom: 1px solid #4286f4;
      border-bottom-width: medium;
    }
  }
`;
const CategoryWrap = styled.div`
  width: 1184px;
  margin: 0 auto;
  display: flex;
  margin-top : 100px;
`;

const SearchWrap = styled.div`
  width: 1184px;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom:26px;
`;
const SearchBox = styled.div`
  width: 326px;
  height: 48px;
  background-color: #f2f2f2;
  line-height: 48px;
  margin: auto 0;
  display: flex;

  img {
    width: 24px;
    height: 24px;
    margin: auto 5px;
    margin-left: 10px;
  }

  input {
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;
const WriteButton = styled(Link)`
  width: 140px;
  height: 48px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bolder;
  background-color: #4286f4;
  color: white;
  line-height: 48px;
  text-align: center;
  
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  cursor: pointer;
`
const ReviewWrap = styled.div`
  width : 1184px;
  display : flex;
`