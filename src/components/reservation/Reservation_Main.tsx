import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { reservationProductId } from '../../features/userReservation/userReservationSlice';

export default function Reservation_Main() {
  const productId = useAppSelector(reservationProductId);
  console.log(productId);
  return <ProductImg src={productId} />;
}

const ProductImg = styled.img`
  width: 720px;
`;
