import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../constants/API_URL';
import { KAKAO_AUTH_URL } from '../../constants/KAKAO_AUTH_URL';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  userLogin,
  loginToken,
} from '../../features/kakaoLogin/kakaoLoginSlice';
import axios from 'axios';
const { Kakao } = window;

function Login() {
  const [cookies, setCookie] = useCookies(['token']);
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }
  }, []);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData: any) => {
    console.log(formData);
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      url: API_URL.POST.LOGIN,
      method: 'post',
      data: formData,
    })
      .then((response) => {
        console.log({ response });
        setCookie('token', response.data.data.refreshToken)
        dispatch(userLogin(response.data.data));
        navigate(-1);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <>
      <Header />
      <Wrap>
        <Kakao_Login>
          <h1>간편 로그인</h1>
          <a href={KAKAO_AUTH_URL}>
            <img
              src={process.env.PUBLIC_URL + '/icons/ic-kakao-btn.svg'}
              alt=""
            />
          </a>
        </Kakao_Login>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Email_Area>
            <h1>이메일 로그인</h1>
            <p>이메일</p>
            <InputStyle
              type="text"
              placeholder="이메일"
              style={{
                outline: errors.email ? '2px solid red' : '',
              }}
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <ErrorMessage>이메일이 일치하지 않습니다.</ErrorMessage>
            )}
          </Email_Area>
          <Pw_Area>
            <p>비밀번호</p>
            <InputStyle
              type="password"
              placeholder="비밀번호"
              {...register('password', {
                required: true,
              })}
            />
            {errors.password && (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </Pw_Area>
          <LogIn_Area>
            <button>로그인</button>
          </LogIn_Area>
        </form>
        <P_Group>
          <a href="">아이디/비밀번호 찾기</a>
        </P_Group>
        <Member>
          <Link to="/signUp">
            <button>이메일 회원가입</button>
          </Link>
        </Member>
        <BookingCheck>
          <button>비회원 예약 조회</button>
        </BookingCheck>
      </Wrap>
      <Footer />
    </>
  );
}

export default Login;

const Wrap = styled.div`
  width: 1184px;
  margin: 0 auto;
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
    &:hover {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
    }
    border-radius: 4px;
    cursor: pointer;
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
    margin-left: -270px;
  }

  input {
    border: 1px solid #ccc;
    width: 320px;
    height: 48px;
    border-radius: 5px;
    margin-top: 10px;
    padding-left: 15px;
    &:focus {
      outline: 2px solid #34a853;
    }
  }
`;

const Error_E = styled.span`
  color: red;
  font-size: 14px;
  display: block;
  position: absolute;
  top: 142px;
  left: 385px;
`;

const Pw_Area = styled.section`
  font-weight: bolder;
  text-align: center;
  margin-top: 22px;
  position: relative;
  p {
    font-size: 16px;
    margin-left: -260px;
  }
  /* input {
    border: 1px solid #ccc;
    width: 320px;
    height: 48px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 56px;
    padding-left: 15px;
    &:focus {
      outline: 2px solid #34a853;
    }
  } */
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
  margin-top: 56px;
  button {
    width: 320px;
    height: 48px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bolder;
    &:hover {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
      background-color: black;
      color: white;
    }
    cursor: pointer;
  }
`;

const P_Group = styled.div`
  width: 320px;
  height: 48px;
  font-size: 0.8rem;
  margin: 0 auto;
  text-align: center;
  padding-top: 24px;
  a {
    border-bottom: 1px solid #000;
    padding: 2px 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }
`;

const Member = styled.section`
  text-align: center;
  button {
    width: 320px;
    height: 48px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bolder;
    background-color: #4286f4;
    color: white;
    margin-top: 48px;
    &:hover {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
    }
    cursor: pointer;
  }
`;

const BookingCheck = styled.section`
  text-align: center;
  button {
    width: 320px;
    height: 48px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bolder;
    background-color: #ccc;
    color: white;
    margin-top: 48px;
    &:hover {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
      background-color: black;
      color: white;
    }
    cursor: pointer;
  }
`;

const InputStyle = styled.input`
  height: 50px;
  width: 320px;
  font-size: 16px;
  font-weight: 500px;
  border-radius: 8px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  &:focus {
    outline: 2px solid #34a853;
  }
`;

const ErrorMessage = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #ea4335;
  margin-top: -10px;
  padding-left: 135px;
  padding-bottom: 20px;
`;
