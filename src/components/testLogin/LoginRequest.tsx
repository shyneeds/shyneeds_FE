import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { userLogin,loginToken } from '../../features/kakaoLogin/kakaoLoginSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { API_URL } from '../../constants/API_URL';

const LoginRequest = () => {
  const storeUserToken = useAppSelector(loginToken);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const sendToken = async()=>{
    await axios({
      url : API_URL.POST.KAKAO_LOGIN,
      method : "POST",
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization' : storeUserToken
    }
      
    })
      .then((res)=>{
        console.log(res)
        dispatch(userLogin(res.data.data.accessToken))
        navigate('/')
      })
  }
    useEffect(()=>{
      sendToken();
    },[])

  return (
    <>
    <div>
      통신 테스트
    </div>
    </>
  )
}

export default LoginRequest