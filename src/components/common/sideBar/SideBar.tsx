import styled from 'styled-components';
import { KakaoTalkBanner } from './KakaoTalkBanner';
import { WatchedProducts } from './WatchedProducts';
import { TopBtn } from './TopBtn';

export const SideBar = () => {
  return (
    <BarContainer>
      <WatchedProducts />
      <KakaoTalkBanner />
      <TopBtn />
    </BarContainer>
  );
};

const BarContainer = styled.div`
  position: fixed;
  top: 30rem;
  right: 3rem;
  width: 100px;
  z-index: 9999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;
