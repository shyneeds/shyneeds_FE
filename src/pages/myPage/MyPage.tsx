import React, { useEffect, useState } from 'react';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import MypageTab from '../../components/mypage/MypageTab';

const MyPage = () => {
  return (
    <div>
      <Header />
      <MypageTab popup={popup} />
      <Footer />
    </div>
  );
};

export default MyPage;
