import styled from 'styled-components';
import { KakaoTalkBanner } from './KakaoTalkBanner';
import { RecentStorage } from './RecentStorage';
import { TopBtn } from './TopBtn';

export const SideBar = () => {
  return (
    <BarContainer>
      <RecentStorage />
      <KakaoTalkBanner />
      <TopBtn />
    </BarContainer>
  );
};

const BarContainer = styled.div`
  position: fixed;
  top: 30rem;
  right: 7rem;
  background-color: #999;
  width: 100px;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;
