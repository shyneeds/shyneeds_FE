import React, { useEffect, useState } from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import MypageTab from '../../components/mypage/MypageTab';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { userToken, userId } from '../../features/kakaoLogin/kakaoLoginSlice';
import { email } from '../../features/userData/userDataSlice';

const MyPage = () => {
  const [datas, setDatas] = useState<any>([]);
  const Token = useAppSelector(userToken);
  const UserId = useAppSelector(userId);
  const dispatch = useAppDispatch();

  console.log(Token);
  console.log(UserId);
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://13.125.151.45:8080/api/my/user/38`,
      headers: {
        // accessToken: Token,
        Authorization: `Bearer ${Token}`,
        // Authorization:
        //   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjlAZ21haWwuY29tIiwiYXV0aCI6IlVTRVIiLCJleHAiOjE2NjU4NDM3ODV9.jWytWap3hY3623nvcTC8R_VJRNQ-sHQYFqUy8-j5kMg',
      },
    }).then((res) => {
      console.log(res);
      setDatas(res);
      // dispatch(email(datas.userInfo.email));
    });
  }, []);
  console.log(datas);
  console.log(Token);
  // console.log(datas.userInfo.email);
  return (
    <div>
      <Header />
      <MypageTab />
      <Footer />
    </div>
  );
};

export default MyPage;
