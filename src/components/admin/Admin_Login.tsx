import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  loginStatus,
  userId,
  userPw,
  userLogin,
} from '../../features/adminLogin/adminLoginSlice';

export default function Admin_Login() {
  const status = useAppSelector(loginStatus);
  const dispatch = useAppDispatch();

  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const handleLoginBtn = () => {
    dispatch(userId(id));
    dispatch(userPw(pw));
    dispatch(userLogin());
    console.log(status);
  };

  return (
    <>
      <Header>
        <img src={process.env.PUBLIC_URL + '/icons/logo.png'} />
      </Header>
      <Content>
        <LoginWrap>
          <input
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <button onClick={handleLoginBtn}>로그인</button>
        </LoginWrap>
        <FindWrap>
          <p>비밀번호 찾기</p>
          <p>아이디 찾기</p>
          <p>회원가입</p>
        </FindWrap>
      </Content>
    </>
  );
}

const Header = styled.div`
  width: 100vw;
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  img {
    width: 220px;
    height: 36px;
  }
`;

const Content = styled.div`
  width: 100vw;
  height: 60vh;
`;

const LoginWrap = styled.div`
  margin: 0 auto;

  width: 400px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: groove;
  border-radius: 10px;

  input {
    width: 300px;
    height: 40px;
  }
  button {
    margin-top: 50px;
    width: 300px;
    height: 40px;
  }
`;

const FindWrap = styled.div`
  margin: 0 auto;

  text-align: center;
  padding: 20px 0 35px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    padding: 10px;
    border-bottom: solid;
    border-radius: 10px;
  }
`;
