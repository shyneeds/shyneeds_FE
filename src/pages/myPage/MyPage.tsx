import React, { useEffect, useState } from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import MypageTab from '../../components/mypage/MypageTab';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { userToken } from '../../features/kakaoLogin/kakaoLoginSlice';
import { email } from '../../features/userData/userDataSlice';

const MyPage = () => {
  const [datas, setDatas] = useState<any>([]);
  // const Token = useAppSelector(userToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://13.125.151.45:8080/api/my/user/38`,
      headers: {
        // accessToken: Token,
        // Authorization: `Bearer ${Token}`,
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjlAZ21haWwuY29tIiwiYXV0aCI6IlVTRVIiLCJleHAiOjE2NjU3NjcyMjJ9.Bo7P236SNO8otqwncHfyM9hXhF4AM_YnSoCsr-IjAs4',
      },
    }).then((res) => {
      console.log(res);
      setDatas(res.data.data);
      dispatch(email(datas.userInfo.email));
    });
  }, []);
  console.log(datas);
  console.log(datas.userInfo.email);
  return (
    <div>
      <Header />
      <MypageTab />
      <Footer />
    </div>
  );
};

export default MyPage;
