import styled from 'styled-components';
import { useState } from 'react';

export const WatchedProducts = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Container>
      <p>최근 본 상품</p>
      <p>{0}</p>
      {isOpen && <Storage />}
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding: 8px;

  > p {
    margin-top: 8px;
  }
`;

const Storage = styled.div`
  height: 68px;
  width: 68px;
  border-radius: 10px;
  background-color: #000;
  margin: 8px 0 8px 0;

  &:hover {
    cursor: pointer;
  }
`;
