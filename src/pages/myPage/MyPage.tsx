import React, { useEffect, useState } from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import MypageTab from '../../components/mypage/MypageTab';

const MyPage = () => {
  return (
    <div>
      <Header />
      <MypageTab />
      <Footer />
    </div>
  );
};

export default MyPage;
