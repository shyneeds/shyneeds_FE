import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import { getMainData } from '../../../../utils/getMainData';

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 2,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

export const BannerSlider = () => {
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

const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const BorderBox = styled.div`
  height: 100%;
`;

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
