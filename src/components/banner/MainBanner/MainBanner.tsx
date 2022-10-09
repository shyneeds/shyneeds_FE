import styled from 'styled-components';
import Carousel from '../../carousel/Carousel';

export const MainBanner = () => {
  return (
    <MainBannerContainer>
      <Carousel />
    </MainBannerContainer>
  );
};

const MainBannerContainer = styled.div`
  width: 100%;
`;
