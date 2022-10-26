import styled from 'styled-components';
import { KakaoTalkBanner } from './KakaoTalkBanner';
import { TopBtn } from './TopBtn';
import { WatchedStorage } from './watched/WatchedStorage';

export const AsideSection = () => {
  return (
    <Container>
      <WatchedStorage />
      <KakaoTalkBanner />
      <TopBtn />
    </Container>
  );
};

const Container = styled.div`
  z-index: 1000;
  width: 120px;
  position: fixed;
  right: 0;
  bottom: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
