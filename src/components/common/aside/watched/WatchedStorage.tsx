import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../../app/hooks';
import { useAppDispatch } from '../../../../app/store';
import { productId } from '../../../../features/main/productSlice';

export const WatchedStorage = () => {
  const dispatch = useAppDispatch();

  // const test: string | null = localStorage.getItem('WATCHED_PRODUCTS');
  // const testArr: any = useRef<string[]>([]);
  // useEffect((): void => {
  //   if (!testArr.current.includes(test)) {
  //     if (testArr.current.length === 2) {
  //       testArr.current.shift();
  //     }
  //     testArr.current.push(test);
  //   } else {
  //     testArr.current = testArr.current.filter((el: any) => {
  //       return el !== test;
  //     });
  //     testArr.current.push(test);
  //   }
  // }, [test]);

  // console.log(test);
  // console.log(testArr);
  // console.log(testArr.current);

  // useEffect(() => {
  //   const id = useAppSelector(productId);
  //   let get_local: any = localStorage.getItem('WATCHED_PRODUCTS');

  //   if (get_local == null) {
  //     get_local = [];
  //   } else {
  //     get_local = JSON.parse(get_local);
  //   }

  //   get_local.push(id);
  //   get_local = new Set(get_local);
  //   get_local = [...get_local];
  //   localStorage.setItem('WATCHED_PRODUCTS', JSON.stringify(get_local));
  // }, []);

  return (
    <Container>
      <TextWrapper>
        <span>최근 본 상품</span>
        {/* <Quantity>({localStorage.WATCHED_PRODUCTS.length})</Quantity> */}
      </TextWrapper>
      <StorageWrapper>
        <EmptyDiv>
          <p>
            최근 본 상품이
            <br />
            없습니다.
          </p>
        </EmptyDiv>
        {/* <Storage>
          <Product />
        </Storage>
        <Storage>
          <Product />
        </Storage> */}
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
