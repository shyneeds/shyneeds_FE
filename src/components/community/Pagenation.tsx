import React from 'react';
import styled, { css } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { pageNum, setPage, totalData } from '../../features/page/page';

const Pagenation = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(pageNum);
  const total = useAppSelector(totalData);
  const numPages = Math.ceil(total / 12);

  console.log(numPages)
  return (
    <>
      <Nav>
        <Button
          onClick={() => dispatch(setPage(page - 1))}
          disabled={page === 1}
        >
          &lt;
        </Button>
        {Array(numPages)
          .fill(numPages)
          .slice(page, page+10)
          .map((_, i) => (
            <NumButton
              page={page}
              key={i + 1}
              onClick={() => dispatch(setPage(i + 1))}
              ariaCurrent={page === i + 1}
            >
              {i+1}
            </NumButton>
          ))}
        <Button
          onClick={() => dispatch(setPage(page + 1))}
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
  margin-bottom: 30px;
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

const NumButton = styled.button<{ page: number; ariaCurrent: boolean }>`
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
          pointer-events:none;
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
