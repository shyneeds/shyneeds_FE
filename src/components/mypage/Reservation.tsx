import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { userReservationList } from '../../features/userData/userDataSlice';
// export interface YourType {
//   children?: React.ReactNode
// }

const Reservation = () => {
  const reservationList = useAppSelector(userReservationList);
  // const Listlength = useAppSelector(userListlength);
  console.log(reservationList.length);
  // reservationList.length = 0;
  reservationList.map((data: any) => {
    console.log(data);
  });
  // const test = [1, 2, 3];
  return (
    <ReservationBox>
      <h2>예약조회</h2>
      {reservationList.length === 0 ? (
        <ContentsResultBox>예약내역이 없습니다.</ContentsResultBox>
      ) : (
        reservationList.map((data: any) => {
          return (
            <Product key={data.reservationNumber}>
              <p>
                예약번호 <span>{data.reservationNumber}</span>
              </p>
              <ProductMain>
                <ProductInfo>
                  <img src={data.reservationPackage[0].imageUrl} alt="" />
                  <ProductText>
                    <Text fontWeight="700">
                      {data.reservationPackage[0].title}
                    </Text>
                    <Text fontWeight="400">
                      {data.reservationPackage[1].optionValue}
                    </Text>
                    <Text fontWeight="400">
                      {data.totalReservationAmount}원
                    </Text>
                  </ProductText>
                </ProductInfo>
                <Cancel>
                  <p>취소</p>
                </Cancel>
              </ProductMain>
            </Product>
          );
        })
      )}
    </ReservationBox>
  );
};

const ReservationBox = styled.div`
  > h2 {
    margin: 0 0 4px;
    font-weight: 700;
    font-size: 1.8rem;
    color: #666666;
  }
`;

const ContentsResultBox = styled.div`
  padding: 100px;
  text-align: center;
`;
const Product = styled.div`
  margin: 0 0 28px;

  > p {
    padding: 12px 0;
    color: #666;
    font-weight: 500;
    font-size: 1rem;
  }
  > p > span {
    margin: 0 0 0 15px;
    color: #4286f4;
  }
`;
const ProductMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 48px 36px;
  border: 1px solid #e9ecef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
const ProductInfo = styled.div`
  width: 568px;
  border-right: 1px solid #d9d9d9;
  > img {
    width: 74px;
    height: 74px;
    float: left;
    margin: 0 20px 0 0;
    border-radius: 6px;
  }
`;
const Cancel = styled.div`
  width: 186px;
  text-align: center;
  float: left;
  > p {
    display: inline-block;
    width: 80px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    color: #666;
  }
`;
const ProductText = styled.div`
  float: left;
`;
const Text = styled.p<{
  fontWeight: string;
}>`
  margin: 0 0 10px;
  color: #666666;
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight};
`;

export default Reservation;
