import React from 'react';
import styled from 'styled-components';
import { Data } from './Admin_Product';

type userData = {
  data: Data;
};

export default function Admin_ProductList({ data }: userData) {
  const { title, summary, price, searchKeyword } = data;
  return (
    <List>
      <input type="checkbox"></input>
      <p>{title}</p>
      <p>{summary}</p>
      <p>{price}</p>
      <p>{searchKeyword[0]}</p>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
    2px 2px 3px 1px rgba(208, 213, 219, 0.28);
`;
