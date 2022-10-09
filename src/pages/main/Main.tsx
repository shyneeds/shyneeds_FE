import Header from '../../components/common/Header';
import { MainBanner } from '../../components/banner/MainBanner/MainBanner';
import { KakaoTalkBanner } from '../../components/banner/KakaoTalkBanner';
import { PersonalSection } from '../../components/personalSection/PersonalSection';
import { RecommendedByGroup } from '../../components/recommended/RecommendedByGroup';
import { RecommendedByRegion } from '../../components/recommended/RecommendedByRegion';
import { RecommendedByTheme } from '../../components/recommended/RecommendedByTheme';
import Review from '../../components/review/Review';
import Footer from '../../components/common/Footer';
import TopButton from '../../components/common/TopButton';

export default function Main() {
  return (
    <>
      <Header />
      <MainBanner />
      <PersonalSection />
      <RecommendedByGroup />
      <RecommendedByRegion />
      <RecommendedByTheme />
      <Review />
      <Footer />
      <KakaoTalkBanner />
      <TopButton />
    </>
  );
}
