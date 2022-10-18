import React from 'react';
import styled from 'styled-components';

const Reservation = () => {
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
