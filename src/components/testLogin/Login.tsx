import React, { useEffect } from 'react'
import { KAKAO_AUTH_URL, REDIRECT_URL } from '../../constants/KAKAO_AUTH_URL';
const {Kakao} = window;

const Login = () => {
  // useEffect(()=>{
  //   Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
  //   console.log(Kakao.isInitialized())
  // },[])
  return (
      // <a href={KAKAO_AUTH_URL}>
      //   <img src={process.env.PUBLIC_URL + '/icons/kakao_login_large_narrow.png'} alt='로그인'/>
      // </a>
      <>
        test
      </>
  )
}

export default Login