import React from 'react'
import Header from '../../components/common/Header';
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/common/Footer';
import { PersonalSection } from '../../components/personalSection/PersonalSection';
import TopButton from '../../components/common/TopButton';
import { KakaoTalkBanner } from '../../components/banner/KakaoTalkBanner';
import { MainBanner } from '../../components/banner/MainBanner';
import { useState } from "react";

export default function Main() {
  const [ show, setShow ] = useState(true);

  return (
    <>
      <Header />
      <Carousel />
      <PersonalSection />
      <Footer />
      { show ? <MainBanner onClose={setShow} /> : null }
      <KakaoTalkBanner />
      <TopButton/>
    </>
  );
}
