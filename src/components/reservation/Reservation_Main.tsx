import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  reservationPackages,
  reservationPackageType,
  reservationPayInfos,
  deleteClickedReservationInfo,
} from '../../features/userReservation/userReservationSlice';
import { userToken } from '../../features/kakaoLogin/kakaoLoginSlice';

interface userInfoType {
  depositorName: string | undefined;
  paymentAccountBank: string;
  paymentAccountHolder: string;
  paymentAccountNumber: string;
  paymentMethod: string;
  reservationPackages: reservationPackageType[];
  reservatorEmail: string | undefined;
  reservatorName: string | undefined;
  reservatorPhoneNumber: string | undefined;
  serviceTerms: boolean;
  totalReservationAmount: string | undefined;
}

export default function Reservation_Main() {
  const [userName, setUserName] = useState<string>();
  const [userEmail, setUserEmail] = useState<string>();
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>();
  const [submitName, setSubmitName] = useState<string>();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const reservations = useAppSelector(reservationPayInfos);
  const reserv = useAppSelector(reservationPackages);
  const token = useAppSelector(userToken);
  const dispatch = useAppDispatch();

  console.log(reservations);
  console.log(reserv);

  const submitSave = () => {
    const totalReservationPackages: reservationPackageType[] = [];
    reservations.map((reservation) => {
      reservation.reservationPackages.map((reservationPackage) => {
        totalReservationPackages.push(reservationPackage);
      });
    });
    const data: userInfoType = {
      depositorName: submitName ? submitName : userName,
      paymentAccountBank: '신한은행',
      paymentAccountHolder: '더 샤이니',
      paymentAccountNumber: '100-3333-4444',
      paymentMethod: '무통장 입금',
      reservationPackages: totalReservationPackages,
      reservatorEmail: userEmail,
      reservatorName: userName,
      reservatorPhoneNumber: userPhoneNumber,
      serviceTerms: true,
      totalReservationAmount: totalPrice
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
    };
    console.log(data);
    axios({
      method: 'post',
      url: 'http://13.125.151.45:8080/api/reservation/user',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    }).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    setTotalPrice(0);
    let tempPrice = 0;
    {
      reservations.map(
        (reservation) =>
          (tempPrice += Number(reservation.totalPrice.replaceAll(',', '')))
      );
    }
    setTotalPrice(tempPrice);
  }, [reservations]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://13.125.151.45:8080/api/my/user`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setUserName(res.data.data.userInfo.name);
      setUserPhoneNumber(res.data.data.userInfo.phoneNumber);
      setUserEmail(res.data.data.userInfo.email);
    });
  }, []);

  return (
    <Wrap>
      <MainWrap>
        <TextWrap>
          <Reservation_Text>결제하기</Reservation_Text>
        </TextWrap>
        <ReservationWrap>
          <Reservation_Product>
            <Reservation_Product_Text>예약 상품 정보</Reservation_Product_Text>
            {reservations.map((reservation) => (
              <Reservation_Product_Wrap key={reservation.productTitle}>
                <Reservation_Product_Img src={reservation.mainImage} />
                <Reservation_Product_Option_Wrap>
                  <Reservation_Product_Name>
                    {reservation.productTitle}
                  </Reservation_Product_Name>
                  <Reservation_Product_Option>
                    {reservation.reservationPackages.map(
                      (reservationPackage) => {
                        if (reservationPackage.optionTitle !== null) {
                          return (
                            <p key={reservationPackage.optionTitle}>
                              {reservationPackage.optionTitle}
                              {'     -      '}
                              {'[' + reservationPackage.optionValue + ']'}
                            </p>
                          );
                        }
                      }
                    )}
                  </Reservation_Product_Option>
                  <Reservation_Product_Price>
                    {reservation.totalPrice}
                  </Reservation_Product_Price>
                  <Reservation_Product_ProductNum>
                    {reservation.productNum + '명'}
                  </Reservation_Product_ProductNum>
                </Reservation_Product_Option_Wrap>
                <Reservation_Product_Option_Btn>
                  {reservation.reservationPackages.map(
                    (reservationPackage, i) => {
                      if (i < 1) {
                        return (
                          <button
                            key={i}
                            onClick={() => {
                              console.log(reservationPackage.travelPackageId);
                              dispatch(
                                deleteClickedReservationInfo(
                                  reservationPackage.travelPackageId
                                )
                              );
                            }}
                          >
                            <p>X</p>
                          </button>
                        );
                      }
                    }
                  )}
                </Reservation_Product_Option_Btn>
              </Reservation_Product_Wrap>
            ))}
          </Reservation_Product>
          <Reservation_User>
            <Reservation_Product_Text>예약자 정보</Reservation_Product_Text>
            <Reservation_User_Wrap>
              <Reservation_User_Name
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              ></Reservation_User_Name>
              <Reservation_User_PhoneNumber
                value={userPhoneNumber}
                onChange={(e) => {
                  setUserPhoneNumber(e.target.value);
                }}
              ></Reservation_User_PhoneNumber>
              <Reservation_User_Email
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              ></Reservation_User_Email>
              <Reservation_User_Save>저장</Reservation_User_Save>
            </Reservation_User_Wrap>
          </Reservation_User>
          <Reservation_Summary>
            <Reservation_Summary_TotalWrap>
              <Reservation_Summary_Total_Text>
                총 예약금액
              </Reservation_Summary_Total_Text>
              <Reservation_Summary_Total_Num>
                {totalPrice
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + '원'}
              </Reservation_Summary_Total_Num>
            </Reservation_Summary_TotalWrap>
          </Reservation_Summary>
          <Reservation_Payment>
            <Reservation_Product_Text className="payment">
              결제 수단
            </Reservation_Product_Text>
            <Reservation_Payment_Wrap>
              <Reservation_Payment_Btn type="checkbox" />
              <Reservation_Payment_Text>무통장입금</Reservation_Payment_Text>
              <Reservation_Payment_Bank>
                <option value="신한은행 100-035-493389 (주)더샤이니">
                  {'신한은행 100-035-493389 (주)더샤이니'}
                </option>
              </Reservation_Payment_Bank>
              <Reservation_Payment_Name
                onChange={(e) => setSubmitName(e.target.value)}
                placeholder="입금자명 (미입력시 예약자명)"
              ></Reservation_Payment_Name>
            </Reservation_Payment_Wrap>
          </Reservation_Payment>
          <Reservation_Agree></Reservation_Agree>
          <Reservation_Button
            onClick={() => {
              submitSave();
            }}
          >
            <p>결제하기</p>
          </Reservation_Button>
        </ReservationWrap>
      </MainWrap>
    </Wrap>
  );
}

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const MainWrap = styled.section`
  position: absolute;
  width: 70vw;
  height: 90vh;
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
  height: 65%;
  left: 30px;
  padding: 25px;
  background: white;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Reservation_Product_Text = styled.p`
  width: 100%;
  height: 10%;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  &.price {
    height: 30%;
  }
  &.payment {
    height: 30%;
  }
