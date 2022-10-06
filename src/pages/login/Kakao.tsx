import React from 'react';
import styled from 'styled-components';

function Kakao () {

  const { Kakao } = window;

  const kakaoLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/oauth/kakao/callback',
      scope: "profile_nickname, account_email, gender, birthday"
    })
  }

  return (
    
      <Wrap>
        
        <Email_Area>
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
        <Kakao_Login onClick={kakaoLogin}>
          <img src={process.env.PUBLIC_URL + '/icons/kakao-btn.png'} alt=''></img>
        </Kakao_Login>
        <P_Group>
          <p>아이디</p>
          <div></div>
          <p>비밀번호</p>
          <p>찾기</p>
          <hr></hr>
        </P_Group>
        <Member>
          <img src={process.env.PUBLIC_URL + '/icons/member-btn.png'} alt=''></img>
        </Member>
        <Button>
          <button>비회원 예약 조회</button>
        </Button>
        
      </Wrap>
    
  )
}

export default Kakao;

// const Line = styled.body`
//   border: 1px solid blue;
//   /* width: 100vW; */
// `;

const Wrap = styled.div`
  width: 70%;
  margin: auto;
  padding-top: 60px;
  border: 1px solid red;
`;

const Email_Area = styled.section`
  width: 65%;
  font-size: 1.2rem;
  font-weight: bolder;
  margin: auto;
  
  input {
    border: 1px solid #ccc;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-top: 18px;
    padding-left: 15px;
  }
`;

const Pw_Area = styled.section`
  width: 65%;
  font-size: 1.2rem;
  font-weight: bolder;
  margin: 30px auto;
  
  input {
    border: 1px solid #ccc;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-top: 18px;
    padding-left: 15px;
  }
`;

const LogIn_Area = styled.section`
  width: 65%;
  margin: 50px auto;

  button {
    width: 100%;
    height: 50px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bolder;
  }
`;

const Kakao_Login = styled.div`
  width: 65%;
  font-size: 1.5rem;
  font-weight: bolder;
  margin: auto;
  text-align: center;

  img {
    padding: 1.7rem 0;
  }
`;

const P_Group = styled.div`
  width: 70%;
  font-size: 0.8rem;
  margin-left: 35%;
  padding: 0 0 0 25px;

  p {
    display: inline-block;
    margin-left: 5px;
  }

  div {
    display: inline-block;
    width: 1px;
    height: 11px;
    border-left: 1px solid #000;
    margin-bottom: -1px;
    margin-left: 4px;
    transform: rotate(15deg);
  }

  hr {
    width: 134px;
    margin-left: 4px;
  }
`;

const Member = styled.section`
  width: 65%;
  font-size: 1.5rem;
  font-weight: bolder;
  margin: auto;
  text-align: center;

  img {
    padding: 4rem 0 1rem 0;
  }
`;

const Button = styled.section`
  width: 65%;
  height: 50px;
  background-color: #ccc;
  border-radius: 5px;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 10rem;
  
  button {
    width: 100%;
    font-size: 1.2rem;
    padding-top: 15px;
  }
`;