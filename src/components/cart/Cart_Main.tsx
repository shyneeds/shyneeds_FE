import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  reservationPackages,
  reservationProductNum,
  deleteReservationInfo,
} from '../../features/userReservation/userReservationSlice';
import { useNavigate } from 'react-router';

export default function Cart_Main() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<number[]>([]);
  const totalPrice = useRef<number>(0);
  const reservations = useAppSelector(reservationPackages);
  const productNum = useAppSelector(reservationProductNum);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  console.log(productNum);
  console.log(reservations);

  return (
    <>
      <Wrap>
        <Cart_Wrap>
          <Cart_Text>관심상품</Cart_Text>
          <Cart_Info_Wrap>
            <Cart_SelectBtn
              onClick={() => {
                reservations.map((reservation, i) => {
                  if (!isChecked) {
                    if (!isAdded.includes(i)) {
                      totalPrice.current += Number(
                        reservation.totalPrice.replaceAll(',', '')
                      );
                      setIsAdded((isAdded) => [...isAdded, i]);
                    }
                  } else {
                    totalPrice.current = 0;
                    setIsAdded([]);
                  }
                  setIsChecked(!isChecked);
                });
              }}
              type="checkbox"
              readOnly
            ></Cart_SelectBtn>
            <Cart_Info_Text>상품 정보</Cart_Info_Text>
            <Cart_Info_Num>인원</Cart_Info_Num>
            <Cart_Info_Price>예약금액</Cart_Info_Price>
          </Cart_Info_Wrap>
          <Cart_Product>
            {reservations.map((reservation, i) => (
              <Cart_Product_Wrap key={i}>
                <Cart_SelectBtn
                  onClick={() => {
                    if (!isAdded.includes(i)) {
                      totalPrice.current += Number(
                        reservation.totalPrice.replaceAll(',', '')
                      );
                      setIsAdded((isAdded) => [...isAdded, i]);
                    } else {
                      totalPrice.current -= Number(
                        reservation.totalPrice.replaceAll(',', '')
                      );
                      setIsAdded(isAdded.filter((add) => add != i));
                    }
                  }}
                  type="checkbox"
                  checked={isAdded.includes(i)}
                  readOnly
                ></Cart_SelectBtn>
                <Cart_Product_Info>
                  <Cart_Product_Img
                    src={reservation.mainImage}
                  ></Cart_Product_Img>
                  <Cart_Product_Info_Wrap>
                    <Cart_Prouct_Name>
                      {reservation.productTitle}
                    </Cart_Prouct_Name>
                    <Cart_Prouct_Option_Wrap>
                      <Cart_Prouct_Option>
                        {reservation.reservationPackages.map(
                          (reservationPackage) => {
                            return (
                              <p key={reservationPackage.optionTitle}>
                                {reservationPackage.optionTitle}
                                {'     -      '}
                                {'[' + reservationPackage.optionValue + ']'}
                              </p>
                            );
                          }
                        )}
                      </Cart_Prouct_Option>
                    </Cart_Prouct_Option_Wrap>
                  </Cart_Product_Info_Wrap>
                </Cart_Product_Info>
                <Cart_Product_Num>
                  <Cart_Product_Num_Text>
                    {reservation.productNum + '명'}
                  </Cart_Product_Num_Text>
                </Cart_Product_Num>
                <Cart_Product_Price>
                  <Cart_Product_Price_Text>
                    {reservation.totalPrice + '원'}
                  </Cart_Product_Price_Text>
                </Cart_Product_Price>
              </Cart_Product_Wrap>
            ))}
          </Cart_Product>
          <Cart_Delete_Btn
            onClick={() => {
              isAdded.map((add) => {
                dispatch(deleteReservationInfo(add));
                console.log(add);
              });
              isAdded.map((add) => {
                setIsAdded(isAdded.filter((isAdd) => isAdd !== add));
                totalPrice.current -= Number(
                  reservations[add].totalPrice.replaceAll(',', '')
                );
              });
            }}
          >
            선택상품 삭제
          </Cart_Delete_Btn>
          <Cart_Price_Wrap>
            <Cart_Total_Num>
              <p>총 주문 상품</p>
            </Cart_Total_Num>
            <Cart_Total_Price>
              <Cart_Total_Price_Num>
                {totalPrice.current
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                원
              </Cart_Total_Price_Num>
              <Cart_Total_Price_Text>총 예약금액</Cart_Total_Price_Text>
            </Cart_Total_Price>
          </Cart_Price_Wrap>
          <Cart_Price_Btn_Wrap>
            <Cart_Reservation_Btn onClick={() => navigate('/reservation')}>
              <p>예약하기</p>
            </Cart_Reservation_Btn>
          </Cart_Price_Btn_Wrap>
        </Cart_Wrap>
      </Wrap>
    </>
  );
}

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
`;
const Cart_Wrap = styled.section`
  width: 65%;
  height: 100%;
