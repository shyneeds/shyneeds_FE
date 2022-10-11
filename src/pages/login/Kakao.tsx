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
        </Email_Area>
        <Pw_Area>
          <p>비밀번호</p>
          <input type='password' placeholder='비밀번호'></input>
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
  width: 35%;
  margin: auto;
  padding: 5rem 3rem;
`;

const Kakao_Login = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  margin: auto;
  text-align: center;

  img {
    padding: 1.7rem 0;
  }
`;

const Email_Area = styled.section`
  font-size: 1.2rem;
  font-weight: bolder;
  margin: auto;
  
  h1 {
    text-align: center;
    padding: 20px 0;
    font-size: 23px;
  }
  
  input {
    border: 1px solid #ccc;
    width: 100%;
    height: 60px;
    border-radius: 5px;
    margin-top: 18px;
    padding-left: 15px;
  }
`;

const Pw_Area = styled.section`
  font-size: 1.2rem;
  font-weight: bolder;
  margin: 30px auto;
  
  input {
    border: 1px solid #ccc;
    width: 100%;
    height: 60px;
    border-radius: 5px;
    margin-top: 18px;
    padding-left: 15px;
  }
`;

const LogIn_Area = styled.section`
  margin: 10px auto;

  button {
    width: 100%;
    height: 60px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bolder;
  }
`;

const P_Group = styled.div`
  /* width: 70%; */
  font-size: 0.8rem;
  margin: 0 auto;
  text-align: center;

  span {
    border-bottom: 1px solid #000;
    padding: 2px 0;
  }
`;

const Member = styled.section`
  /* width: 65%; */
  font-size: 1.5rem;
  font-weight: bolder;
  margin: auto;
  text-align: center;

  img {
    padding: 4rem 0 1rem 0;
  }
`;

const Button = styled.section`
  /* width: 65%; */
  background-color: #ccc;
  border-radius: 5px;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 8rem;
  
  button {
    /* width: 100%; */
    font-size: 1.2rem;
    padding-top: 15px;
  }
`;