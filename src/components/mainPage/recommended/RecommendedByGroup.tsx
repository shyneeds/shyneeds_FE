import styled from 'styled-components';
import { LAYOUT } from '../../../constants/layout';
import { GroupTabCarousel } from './GroupTabCarousel';
import { GroupProductCarousel } from './GroupProductCarousel';

export const RecommendedByGroup = () => {
  return (
    <Background>
      <Container>
        <Title>추천 그룹 여행</Title>
        <Wrapper>
          <GroupTabCarousel />
          <ProductContainer>
            <h2>이런 그룹 여행은 어떠세요?</h2>
            <GroupProductCarousel />
          </ProductContainer>
        </Wrapper>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 684px;
  background-color: #e8f5ff;
  margin-bottom: 56px auto;
`;

const Container = styled.div`
  width: ${LAYOUT.SIZE.WIDTH};
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1px;
  padding: 56px 0 24px 0;
`;

const Wrapper = styled.div`
  background-color: #fff;
  outline: 2px solid #ccc;
  outline-offset: -2px;
  border-radius: 10px;
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
