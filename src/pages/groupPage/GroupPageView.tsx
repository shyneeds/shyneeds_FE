import React from 'react';
import GroupPage from '../../components/subPage/GroupPage';
import Header from '../../components/common/header/Header';
import Footer from '../../components/common/footer/Footer';
import { AsideSection } from '../../components/common/aside/AsideSection';

const GroupPageView = () => {
  return (
    <>
      <Header />
      <GroupPage />
      <AsideSection />
      <Footer />
    </>
  );
};

export default GroupPageView;
