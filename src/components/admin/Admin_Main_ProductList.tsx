import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProductData } from '../common/Product_Type';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  clickedIds,
  clickId,
  unclickId,
} from '../../features/adminPage/adminPageSlice';

type userData = {
  data: getProductData;
};

export const ProductList = ({ data }: userData) => {
  const { id, soldoutFlg, title, summary, price, searchKeyword, mainImage } =
    data;
  const clicks = useAppSelector(clickedIds);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsClicked(false);
    clicks.map((click) => {
      if (click === id) setIsClicked(true);
    });
  }, [clicks]);

  return (
    <List>
      <input
        type="checkbox"
        checked={isClicked}
        onClick={() => {
          if (clicks.find((click) => id === click)) {
            dispatch(unclickId(id));
          } else dispatch(clickId(id));
        }}
        readOnly
      />
      <Title>
        <img src={mainImage} alt={title} />
        <p>{title}</p>
      </Title>
      <Summary>{summary}</Summary>
      <Price>{price}</Price>
      <SearchKeyword>{searchKeyword}</SearchKeyword>
      <Status>{soldoutFlg ? '판매중지' : '판매중'}</Status>
    </List>
  );
};

const List = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
    2px 2px 3px 1px rgba(208, 213, 219, 0.28);
  input {
    width: 3%;
  }
  p {
    font-size: 13px;
    text-align: center;
  }
`;
const Title = styled.div`
  height: 100%;
  width: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 50px;
  }
  img {
    width: 60px;
    height: 60px;
  }
`;
const Summary = styled.p`
  width: 55%;
`;
const Price = styled.p`
  width: 10%;
`;
const SearchKeyword = styled.p`
  width: 10%;
`;
const Status = styled.p`
  width: 15%;
`;
