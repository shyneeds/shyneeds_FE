import styled from 'styled-components';
import { ProductCard } from '../product/ProductCard';
// import { CarouselTest } from './CarouselTest';

export const RecommendedByGroup = () => {
  return (
    <RecommendedContainer>
      <ProductCard></ProductCard>
    </RecommendedContainer>
  );
};

const RecommendedContainer = styled.div`
  width: 100%;
  height: 100%;
`;
