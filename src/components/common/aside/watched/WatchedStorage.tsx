import { Link } from 'react-router-dom';
import styled from 'styled-components';

// localStorage.clear();
export const WatchedStorage = () => {
  return (
    <Container>
      <TextWrapper>
        <span>최근 본 상품</span>
        <Quantity>({localStorage.length - 1})</Quantity>
      </TextWrapper>
      <StorageWrapper>
        {localStorage.length === 0 ? (
          <EmptyDiv>
            <p>
              최근 본 상품이
              <br />
              없습니다.
            </p>
          </EmptyDiv>
        ) : (
          <Storage>
            <Link to="/offers/">
              <Product />
            </Link>
          </Storage>
        )}
      </StorageWrapper>
    </Container>
  );
};

const Container = styled.div`
  z-index: 999;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  margin: auto;
`;

const Quantity = styled.span`
  color: #4286f4;
`;

const StorageWrapper = styled.div`
  width: 120px;
  background-color: #f9f9f9;
  text-align: center;
  padding: 16px;
`;

const EmptyDiv = styled.div`
  width: 80px;
  height: 48px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
`;

const Storage = styled.div`
  border-top: 1px solid #eeeeee;

  &:hover {
    cursor: pointer;
  }
`;

const Product = styled.div`
  height: 60px;
  border-radius: 4px;
  background-color: #666;
`;
