import React from 'react'
import styled from 'styled-components';
import Header from '../../components/common/Header';
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/common/Footer';
import { PersonalSection } from '../../components/personalSection/PersonalSection';


export default function Main() {
  return (
    <>
      <Header />
      <Carousel />
      <MainPageStyles>
        <PersonalSection />
      </MainPageStyles>
      <Footer />
    </>
  );
}

const MainPageStyles = styled.div`
  width: 62vw;
  margin: 0 auto;
`;
