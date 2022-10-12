import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

function Kakao () {

  const { Kakao } = window;

  const kakaoLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/oauth/kakao/callback',
      scope: "profile_nickname, account_email, gender, birthday"
    })
  }

  return (
    <div>
      <Header />
      <Wrap>
        <Kakao_Login onClick={kakaoLogin}>
          <h1>간편 로그인</h1>
          <img src={process.env.PUBLIC_URL + '/icons/ic-kakao-btn.svg'} alt=''></img>
        </Kakao_Login>
        <Email_Area>
          <h1>이메일 로그인</h1>
          <p>이메일</p>
          <input type='text' placeholder='이메일'></input>
          <Error_E>이메일이 일치하지 않습니다.</Error_E>
        </Email_Area>
        <Pw_Area>
          <p>비밀번호</p>
          <input type='password' placeholder='비밀번호'></input>
          <Error_P>비밀번호가 일치하지 않습니다.</Error_P>
        </Pw_Area>
        <LogIn_Area>
          <button>로그인</button>
          </LogIn_Area>
        
        <P_Group>
          <span><a href=''>아이디</a> / <a>비밀번호 찾기</a></span>
        </P_Group>
        <Member>
          <img src={process.env.PUBLIC_URL + '/icons/ic-member-btn.svg'} alt=''></img>
        </Member>
        <Button>
          <img src={process.env.PUBLIC_URL + '/icons/ic-unmember-btn.svg'} alt=''></img>
        </Button>
      </Wrap>
      <Footer />
    </div>
  )
}

export default Kakao;

const Wrap = styled.div`
  width: 1184px;
  margin: auto;
  padding: 48px;
`;

const Kakao_Login = styled.div`
  width: 320px;
  height: 120px;
  font-size: 24px;
  font-weight: bolder;
  margin: auto;
  text-align: center;

  img {
    width: 320px;
    height: 48px;
    margin-top: 24px;
    margin-bottom: 48px;
  }
`;

const Email_Area = styled.section`
  font-weight: bolder;
  text-align: center;
  position: relative;
  
  h1 {
    text-align: center;
    padding: 16px 0;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    margin-left: -270px
  }
  
  input {
    border: 1px solid #ccc;
    width: 320px;
    height: 48px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 48px;
    padding-left: 15px;
  }
`;

const Error_E = styled.span`
  color: red;
  font-size: 14px;
  display: block;
  position: absolute;
  top: 142px;
  left: 385px;
  display: none;
`;

const Pw_Area = styled.section`
  font-weight: bolder;
  text-align: center;
  margin-top: 22px;
  position: relative;
  
  h1 {
    text-align: center;
    padding: 16px 0;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    margin-left: -260px
  }
  
  input {
    border: 1px solid #ccc;
    width: 320px;
    height: 48px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 56px;
    padding-left: 15px;
  }
`;

const Error_P = styled.span`
  color: red;
  font-size: 14px;
  display: block;
  position: absolute;
  top: 86px;
  left: 385px;
  display: none;
`;

const LogIn_Area = styled.section`
  text-align: center;

  button {
    width: 320px;
    height: 48px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bolder;
  }
`;

const P_Group = styled.div`
  width: 320px;
  height: 48px;
  font-size: 0.8rem;
  margin: 0 auto;
  text-align: center;
  padding-top: 24px;

  span {
    border-bottom: 1px solid #000;
    padding: 2px 0;
  }
`;

const Member = styled.section`
  width: 320px;
  height: 48px;
  font-size: 16px;
  font-weight: bolder;
  margin: auto;
  text-align: center;

  img {
    margin-top: 48px;
  }  
`;

const Button = styled.section`
  width: 320px;
  height: 48px;
  background-color: #ccc;
  border-radius: 5px;
  margin: auto;
  margin-top: 48px;
  margin-bottom: 164px;
  
  button {
    width: 320px;
    height: 48px;
    font-size: 16px;
    padding-top: 15px;
  }
`;