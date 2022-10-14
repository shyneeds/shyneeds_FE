import Header from '../../components/common/Header';
import { MainBanner } from '../../components/mainPage/banner/MainBanner/MainBanner';
// import { SideBar } from '../../components/mainPage/sideBar/SideBar';
// import { PersonalSection } from '../../components/mainPage/personalSection/PersonalSection';
import { RecommendedByGroup } from '../../components/mainPage/recommended/RecommendedByGroup';
import { RecommendedByRegion } from '../../components/mainPage/recommended/RecommendedByRegion';
import { RecommendedByTheme } from '../../components/mainPage/recommended/RecommendedByTheme';
import Review from '../../components/review/Review';
import Footer from '../../components/common/Footer';

export default function Main() {
  return (
    <>
      <Header />
      <MainBanner />
      {/* <SideBar /> */}
      {/* <PersonalSection /> */}
      <RecommendedByGroup />
      <RecommendedByRegion />
      <RecommendedByTheme />
      <Review />
      <Footer />
    </>
  );
}
