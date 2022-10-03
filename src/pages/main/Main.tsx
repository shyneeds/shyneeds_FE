import React from 'react'
import Header from '../../components/common/Header';
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/common/Footer';
import { PersonalSection } from '../../components/personalSection/PersonalSection';
import { KakaoTalkBanner } from '../../components/banner/KakaoTalkBanner';


export default function Main() {
  return (
    <>
      <Header />
      <Carousel />
      <PersonalSection />
      <KakaoTalkBanner />
      <Footer />
    </>
  );
}