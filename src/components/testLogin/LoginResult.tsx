import React, { useEffect } from 'react'
import axios from 'axios';
import { REDIRECT_URL } from '../../constants/KAKAO_AUTH_URL';
import { useSearchParams } from 'react-router-dom';
const {Kakao}=window;

const LoginResult = () => {
  const[searchParams,setSearchParams] = useSearchParams();
  const getToken = async () =>{
    const code = searchParams.get('code')
    const grant_type = "authorization_code";
    const client_id = process.env.REACT_APP_KAKAO_API_KEY;

    await axios({
      url : `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URL}&code=${code}`,
      method : "POST",
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
    })
      .then((res)=>{
        console.log(res)
      })
  }
  useEffect(()=>{
    getToken();
  },[])

  const url = window.location.href;
  const arr = url.split("=");

  return (
    <>
      <h1>카카오 로그인 테스트</h1>
      <h3>{url}</h3>
      <h3>{arr[1]}</h3>
    </>
  )
}

export default LoginResult