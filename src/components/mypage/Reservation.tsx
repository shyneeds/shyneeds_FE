import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { userReservationList } from '../../features/userData/userDataSlice';
import { Link } from 'react-router-dom';
import { cancelNum } from '../../features/userData/userDataSlice';
import CancelDetail from './CancelDetail';

const Reservation = () => {
  const reservationList = useAppSelector<any>(userReservationList);
  const [dtpopup, setDtPopup] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const dtTogglePop = () => {
    setDtPopup(!dtpopup);
  };
  // useEffect(() => {
  //   console.log(reservationList);
  // }, []);
  // console.log('예약상품리스트' + reservationList);
  return (
    <ReservationBox>
      <h2>예약조회</h2>
      {reservationList.length === 0 ? (
        <ContentsResultBox>예약내역이 없습니다.</ContentsResultBox>
      ) : (
        reservationList.map((data: any, i: number) => {
          console.log('data: ' + JSON.stringify(data));
          // console.log('이미지주소' + data.reservationPackage[0].imageUrl);
          return (
            <Product key={data.reservationId}>
              <p>
                예약번호 <span>{data.reservationNumber}</span>
              </p>
              <ProductMain>
                <ProductInfo>
                  {data.reservationPackage[0]?.imageUrl !== undefined ? (
                    <img src={data.reservationPackage[0].imageUrl} alt="" />
                  ) : null}

                  <ProductText>
                    <Text fontWeight="700">
                      {data.reservationPackage[0]?.title}
                    </Text>
                    <Text fontWeight="400">
                      {data.reservationPackage[0]
                        ? data.reservationPackage[0]?.optionValue
                        : null}
                    </Text>
                    <Text fontWeight="400">
                      {data.totalReservationAmount}원
                    </Text>
                  </ProductText>
                  {data.reservationStatus.includes('입금대기') ? (
                    <OrderStatus fontColor="#4286F4">
                      {data.reservationStatus}
                    </OrderStatus>
                  ) : data.reservationStatus.includes('예약취소') ? (
                    <OrderStatus fontColor="#EA4335">
                      {data.reservationStatus}
                    </OrderStatus>
                  ) : data.reservationStatus.includes('예약확정') ? (
                    <OrderStatus fontColor="#34A853">
                      {data.reservationStatus}
                    </OrderStatus>
                  ) : data.reservationStatus.includes('입금완료') ? (
                    <OrderStatus fontColor="#000">
                      {data.reservationStatus}
                    </OrderStatus>
                  ) : null}
                </ProductInfo>
                <Cancel
                  data-key={i}
                  // onClick={(e: any) =>
                  //   dispatch(cancelNum(e.currentTarget.dataset.key))
                  // }
                  onClick={(e: any) =>
                    dispatch(cancelNum(e.currentTarget.dataset.key))
                  }
                >
                  {data.reservationStatus.includes('예약취소') ? (
                    <CancelDt onClick={() => setDtPopup(!dtpopup)}>
                      취소상세
                    </CancelDt>
                  ) : (
                    <Link to="/mypage/cancel">취소</Link>
                  )}
                </Cancel>
                {dtpopup === true && <CancelDetail dtTogglePop={dtTogglePop} />}
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
    margin: 0 0 8px;
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
  margin: 0 0 30px;

  > p {
    padding: 15px 0;
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
  padding: 45px 36px;
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
const ProductText = styled.div`
  float: left;
  width: 380px;
`;
const Text = styled.p<{
  fontWeight: string;
}>`
  margin: 0 0 10px;
  color: #666666;
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight};
`;

const OrderStatus = styled.p<{
  fontColor: string;
}>`
  float: left;
  color: ${(props) => props.fontColor};
  font-weight: 700;
`;

const Cancel = styled.div`
  width: 186px;
  text-align: center;
  float: left;
  > a {
    display: inline-block;
    width: 80px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    color: #666;
  }
`;
const CancelDt = styled.p`
  display: inline-block;
  width: 80px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  color: #666;
  cursor: pointer;
`;
export default Reservation;
