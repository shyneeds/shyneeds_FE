import styled from 'styled-components';
import { LAYOUT } from '../../../constants/layout';
import { ProductCarousel } from '../productCard/ProductCarousel';

export const RecommendedByTheme = () => {
  return (
    <RecommendedListContainer>
      <RecommendedListTitle>
        특별한 테마 여행을 떠나볼까요?
      </RecommendedListTitle>
      <ProductCarousel />
    </RecommendedListContainer>
  );
};

const RecommendedListContainer = styled.div`
  width: ${LAYOUT.SIZE.WIDTH};
  margin: 80px auto;

  .slick-slider {
    margin: 0 -10px;
  }
  .slick-slide {
    padding: 0 7px;
  }
`;

const RecommendedListTitle = styled.h1`
  margin: 0 0 20px;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -1px;
`;
