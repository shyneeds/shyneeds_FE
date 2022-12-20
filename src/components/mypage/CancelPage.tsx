import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import {
  userCancelNum,
  userReservationList,
} from '../../features/userData/userDataSlice';
import { userToken, userId } from '../../features/kakaoLogin/kakaoLoginSlice';

const CancelPage = () => {
  const [optio, setOptio] = useState<string | undefined>();
  const [detail, setDetail] = useState<string | undefined>();
  const reservationList = useAppSelector(userReservationList);
  const cancleNum = useAppSelector(userCancelNum);
  const ProductData: any = reservationList[cancleNum];
  const navigate = useNavigate();
  const token = useAppSelector(userToken);
  const cancelAlert = () => {
    if (confirm('주문 취소를 진행하시겠습니까?') === true) {
      axios({
        method: 'DELETE',
        url: `http://13.125.151.45:8080/api/reservation/user?reservation_number=${ProductData.reservationNumber}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          cancelReason: optio,
          cancelReasonDetail: detail,
        },
      }).then((res) => {
        console.log(res);
      });
      alert('주문이 정상적으로 취소되었습니다.');
      navigate(-1);
    } else {
      return;
    }
  };
  console.log(optio);
  console.log(detail);
  return (
    <CancelWrap>
      <h2>
        예약 취소요청 <p>{ProductData.reservationNumber}</p>
      </h2>
      <ProductInfo>
        <img src={ProductData.reservationPackage[0].imageUrl} alt="" />
        <ProductText>
          <Text fontWeight="700">
            {ProductData.reservationPackage[0].title}
          </Text>
          <Text fontWeight="400">
            {ProductData.reservationPackage[0].optionValue}
          </Text>
          <Text fontWeight="400">{ProductData.totalReservationAmount}원</Text>
        </ProductText>
      </ProductInfo>
      <CancelInfo>
        <CancelMoney>
          <h2>환불 예정 금액</h2>
          <p>{ProductData.totalReservationAmount}원</p>
        </CancelMoney>
        <h2>취소 사유 선택</h2>
        <SelectBox onChange={(e) => setOptio(e.target.value)}>
          <option value="">취소사유 선택</option>
          <option value="예약 의사 취소">예약 의사 취소</option>
          <option value="다른 상품 잘못 주문">다른 상품 잘못 주문</option>
          <option value="서비스 및 상품 불만족">서비스 및 상품 불만족</option>
          <option value="상품 정보 상이">상품 정보 상이</option>
        </SelectBox>
        <InputBox
          placeholder="상세 사유 입력(선택사항)"
          onChange={(e) => setDetail(e.target.value)}
        />
        <CancelBtn onClick={() => cancelAlert()}>주문 취소</CancelBtn>
      </CancelInfo>
    </CancelWrap>
  );
};
const CancelWrap = styled.div`
  width: 1184px;
  margin: 80px auto;
  > h2 {
    margin: 0 0 30px;
    font-size: 1.1rem;
    font-weight: bold;
  }
  > h2 > p {
    display: inline-block;
    margin: 0 0 0 6px;
    color: #4286f4;
  }
`;
const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 25px;
  border: 1px solid #e9ecef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  > img {
    width: 135px;
    height: 135px;
    margin: 0 20px 0 0;
    border-radius: 6px;
  }
`;
const ProductText = styled.div``;
const Text = styled.p<{
  fontWeight: string;
}>`
  margin: 0 0 15px;
  color: #666666;
  font-size: 1.1rem;
  font-weight: ${(props) => props.fontWeight};
`;
const CancelMoney = styled.div`
  display: flex;
  margin: 0 0 30px;
  > p {
    display: inline-block;
    color: #4286f4;
  }
`;
const CancelInfo = styled.div`
  width: 100%;
  margin: 30px 0 0;
  padding: 20px 25px;
  border: 1px solid #e9ecef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  h2 {
    margin: 0 30px 0 0;
    font-weight: bold;
  }
`;
const SelectBox = styled.select`
  margin: 15px 0 0;
  padding: 8px;
  border: 1px solid #dddddd;
  background-color: #f5f6f7;
`;
const InputBox = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  margin: 8px 0 0;
  padding: 9px;
  border: 1px solid #dddddd;
  background-color: #f5f6f7;
  font-family: 'Pretendard-Regular', sans-serif;
  color: #999999;
`;
const CancelBtn = styled.div`
  display: inline-block;
  margin: 30px 0 0;
  padding: 10px 35px;
  background-color: #0080c6;
  color: #fff;
  cursor: pointer;
`;
export default CancelPage;
