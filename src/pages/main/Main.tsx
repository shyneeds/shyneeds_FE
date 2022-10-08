import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { PersonalSection } from '../../components/personalSection/PersonalSection';
import TopButton from '../../components/common/TopButton';
import { KakaoTalkBanner } from '../../components/banner/KakaoTalkBanner';
import Review from '../../components/review/Review';
import { RecommendedBanner } from '../../components/recommended/RecommendedBanner';
import { MainBanner } from '../../components/banner/MainBanner/MainBanner';
// import { RecommendedByGroup } from '../../components/recommended/RecommendedByGroup';

export default function Main() {
  return (
    <>
      <Header />
      <MainBanner />
      <PersonalSection />
      <RecommendedBanner />
      <Review />
      <Footer />
      <KakaoTalkBanner />
      <TopButton />
      {/* <RecommendedByGroup /> */}
    </>
  );
}
