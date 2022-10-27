import styled from 'styled-components';

export const WatchedStorage = () => {
  return (
    <Container>
      <TextWrapper>
        <span>최근 본 상품</span>
        <Quantity>({length})</Quantity>
      </TextWrapper>
      <StorageWrapper>
        <EmptyDiv>
          <p>
            최근 본 상품이
            <br />
            없습니다.
          </p>
          {/* <Storage>
            <Product />
          </Storage> */}
        </EmptyDiv>
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
  height: 80px;
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
  padding: 8px 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Product = styled.div`
  width: 100px;
  height: 60px;
  border-radius: 4px;
  background-color: #666;
  margin: auto;
  padding: 4px 8px;
`;
