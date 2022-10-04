import Header from '../../components/common/Header';
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/common/Footer';
import { PersonalSection } from '../../components/personalSection/PersonalSection';
import TopButton from '../../components/common/TopButton';
import { KakaoTalkBanner } from '../../components/banner/KakaoTalkBanner';
import { useState } from "react";
import Review from '../../components/review/Review';
import { PopupBanner } from '../../components/banner/PopupBanner';


export default function Main() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Header />
      <Carousel />
      <PersonalSection />
      <Review />
      <Footer />
      {show ? <PopupBanner onClose={setShow} /> : null}
      <KakaoTalkBanner />
      <TopButton />
    </>
  );
}
