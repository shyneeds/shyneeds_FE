import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { LAYOUT } from '../../constants/layout';

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
};

export const CarouselTest = (props: any) => {
  return (
    <CarouselContainer>
      <CarouselSlider {...settings}>{props}</CarouselSlider>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: ${LAYOUT.SIZE.WIDTH};
  margin: 80px auto;

  .slick-slider {
    margin: 0 -10px;
  }
  .slick-slide {
    padding: 0 7px;
  }
`;

const CarouselSlider = styled(Slider)`
  .slick-next,
  .slick-prev {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    z-index: 99999;
    top: 52%;
  }
  .slick-next::before,
  .slick-prev::before {
    font-size: 0;
  }
  .slick-prev {
    background: url('/icons/ic-chevron-left-40x40-050.svg') no-repeat;
  }
  .slick-next {
    background: url('/icons/ic-chevron-right-40x40-050.svg') no-repeat;
  }
`;
