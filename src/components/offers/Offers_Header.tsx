import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getOfferData } from './Offers_Type';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  productId,
  minusNum,
  plusNum,
  reservationProductNum,
} from '../../features/userReservation/userReservationSlice';
import { useNavigate } from 'react-router';
export default function Offers_Header() {
  const [datas, setDatas] = useState<getOfferData | null>(null);
  const productNum = useAppSelector(reservationProductNum);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://13.125.151.45:8080/api/package/admin/2',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEwMEBnbWFpbC5jb20iLCJhdXRoIjoiQURNSU4iLCJleHAiOjE4MjMxNTg5MTF9.XHWNGrugeIW1gYvVme_lDfcRQ6g0qriLqOfMTi592RY',
      },
    }).then((res) => setDatas(res.data.data));
  }, []);

  console.log(datas);

  return (
    <>
      <ProductWrap>
        <Product_Img src={datas?.mainImage}></Product_Img>
        <InfoWrap>
          <Info>
            <Product_Name>여자끼리 파타고니아</Product_Name>
            <Product_Price>{datas?.price}</Product_Price>
            <Product_Summary>{datas?.summary}</Product_Summary>
            <Product_Area>그리스</Product_Area>
            <Product_Feature>포함투어 10개</Product_Feature>
            <Product_Airplane>{datas?.flightInfo}</Product_Airplane>
            <Product_Option>
              <option value="5">5개</option>
              <option value="10">10개</option>
            </Product_Option>
            <PriceWrap>
              <Product_Num>
                <p>인원</p>
                <People_Num>
                  <Num_Plus onClick={() => dispatch(minusNum())}>-</Num_Plus>
                  <Num_Value>{productNum}</Num_Value>
                  <Num_Minus onClick={() => dispatch(plusNum())}>+</Num_Minus>
                </People_Num>
              </Product_Num>
              <Product_Total_Price>
                <Price_Text>총 상품 금액</Price_Text>
                <Total_Price>{Number(datas?.price)}</Total_Price>
              </Product_Total_Price>
            </PriceWrap>
            <ButtonWrap>
              <Button_Reservation
                onClick={() => {
                  datas ? dispatch(productId(datas?.mainImage)) : '';
                  navigate('/reservation');
                }}
              >
                <p>예약하기</p>
              </Button_Reservation>
              <Button_Cart>
                <p>장바구니</p>
              </Button_Cart>
            </ButtonWrap>
          </Info>
        </InfoWrap>
      </ProductWrap>
      <OfferWrap>
        <Offer_Img src={datas?.descriptionImage[0]}></Offer_Img>
      </OfferWrap>
    </>
  );
}

const ProductWrap = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
`;

const Product_Img = styled.img`
  position: absolute;
  // width: 500px;
  // height: 500px;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30%;
  right: 50px;
  top: 50%;
  transform: translate(0, -50%);
  height: 500px;
  // z-index: 1;
  background: rgba(255, 255, 255, 0.77);
`;
const Info = styled.div`
  width: 80%;
  height: 80%;
`;
const Product_Name = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 24px;
`;
const Product_Price = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 24px;
`;
const Product_Summary = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
const Product_Area = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
`;
const Product_Feature = styled.p``;
const Product_Airplane = styled.p``;
const Product_Option = styled.select`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  height: 50px;
  color: #444;
  background: #f9f9f9;
  border: 1px solid #cccccc;
  padding: 0.3em 0.7em 0.2em 0.4em;

  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #888;
  }
  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 2px rgba(59, 153, 252, 0.7);
    color: #222;
    outline: none;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
const PriceWrap = styled.section`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  background: #f9f9f9;
  border: 1px solid #cccccc;
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }
`;
const Product_Num = styled.div`
  height: 50%;
  display: flex;
`;
const People_Num = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  border: 1px solid #333333;
`;
const Num_Plus = styled.button`
  width: 30%;
  cursor: pointer;
`;
const Num_Value = styled.p`
  width: 40%;
`;
const Num_Minus = styled.button`
  width: 30%;
  cursor: pointer;
`;

const Product_Total_Price = styled.div`
  display: flex;
  height: 50%;
`;
const Price_Text = styled.p``;
const Total_Price = styled.p``;
const ButtonWrap = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
`;
const Button_Reservation = styled.button`
  background: #4286f4;
  width: 120px;
  height: 40px;
  cursor: pointer;
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: white;
  }
`;
const Button_Cart = styled.button`
  background: #4286f4;
  width: 120px;
  height: 40px;
  cursor: pointer;
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: white;
  }
`;
const OfferWrap = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Offer_Img = styled.img`
  width: 60%;
`;
