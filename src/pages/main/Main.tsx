import Header from '../../components/common/header/Header';
import { MainBanner } from '../../components/mainPage/banner/MainBanner/MainBanner';
import { AsideSection } from '../../components/common/aside/AsideSection';
import { RecommendedByGroup } from '../../components/mainPage/recommended/RecommendedByGroup';
import { RecommendedByRegion } from '../../components/mainPage/recommended/RecommendedByRegion';
import { RecommendedByTheme } from '../../components/mainPage/recommended/RecommendedByTheme';
import { RecommendedByExhibition } from '../../components/mainPage/recommended/RecommendedByExhibition ';
import Review from '../../components/review/Review';
import Footer from '../../components/common/footer/Footer';
import { PromotionBanner } from '../../components/mainPage/banner/PromotionBanner';

export default function Main() {
  return (
    <>
      <Header />
      <MainBanner />
      <AsideSection />
      <RecommendedByGroup />
      <RecommendedByRegion />
      <RecommendedByTheme />
      <RecommendedByExhibition />
      <Review />
      <PromotionBanner />
      <Footer />
    </>
  );
}
