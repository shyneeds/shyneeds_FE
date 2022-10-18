import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { userToken, userId } from '../../features/kakaoLogin/kakaoLoginSlice';

const Reservation = () => {
  const userIdValue = useAppSelector(userId);
  const token = useAppSelector(userToken);

  const [booking, setBooking] = useState<any>([]);

  useEffect(() => {
    axios({
      method: 'post',
      url: `http://13.125.151.45:8080/api/reservation/user/${userIdValue}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    }).then((res) => {
      console.log(res);
      // setBooking(res);
      // dispatch(email(datas.userInfo.email));
    });
  }, []);
  console.log(booking);
  console.log(token);
  console.log(userIdValue);

  return (
    <div>
      <h2>예약조회</h2>
      <ContentsResultBox>예약내역이 없습니다.</ContentsResultBox>
    </div>
  );
};
const ContentsResultBox = styled.div`
  padding: 100px;
  text-align: center;
`;
export default Reservation;
