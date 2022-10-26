import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { LAYOUT } from '../../constants/layout';

const Carousel = () => {
  const items: any = ['1', '2', '3', '4', '5'];
  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        {items.map((item: any, i: any) => {
          return (
            <BorderBox key={i}>
              <img src={`https://placeimg.com/1000/440/any?rand=${i}`} alt="" />
            </BorderBox>
          );
        })}
      </StyledSlider>
    </SliderContainer>
  );
};

export default Carousel;

const SliderContainer = styled.div`
  width: ${LAYOUT.SIZE.WIDTH};
  height: 440px;
  margin: 0 auto;
`;

const BorderBox = styled.div`
  border: 1px solid red;
  height: 440px;
  text-align: center;
`;

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const StyledSlider = styled(Slider)`
  .slick-next,
  .slick-prev {
    width: 30px;
    height: 30px;
    margin-left: 30px;
    margin-right: 50px;
    z-index: 99999;
    top: 45%;
  }
  .slick-next::before,
  .slick-prev::before {
    font-size: 50px;
    color: red;
  }
`;
