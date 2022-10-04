import React from 'react'
import Header from '../../components/common/Header';
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/common/Footer';
import { PersonalSection } from '../../components/personalSection/PersonalSection';
import TopButton from '../../components/common/TopButton';
import { KakaoTalkBanner } from '../../components/banner/KakaoTalkBanner';
import { MainBanner } from '../../components/banner/MainBanner';
import { useState } from "react";
import Review from '../../components/review/Review';

export default function Main() {
  const [ show, setShow ] = useState(true);

  return (
    <>
      <Header />
      <Carousel />
      <PersonalSection />
      <Review />
      <Footer />
      { show ? <MainBanner onClose={setShow} /> : null }
      <KakaoTalkBanner />
      <TopButton/>
    </>
  );
}
