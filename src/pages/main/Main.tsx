import Header from '../../components/common/header/Header';
import { MainBanner } from '../../components/mainPage/banner/MainBanner/MainBanner';
import { AsideSection } from '../../components/common/aside/AsideSection';
// import { PersonalSection } from '../../components/mainPage/personalSection/PersonalSection';
import { RecommendedByGroup } from '../../components/mainPage/recommended/RecommendedByGroup';
import { RecommendedByRegion } from '../../components/mainPage/recommended/RecommendedByRegion';
import { RecommendedByTheme } from '../../components/mainPage/recommended/RecommendedByTheme';
// import { RecommendedByExhibition } from '../../components/mainPage/recommended/RecommendedByExhibition ';
import Review from '../../components/review/Review';
import Footer from '../../components/common/footer/Footer';
import { PromotionBanner } from '../../components/mainPage/banner/PromotionBanner';

export default function Main() {
  return (
    <>
      <Header />
      <MainBanner />
      <AsideSection />
      {/* 디자인 결정에 따라 수정 예정 */}
      {/* <PersonalSection /> */}
      <RecommendedByGroup />
      <RecommendedByRegion />
      <RecommendedByTheme />
      {/* // 데이터 부족으로 정상 출력 불가하여 일단 주석 처리합니다. */}
      {/* <RecommendedByExhibition /> */}
      <Review />
      <PromotionBanner />
      <Footer />
    </>
  );
}
