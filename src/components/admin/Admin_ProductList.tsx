import React from 'react';
import { Data } from './Admin_Product';

type userData = {
  data: Data;
};

export default function Admin_ProductList({ data }: userData) {
  const { title, summary, price } = data;
  return (
    <>
      <div>
        <p>상품명</p>
      </div>
      <div>
        <p>{title}</p>
        <p>{summary}</p>
        <p>{price}</p>
      </div>
    </>
  );
}
