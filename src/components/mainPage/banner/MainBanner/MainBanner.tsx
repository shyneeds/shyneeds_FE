import styled from 'styled-components';
import { BannerSlider } from './BannerSlider';
// import { Dropdown } from './dropDown/Dropdown';
import { Link } from 'react-router-dom';
import { Modal } from './Modal';
import { useEffect, useRef, useState, useCallback } from 'react';

export const MainBanner = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <img
        src={
          process.env.PUBLIC_URL +
          '/icons/main-icon/main-banner-1-1920x960x4-size.png'
        }
        alt="main_banner_img"
      />
      <Wrapper>
        <CurationBox>
          <Category>
            <Modal show={show} />
            <p>여행을 가고 싶어요</p>
          </Category>
        </CurationBox>
        <ResultBox>{/* <ResultSlider /> */}</ResultBox>
        <BtnLink to="offers">
          <img
            src={process.env.PUBLIC_URL + '/icons/main-icon/btn.svg'}
            alt="main_icon_btn"
          />
        </BtnLink>
      </Wrapper>
      {/* <BannerSlider /> */}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 760px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 200px;
`;

const CurationBox = styled.div`
  position: absolute;
  // top: 196px;
  left: 368px;
  width: 474px;
  height: 400px;

  > p {
    font-size: 24px;
  }
`;

const Category = styled.ul`
  width: 200px;
`;

const ResultBox = styled.ul`
  width: 200px;
`;

const BtnLink = styled(Link)`
  width: 148px
  height: 48px;
  position: absolute;
  top: 632px;
  left: 370px;
  z-index: 9999;
`;
