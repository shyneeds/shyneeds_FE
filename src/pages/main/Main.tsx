import Header from '../../components/common/header/Header';
import { MainBanner } from '../../components/mainPage/banner/MainBanner/MainBanner';
import { SideStorage } from '../../components/common/aside/watched/WatchedStorage';
// import { PersonalSection } from '../../components/mainPage/personalSection/PersonalSection';
import { RecommendedByGroup } from '../../components/mainPage/recommended/RecommendedByGroup';
import { RecommendedByRegion } from '../../components/mainPage/recommended/RecommendedByRegion';
import { RecommendedByTheme } from '../../components/mainPage/recommended/RecommendedByTheme';
import Review from '../../components/review/Review';
import Footer from '../../components/common/footer/Footer';

export default function Main() {
  return (
    <>
      <Header />
      <MainBanner />
      <SideStorage />
      {/* <PersonalSection /> */}
      <RecommendedByGroup />
      <RecommendedByRegion />
      <RecommendedByTheme />
      <Review />
      <Footer />
    </>
  );
}
