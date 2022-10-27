import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LAYOUT } from '../../../constants/layout';

export const PromotionBanner = () => {
  return (
    <Container>
      <Wrapper>
        <BannerWrapper>
          <Banner>
            <img
              src={
                process.env.PUBLIC_URL +
                '/icons/main-icon/banner-1184x120-x4-size.png'
              }
              alt="review-btn"
            />
          </Banner>
          <Link to="/community">
            <Btn>후기 작성하기</Btn>
          </Link>
        </BannerWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1920px;
  height: 120px;
  background-color: #fff;
  margin-top: 56px;
  margin-bottom: 80px;
`;

const Wrapper = styled.div`
  width: ${LAYOUT.SIZE.WIDTH};
  height: 120px;
  background-color: #f9f9f9;
  border: 1px solid #f5f5f5;
  margin: 0 auto;
`;

const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Banner = styled.div`
  z-index: 1;
`;

const Btn = styled.button`
  width: 109px;
  height: 40px;
  border-radius: 4px;
  background-color: #4286f4;
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%) !important;
  z-index: 2;
  padding: 12px 16px;
  color: #fff;
  line-height: 16px;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #3f74e0;
  }
`;