`;
const Reservation_Product_Wrap = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100px;
  margin: 10px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.15);
`;
const Reservation_Product_Img = styled.img`
  width: 100px;
  height: 100px;
`;
const Reservation_Product_Option_Wrap = styled.section`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
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
  height: 40px;
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 15px;
  color: gray;
  overflow-y: auto;
`;
const Reservation_Product_Option_Btn = styled.section`
  position:absolute
  align-items: center;
  justify-content: center;
  width: 10%;
  button {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  p {
    display: flex;
    font-size: 20px;
  }
`;
const Reservation_Product_Price = styled.p`
  width: 300px;
  height: 20px;
  margin-top: 5px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;
const Reservation_Product_ProductNum = styled.p`
  width: 300px;
  height: 25px;
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 15px;
  color: gray;
`;
const Reservation_User = styled.section`
  position: absolute;
  width: 60%;
  height: 30%;
  left: 30px;
  bottom: 0;
  background: white;
  padding: 25px;
`;
const Reservation_User_Wrap = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 30px;
  width: 100%;
  height: 100px;
`;
const Reservation_User_Name = styled.input`
  margin-bottom: 5px;
  width: 50%;
  height: 30px;
  font-family: 'Pretendard';
  font-weight: 600;
  font-style: normal;
  font-size: 15px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.15);
`;
const Reservation_User_PhoneNumber = styled.input`
  margin-bottom: 5px;
  width: 50%;
  height: 30px;
  font-family: 'Pretendard';
  font-weight: 600;
  font-style: normal;
  font-size: 15px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.15);
`;
const Reservation_User_Email = styled.input`
  margin-bottom: 5px;
  width: 50%;
  height: 30px;
  font-family: 'Pretendard';
  font-weight: 600;
  font-style: normal;
  font-size: 15px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.15);
`;
const Reservation_User_Save = styled.button`
  position: absolute;
  width: 100px;
  height: 50%;
  right: 30px;
  bottom: 30px;
  color: white;
  background: #4286f4;
  cursor: pointer;
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
`;

const Reservation_Summary = styled.section`
  position: absolute;
  width: 30%;
  height: 25%;
  right: 30px;
  background: white;
  padding: 25px;
`;
const Reservation_Summary_TotalWrap = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 35%;
  width: 100%;
`;
const Reservation_Summary_Total_Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Pretendard';
  font-weight: 600;
  font-style: normal;
  font-size: 20px;
`;
const Reservation_Summary_Total_Num = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: #0080c6;
`;
const Reservation_Payment = styled.section`
  position: absolute;
  width: 30%;
  height: 35%;
  right: 30px;
  top: 30%;
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
  background: #4286f4;
  bottom: 0%;
  cursor: pointer;
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
`;
