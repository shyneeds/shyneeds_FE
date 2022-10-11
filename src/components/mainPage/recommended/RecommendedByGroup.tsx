import styled from 'styled-components';
import { LAYOUT } from '../../../constants/layout';
import { GroupCarousel } from './GroupCarousel';
import { GroupProductCarousel } from './GroupProductCarousel';

export const RecommendedByGroup = () => {
  return (
    <Background>
      <h1>추천 그룹 여행</h1>
      <Container>
        <GroupCarousel />
        <ProductContainer>
          <h2>이런 그룹 여행은 어떠세요?</h2>
          <GroupProductCarousel />
        </ProductContainer>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 1920px;
  height: 732px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8f5ff;
  position: relative;

  > h1 {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -1px;
    position: absolute;
    top: 84px;
    left: 368px;
  }
`;

const Container = styled.div`
  width: ${LAYOUT.SIZE.WIDTH};
  height: 524px;
  background-color: #fff;
  outline: 2px solid #ccc;
  outline-offset: -2px;
  border-radius: 10px;
  margin-top: 44px;
`;

const ProductContainer = styled.div`
  padding: 24px;

  > h2 {
    margin: 0 0 20px;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: -1px;
  }
`;
