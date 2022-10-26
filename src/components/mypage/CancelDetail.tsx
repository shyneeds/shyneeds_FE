import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  userCancelNum,
  userReservationList,
} from '../../features/userData/userDataSlice';
import { userToken } from '../../features/kakaoLogin/kakaoLoginSlice';

interface Prop {
  dtTogglePop: () => void;
}
const CancelDetail = ({ dtTogglePop }: Prop): JSX.Element | any => {
  const [reson, setReason] = useState<string>('');
  const [resonDetail, setReasonDetail] = useState<string>('');
  const [payment, setPayment] = useState<string>('');
  const reservationList = useAppSelector(userReservationList);
  const cancleNum = useAppSelector(userCancelNum);
  const ProductData: any = reservationList[cancleNum];
  const token = useAppSelector(userToken);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://13.125.151.45:8080/api/reservation/cancel?reservation_number=${ProductData.reservationNumber}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
      setReason(res.data.data.cancelReason);
      setReasonDetail(res.data.data.cancelReasonDetail);
      setPayment(res.data.data.paymentMethod);
    });
  }, []);

  return (
    <div>
      <PopupBox>
        <BackGround onClick={dtTogglePop} />
        <Popup>
          <Title>취소 상세정보</Title>
          <Main>
            <ProductInfo>
              <div>
                <img src={ProductData.reservationPackage[0].imageUrl} alt="" />
                <ProductText>
                  <Text fontWeight="700">
                    {ProductData.reservationPackage[0].title}
                  </Text>
                  <Text fontWeight="400">
                    {ProductData.reservationPackage[0].optionValue}
                  </Text>
                  <Text fontWeight="400">
                    {ProductData.totalReservationAmount}원
                  </Text>
                </ProductText>
              </div>
              {ProductData.reservationStatus.includes('입금대기') ? (
                <OrderStatus fontColor="#4286F4">
                  {ProductData.reservationStatus}
                </OrderStatus>
              ) : ProductData.reservationStatus.includes('예약취소') ? (
                <OrderStatus fontColor="#EA4335">
                  {ProductData.reservationStatus}
                </OrderStatus>
              ) : ProductData.reservationStatus.includes('예약확정') ? (
                <OrderStatus fontColor="#34A853">
                  {ProductData.reservationStatus}
                </OrderStatus>
              ) : ProductData.reservationStatus.includes('입금완료') ? (
                <OrderStatus fontColor="#000">
                  {ProductData.reservationStatus}
                </OrderStatus>
              ) : null}
            </ProductInfo>
            <Reason>
              <p>취소사유</p>
              <ReasonWrap>
                <ReasonList>
                  <ListTit>취소요청사유</ListTit>
                  <ListCon>{reson}</ListCon>
                </ReasonList>
                <ReasonList>
                  <ListTit>상세사유</ListTit>
                  <ListCon>{resonDetail}</ListCon>
                </ReasonList>
                <ReasonList>
                  <ListTit>환불 방법</ListTit>
                  <ListCon>{payment}</ListCon>
                </ReasonList>
              </ReasonWrap>
            </Reason>
            <Btn onClick={dtTogglePop}>확인</Btn>
          </Main>
        </Popup>
      </PopupBox>
    </div>
  );
};
const PopupBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const BackGround = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;
const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 758px;
  height: 542px;
  border-radius: 8px;
  background: #fff;
  text-align: center;
`;
const Title = styled.h2`
  padding: 40px 0px 24px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #4286f4;
`;
const Main = styled.div`
  padding: 60px;
  border-top: 1px solid #e9ecef;
`;
const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 25px;
  border-bottom: 1px solid #e9ecef;
  border-radius: 8px;
  > div:after {
    content: '';
    display: block;
    clear: both;
  }
  > div > img {
    float: left;
    width: 74px;
    height: 74px;
    margin: 0 20px 0 0;
    border-radius: 6px;
  }
`;
const ProductText = styled.div`
  width: 460px;
  float: left;
  text-align: left;
`;
const Text = styled.p<{
  fontWeight: string;
}>`
  padding: 5px 0;
  color: #666666;
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight};
  :nth-child(1) {
    /* margin: 4px 0 0; */
  }
`;
const OrderStatus = styled.p<{
  fontColor: string;
}>`
  color: ${(props) => props.fontColor};
  font-weight: 700;
`;
const Reason = styled.div`
  margin: 40px 0 0;
  text-align: left;
  > p {
    margin: 0 0 16px;
    font-weight: 700;
  }
`;
const ReasonWrap = styled.ul`
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
`;
const ReasonList = styled.li`
  margin: 20px 0;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;
const ListTit = styled.p`
  width: 130px;
  float: left;
  color: #666;
`;
const ListCon = styled.span`
  float: left;
  color: #333;
`;
const Btn = styled.span`
  display: inline-block;
  width: 80px;
  height: 40px;
  line-height: 40px;
  margin: 30px 0 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #666;
  cursor: pointer;
`;
export default CancelDetail;
