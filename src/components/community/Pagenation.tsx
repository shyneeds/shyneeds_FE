import React from 'react';
import styled, { css } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  nextPage,
  pageNum,
  setPage,
  totalData,
  blockNum,
  prevPage,
} from '../../features/page/page';
import { useState } from 'react';
import { useEffect } from 'react';

const Pagenation = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(pageNum);
  const total = useAppSelector(totalData);
  const blockNumber = useAppSelector(blockNum);
  const numPages = Math.ceil(total / 12);
  
  const createArr = (n: number) => {
    const totalArr: number[] = new Array(n);
    for (let i = 0; i < n; i++) totalArr[i] = i + 1;
    return totalArr;
  };
  
  const startPage = Number(blockNumber * 10);
  const rangeArr = createArr(numPages);
  const sliceArr = rangeArr?.slice(startPage, Number(10) + startPage);
  
  return (
    <>
      <Nav>
        <Button onClick={() => dispatch(prevPage(0))} disabled={page === 1}>
          &lt;
        </Button>
        {sliceArr.map((n) => (
          <NumButton
            key={n}
            onClick={() => dispatch(setPage(n))}
            ariaCurrent={page === n}
          >
            {n}
          </NumButton>
        ))}
        <Button
          onClick={() => dispatch(nextPage(0))}
          disabled={page === numPages}
        >
          &gt;
        </Button>
      </Nav>
    </>
  );
};

export default Pagenation;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 0 auto;
  margin-bottom: 150px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  color: black;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
  &[disabled] {
    color: #aaaaaa;
    cursor: revert;
    transform: revert;
  }
`;

const NumButton = styled.button<{ ariaCurrent: boolean }>`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  color: #aaaaaa;
  font-size: 1rem;
  ${(props) =>
    props.ariaCurrent === true
      ? css`
          color: #4286f4;
          pointer-events: none;
          transform: revert;
          font-weight: bold;
        `
      : css`
          color: #aaaaaa;
        `};

  &:hover {
    cursor: pointer;
  }
`;