`;
const Cart_Text = styled.p`
  display: flex;
  align-items: center;
  font-family: 'Pretendard';
  font-size: 25px;
  font-weight: 500;
  height: 100px;
`;
const Cart_Product = styled.section`
  overflow-y: auto;
  height: 400px;
`;
const Cart_Info_Wrap = styled.section`
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(33, 33, 33, 0.15);
  border-bottom: 1px solid rgba(33, 33, 33, 0.15);
  height: 50px;
`;
const Cart_SelectBtn = styled.input`
  width: 5%;
`;
const Cart_Info_Text = styled.p`
  width: 45%;
`;
const Cart_Info_Num = styled.p`
  width: 20%;
  text-align: center;
`;
const Cart_Info_Price = styled.p`
  width: 30%;
  text-align: center;
`;
const Cart_Product_Wrap = styled.section`
  display: flex;
  align-items: center;
  height: 130px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.15);
`;
const Cart_Product_Info = styled.section`
  display: flex;
  align-items: center;
  width: 45%;
  height: 100%;
  border-right: 1px solid rgba(33, 33, 33, 0.15);
`;
const Cart_Product_Img = styled.img`
  width: 100px;
  height: 70%;
`;
const Cart_Product_Info_Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Cart_Prouct_Name = styled.p`
  padding: 10px;
  width: 100%;
  height: 40%;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #666666;
`;
const Cart_Prouct_Option_Wrap = styled.section`
  padding: 10px;
  width: 100%;
  height: 40%;
`;
const Cart_Prouct_Option = styled.section`
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #666666;
  }
`;
const Cart_Product_Num = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;
  border-right: 1px solid rgba(33, 33, 33, 0.15);
`;
const Cart_Product_Num_Text = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 540;
  font-size: 20px;
  line-height: 24px;
  color: #666666;
`;
const Cart_Product_Price = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
`;
const Cart_Product_Price_Text = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 24px;
`;
const Cart_Delete_Btn = styled.button`
  border: 1px solid rgba(33, 33, 33, 0.15);
  cursor: pointer;
  height: 30px;
  width: 100px;
  margin: 20px 0 20px 0;
`;
const Cart_Price_Wrap = styled.section`
  border-top: 1px solid;
  border-bottom: 1px solid;
  height: 200px;
  width: 100%;
`;
const Cart_Total_Num = styled.p`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid rgba(33, 33, 33, 0.15);
  display: flex;
  align-items: center;
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
  }
`;
const Cart_Total_Price = styled.section`
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Cart_Total_Price_Num = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: #0080c6;
`;
const Cart_Total_Price_Text = styled.p`
  margin-top: 10px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 550;
  color: #212529;
`;
const Cart_Price_Btn_Wrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
`;
const Cart_Reservation_Btn = styled.button`
  background: #4286f4;
  width: 200px;
  height: 40px;
  cursor: pointer;

  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: white;
  }
`;
