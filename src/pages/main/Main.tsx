import Header from '../../components/common/Header';
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/common/Footer';
import { PersonalSection } from '../../components/personalSection/PersonalSection';
import TopButton from '../../components/common/TopButton';
import { KakaoTalkBanner } from '../../components/banner/KakaoTalkBanner';
// import { useState } from 'react';
import Review from '../../components/review/Review';
import { PopupBanner } from '../../components/banner/PopupBanner';
import { RecommendedByGroup } from '../../components/recommended/RecommendedByGroup';
import { RecommendedBanner } from '../../components/recommended/RecommendedBanner';

export default function Main() {
  // const [show, setShow] = useState(true);

  return (
    <>
      <Header />
      <Carousel />
      <PersonalSection />
      <RecommendedBanner />
      <Review />
      <Footer />
      {/* {show ? <PopupBanner onClose={setShow} /> : null} */}
      <PopupBanner />
      <KakaoTalkBanner />
      <TopButton />
      <RecommendedByGroup />
    </>
  );
}
