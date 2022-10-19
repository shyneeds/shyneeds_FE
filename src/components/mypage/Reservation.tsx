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
  const test = [1, 2, 3];
  return (
    <>
      {reservationList.map((data: any) => {
        return (
          <span key={data.reservationNumber}>{data.reservationNumber}</span>
        );
      })}
      <h2>dd</h2>
    </>
  );
};

const ContentsResultBox = styled.div`
  padding: 100px;
  text-align: center;
`;

export default Reservation;
