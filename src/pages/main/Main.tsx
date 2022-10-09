import Header from '../../components/common/Header';
import { MainBanner } from '../../components/banner/MainBanner/MainBanner';
import { SideBar } from '../../components/banner/sideBar/SideBar';
import { PersonalSection } from '../../components/personalSection/PersonalSection';
import { RecommendedByGroup } from '../../components/recommended/RecommendedByGroup';
import { RecommendedByRegion } from '../../components/recommended/RecommendedByRegion';
import { RecommendedByTheme } from '../../components/recommended/RecommendedByTheme';
import Review from '../../components/review/Review';
import Footer from '../../components/common/Footer';

export default function Main() {
  return (
    <>
      <Header />
      <MainBanner />
      <SideBar />
      <PersonalSection />
      <RecommendedByGroup />
      <RecommendedByRegion />
      <RecommendedByTheme />
      <Review />
      <Footer />
    </>
  );
}
