import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import {
  KakaoLoginAsync,
} from '../../features/kakaoLogin/kakaoLoginSlice';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import { useEffect } from 'react';

const LoginResult = () => {
  const [cookies, setCookie] = useCookies(['token']);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get('code');

  const onLogin = () => {
    code &&
      dispatch(KakaoLoginAsync(code))
        .then((res) =>
          setCookie('token', res.payload.payload, { path: '/', maxAge: 1800 })
        )
        .then(() => navigate(-2));
  };
  
  useEffect(() => {
    onLogin();
  }, []);

  return (
    <>
      <Background>
        <LoadingText>로그인중 입니다...</LoadingText>
        <img src={process.env.PUBLIC_URL + '/icons/Rolling-2.4S.gif'} />
      </Background>
    </>
  );
};

export default LoginResult;
export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 7%;
    height: 7%;
  }
`;

export const LoadingText = styled.div`
  text-align: center;
`;
