import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  userToken,
  userId,
  userLogout,
} from '../../features/kakaoLogin/kakaoLoginSlice';

interface Prop {
  togglePop: () => void;
}
const Withdrawal = ({ togglePop }: Prop): JSX.Element | any => {
  const token = useAppSelector(userToken);
  const userIdValue = useAppSelector(userId);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goodbye = () => {
    axios({
      method: 'DELETE',
      url: `http://13.125.151.45:8080/api/user/${userIdValue}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
    });
    togglePop();
    dispatch(userLogout(false));
    navigate('/');
  };
  return (
    <PopupBox>
      <BackGround onClick={togglePop} />
      <Popup>
        <Title>회원탈퇴</Title>
        <Info>
          가입된 회원정보가 모두 삭제됩니다. 작성하신 게시물은 삭제되지
          않습니다. 탈퇴 후 같은 계정으로 재가입 시 기존에 가지고 있던 적립금은
          복원되지 않으며, 사용 및 다운로드했던 쿠폰도 사용 불가능합니다. 회원
          탈퇴를 진행하시겠습니까?
        </Info>
        <BtnBox>
          <Btn
            fontColor="#666"
            backgroundColor="#fff"
            padding="11px 26px"
            onClick={togglePop}
          >
            취소
          </Btn>
          <Btn
            fontColor="#fff"
            backgroundColor="#4286F4"
            padding="11px 38px"
            onClick={() => goodbye()}
          >
            탈퇴하기
          </Btn>
        </BtnBox>
      </Popup>
    </PopupBox>
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
  background-color: rgba(0, 0, 0, 0.5);
`;
const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 352px;
  padding: 60px;
  border-radius: 8px;
  background: #fff;
  text-align: center;
`;
const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #000;
`;
const Info = styled.p`
  margin: 28px 0;
  font-size: 1.1rem;
  color: #333;
  line-height: 28px;
  text-align: left;
`;
const BtnBox = styled.div``;
const Btn = styled.button<{
  fontColor: string;
  backgroundColor: string;
  padding: string;
}>`
  margin: 0 4px;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1.1rem;
  color: ${(props) => props.fontColor};
`;

export default Withdrawal;
