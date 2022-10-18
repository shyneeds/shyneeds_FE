import React from 'react';
import styled from 'styled-components';

const Withdrawal = () => {
  return (
    <div>
      <Title>회원탈퇴</Title>
      <Info>
        가입된 회원정보가 모두 삭제됩니다. 작성하신 게시물은 삭제되지 않습니다.
        탈퇴 후 같은 계정으로 재가입 시 기존에 가지고 있던 적립금은 복원되지
        않으며, 사용 및 다운로드했던 쿠폰도 사용 불가능합니다. 회원 탈퇴를
        진행하시겠습니까?
      </Info>
      <Btn>
        <Cancel>취소</Cancel>
        <Out>탈퇴하기</Out>
      </Btn>
    </div>
  );
};

const Title = styled.h2`
  color: #ff0000;
`;
const Info = styled.p`
  margin: 50px 0;
  font-size: 1.5rem;
  line-height: 34px;
`;
const Btn = styled.div`
  margin: 0 0 30px;
`;
const Cancel = styled.button`
  margin-right: 15px;
  padding: 12px 20px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;
const Out = styled.button`
  padding: 12px 40px;
  background-color: #0081c7;
  color: #fff;
  font-size: 1rem;
`;

export default Withdrawal;
