import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

export const BannerSlider = () => {
  const mainBanner1 =
    process.env.PUBLIC_URL +
    '/icons/main-icon/main-banner-1-1920x960x4-size.png';
  const mainBanner2 =
    process.env.PUBLIC_URL + '/icons/main-icon/main-banner-2.png';
  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        <BorderBox key={1}>
          <img src={mainBanner1} alt="" />
        </BorderBox>
        <BorderBox key={2}>
          <img src={mainBanner2} alt="" />
        </BorderBox>
      </StyledSlider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  height: 960px;
  position: relative;
`;

const BorderBox = styled.div`
  text-align: center;
  height: 960px;
`;

const StyledSlider = styled(Slider)`
  .slick-next {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    right: 8.39%;
    z-index: 2;
  }
  .slick-next::before {
    font-size: 0;
  }
  // .slick-prev {
  //   background: url('/icons/ic-chevron-left-40x40-050.svg') no-repeat;
  // }
  .slick-next {
    background: url('/icons/main-icon/right-btn-50x50.svg') no-repeat;
  }
`;
