import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getOfferData } from './Offers_Type';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  productId,
  productPrice,
  minusNum,
  plusNum,
  reservationProductNum,
} from '../../features/userReservation/userReservationSlice';
import { useNavigate } from 'react-router';

export default function Offers_Header() {
  const [datas, setDatas] = useState<getOfferData | null>(null);
  const [option, setOption] = useState<number | null>(0);
  const [clicked, setClicked] = useState<boolean | null>(false);
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
    }).then((res) => {
      setDatas(res.data.data);
    });
  }, []);

  return (
    <>
      <ProductWrap>
        <Product_Img
          src={process.env.PUBLIC_URL + '/icons/3-sub-banner-1920x960.png'}
        ></Product_Img>
        <InfoWrap>
          <Info>
            <Product_Share
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: datas?.title,
                    text: datas?.summary,
                    url: 'http://localhost:3000/offers',
                  });
                } else {
                  alert('공유하기가 지원되지 않는 환경 입니다.');
                }
              }}
            >
              <img src={process.env.PUBLIC_URL + '/icons/share-icon.png'} />
            </Product_Share>
            <Product_Name>여자끼리 파타고니아</Product_Name>
            <Product_Price>{datas?.price}원</Product_Price>
            <Product_Summary>{datas?.summary}</Product_Summary>
            <Product_Area>그리스</Product_Area>
            <Product_Feature>포함투어 10개</Product_Feature>
            <Product_Airplane>{datas?.flightInfo}</Product_Airplane>
            <Product_Option onChange={(e) => setOption(Number(e.target.value))}>
              <p>필수</p>
              <option value="100000">100000원</option>
              <option value="200000">200000원</option>
            </Product_Option>
            <Product_Option>
              <p>필수</p>
              <option value="50000">50000원</option>
              <option value="300000">300000원</option>
            </Product_Option>
            <PriceWrap>
              <Product_Num>
                <People_Num_Text>{option}</People_Num_Text>
                <People_Num>
                  <Num_Plus onClick={() => dispatch(minusNum())}>-</Num_Plus>
                  <Num_Value>{productNum}</Num_Value>
                  <Num_Minus onClick={() => dispatch(plusNum())}>+</Num_Minus>
                </People_Num>
              </Product_Num>
              <PriceWrap_Line></PriceWrap_Line>
              <Product_Total_Price>
                <Price_Text>총 상품 금액</Price_Text>
                <Total_Price>
                  {(Number(datas?.price.replace(/,/g, '')) * productNum)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </Total_Price>
              </Product_Total_Price>
            </PriceWrap>
            <ButtonWrap>
              <Button_Reservation
                onClick={() => {
                  datas ? dispatch(productId(datas?.mainImage)) : '';
                  datas
                    ? dispatch(
                        productPrice(
                          Number(datas?.price.replace(/,/g, '')) * productNum
                        )
                      )
                    : '';
                  navigate('/reservation');
                }}
              >
                <p>예약하기</p>
              </Button_Reservation>
              <Button_Cart onClick={() => navigate('/cart')}>
                <p>장바구니</p>
              </Button_Cart>
            </ButtonWrap>
          </Info>
        </InfoWrap>
      </ProductWrap>
      <OfferImgWrap className={clicked ? 'clicked' : 'unclicked'}>
        <Offer_Img src={datas?.descriptionImage[0]}></Offer_Img>
      </OfferImgWrap>
      <OfferBtnWrap>
        <Offer_Btn
          onClick={() => (clicked ? setClicked(false) : setClicked(true))}
        >
          상세정보 펼처보기
        </Offer_Btn>
      </OfferBtnWrap>
    </>
  );
}

const ProductWrap = styled.section`
  position: relative;
  width: 100%;
  height: 900px;
`;

const Product_Img = styled.img`
  width: 100%;
  heigth: 100%;
  object-fit: cover;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 50px;
  width: 30%;
  height: 80%;
  top: 50%;
  transform: translate(0, -50%);
  background: rgba(255, 255, 255, 0.77);
`;
const Info = styled.div`
  width: 80%;
  height: 80%;
`;
const Product_Share = styled.button`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;
const Product_Name = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 24px;
`;
const Product_Price = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 24px;
  margin-top: 20px;
`;
const Product_Summary = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 34px;
  width: 70%;
  margin-top: 20px;
`;
const Product_Area = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
  margin-top: 20px;
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
  margin-top: 10px;

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
`;
const Product_Num = styled.div`
  height: 50%;
  display: flex;
  position: relative;
  align-items: center;
`;
const People_Num_Text = styled.p`
  position: absolute;
  left: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
`;
const People_Num = styled.div`
  position: absolute;
  right: 20px;
  width: 90px;
  height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid #333333;
`;
const Num_Minus = styled.button`
  width: 30%;
  cursor: pointer;
`;
const Num_Plus = styled.button`
  width: 30%;
  cursor: pointer;
`;
const Num_Value = styled.p`
  width: 40%;
`;
const PriceWrap_Line = styled.div`
  height: 1px;
  background: #aaaaaa;
`;
const Product_Total_Price = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 50%;
`;
const Price_Text = styled.p`
  position: absolute;
  left: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
`;
const Total_Price = styled.p`
  position: absolute;
  right: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #4286f4;
`;
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
const OfferImgWrap = styled.section`
  margin-top: 200px;
  display: flex;
  width: 100%;
  justify-content: center;
  &.unclicked {
    max-height: 500px;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
  &.clicked {
    height: 100%;
    transition: max-height 0.3s ease-out;
  }
`;
const Offer_Img = styled.img`
  width: 50%;
`;
const OfferBtnWrap = styled.section`
  margin-top: 10px;
  margin-bottom: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Offer_Btn = styled.button`
  background: #ffffff;

  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 420px;
  height: 56px;
  cursor: pointer;
`;
