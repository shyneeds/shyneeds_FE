import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  KakaoLoginAsync,
  userToken,
} from '../../features/kakaoLogin/kakaoLoginSlice';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import { useEffect } from 'react';

const LoginResult = () => {
  const [cookies, setCookie] = useCookies(['token']);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const serverToken = useAppSelector(userToken);
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (serverToken === (undefined||'')) {
      code && dispatch(KakaoLoginAsync(code));
      console.log(serverToken)
    } else {
      console.log(serverToken)
      setCookie('token', serverToken, { path: '/', maxAge: 1800 });
      navigate(-2);
    }
  }, [serverToken]);

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
