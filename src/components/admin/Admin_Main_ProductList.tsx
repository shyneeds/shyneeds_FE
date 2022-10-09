import React from 'react';
import styled from 'styled-components';
import { Data } from './Admin_Product';

type userData = {
  data: Data;
};

export const ProductList = ({ data }: userData) => {
  const { updatedAt, title, summary, price, searchKeyword, mainImage } = data;
  return (
    <List>
      <input type="checkbox"></input>
      <Title>
        <img src={mainImage} alt={title} />
        <p>{title}</p>
      </Title>
      <Summary>{summary}</Summary>
      <Price>{price}</Price>
      <SearchKeyword>{searchKeyword}</SearchKeyword>
      <UpdatedAt>{updatedAt}</UpdatedAt>
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
  width: 50%;
`;
const Price = styled.p`
  width: 10%;
`;
const SearchKeyword = styled.p`
  width: 10%;
`;
const UpdatedAt = styled.p`
  width: 15%;
`;
