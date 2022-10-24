import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { reservationProductPrice } from '../../features/userReservation/userReservationSlice';

export default function Reservation_Main() {
  return (
    <Wrap>
      <MainWrap>
        <TextWrap>
          <Reservation_Text>결제하기</Reservation_Text>
        </TextWrap>
        <ReservationWrap>
          <Reservation_Product>
            <Reservation_Product_Text>예약 상품 정보</Reservation_Product_Text>
            <Reservation_Product_Wrap>
              {/* <Reservation_Product_Img src={null} /> */}
              <Reservation_Product_Option_Wrap>
                <Reservation_Product_Name>
                  5080의 버킷리스트
                </Reservation_Product_Name>
                <Reservation_Product_Option>
                  ㅁㅁㅁㅁㅁㅁ
                </Reservation_Product_Option>
                <Reservation_Product_Price>
                  1,000,000원
                </Reservation_Product_Price>
              </Reservation_Product_Option_Wrap>
            </Reservation_Product_Wrap>
          </Reservation_Product>
          <Reservation_User>
            <Reservation_Product_Text>예약자 정보</Reservation_Product_Text>
            <Reservation_User_Wrap>
              <Reservation_User_Name></Reservation_User_Name>
              <Reservation_User_PhoneNumber></Reservation_User_PhoneNumber>
              <Reservation_User_Email></Reservation_User_Email>
            </Reservation_User_Wrap>
          </Reservation_User>
          <Reservation_Summary>
            <Reservation_Product_Text>주문 요약</Reservation_Product_Text>
            <Reservation_Summary_PriceWrap>
              <Reservation_Summary_Price_Text>
                상품가격
              </Reservation_Summary_Price_Text>
              <Reservation_Summary_Price_Num>
                200000000원
              </Reservation_Summary_Price_Num>
            </Reservation_Summary_PriceWrap>
            <Reservation_Summary_TotalWrap>
              <Reservation_Summary_Total_Text>
                총 예약금액
              </Reservation_Summary_Total_Text>
              <Reservation_Summary_Total_Num>
                200000000원
              </Reservation_Summary_Total_Num>
            </Reservation_Summary_TotalWrap>
          </Reservation_Summary>
          <Reservation_Payment>
            <Reservation_Product_Text>결제 수단</Reservation_Product_Text>
            <Reservation_Payment_Wrap>
              <Reservation_Payment_Btn type="checkbox" />
              <Reservation_Payment_Text>무통장입금</Reservation_Payment_Text>
              <Reservation_Payment_Bank></Reservation_Payment_Bank>
              <Reservation_Payment_Name></Reservation_Payment_Name>
            </Reservation_Payment_Wrap>
          </Reservation_Payment>
          <Reservation_Agree></Reservation_Agree>
          <Reservation_Button>
            <p>결제하기</p>
          </Reservation_Button>
        </ReservationWrap>
      </MainWrap>
    </Wrap>
  );
}

const Reservation_Product_Text = styled.p`
  width: 100%;
  height: 30%;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
`;

const Wrap = styled.section`
  width: 100vw;
  height: 100vh;
`;
const MainWrap = styled.section`
  position: absolute;
  width: 70vw;
  height: 90vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #f5f5f5;
`;
const TextWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
`;
const Reservation_Text = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 540;
  font-size: 30px;
  line-height: 24px;
`;
const ReservationWrap = styled.section`
  position: relative;
  width: 100%;
  height: 80%;
`;
const Reservation_Product = styled.section`
  position: absolute;
  width: 60%;
  height: 30%;
  left: 30px;
  padding: 25px;
  background: white;
`;
const Reservation_Product_Wrap = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70%;
`;
const Reservation_Product_Img = styled.img`
  width: 100px;
  height: 100px;
`;
const Reservation_Product_Option_Wrap = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
const Reservation_Product_Name = styled.p`
  width: 300px;
  height: 25px;
  font-family: 'Pretendard';
  font-weight: 600;
  font-style: normal;
  font-size: 15px;
`;
const Reservation_Product_Option = styled.p`
  width: 300px;
  height: 25px;
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 15px;
  color: gray;
`;
const Reservation_Product_Price = styled.p`
  width: 300px;
  height: 25px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;
const Reservation_User = styled.section`
  position: absolute;
  width: 60%;
  height: 30%;
  left: 30px;
  top: 35%;
  background: white;
  padding: 25px;
`;
const Reservation_User_Wrap = styled.section``;
const Reservation_User_Name = styled.p``;
const Reservation_User_PhoneNumber = styled.p``;
const Reservation_User_Email = styled.p``;

const Reservation_Summary = styled.section`
  position: absolute;
  width: 30%;
  height: 30%;
  right: 30px;
  background: white;
  padding: 25px;
`;
const Reservation_Summary_PriceWrap = styled.section`
  height: 35%;
  display: flex;
`;
const Reservation_Summary_Price_Text = styled.p``;
const Reservation_Summary_Price_Num = styled.p``;

const Reservation_Summary_TotalWrap = styled.section`
  height: 35%;
  display: flex;
`;
const Reservation_Summary_Total_Text = styled.p``;
const Reservation_Summary_Total_Num = styled.p``;
const Reservation_Payment = styled.section`
  position: absolute;
  width: 30%;
  height: 30%;
  right: 30px;
  top: 35%;
  background: white;
  padding: 25px;
`;
const Reservation_Payment_Wrap = styled.section`
  position: relative;
  height: 70%;
`;
const Reservation_Payment_Btn = styled.input`
  position: absolute;
  width: 15px;
  height: 15px;
`;
const Reservation_Payment_Text = styled.p`
  position: absolute;

  left: 30px;
  width: 100px;
  height: 15px;
`;
const Reservation_Payment_Bank = styled.select`
  position: absolute;

  top: 40px;
  width: 100%;
  height: 30px;
  border: 1px solid #cccccc;
`;
const Reservation_Payment_Name = styled.input`
  position: absolute;
  top: 80px;
  width: 100%;
  height: 30px;
  border: 1px solid #cccccc;
`;
const Reservation_Agree = styled.section`
  position: absolute;
  width: 30%;
  height: 20%;
  right: 30px;
  top: 70%;
  background: white;
`;
const Reservation_Button = styled.button`
  position: absolute;
  width: 30%;
  height: 10%;
  right: 30px;
  color: white;
  background: skyblue;
  bottom: 0%;
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
`;
