import { useEffect } from 'react';
import styled from 'styled-components';

export const KakaoTalkBanner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    try {
      if (window.Kakao) {
        window.Kakao.init(''); // 자바스크립트 API 키
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}
    // Kakao Channel 추가 버튼 생성
    window.Kakao.Channel.createChatButton({
      container: '#kakao-talk-channel-chat-button',
      channelPublicId: '', // 개발자용 카카오웹URL 아이디
      title: 'consult',
      size: 'small',
      color: 'yellow',
      shape: 'pc',
      supportMultipleDensities: true,
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  }, []);

  return (
    <KakaoIcon>
      <div id="kakao-talk-channel-chat-button"></div>
    </KakaoIcon>
  );
};

const KakaoIcon = styled.div`
  width: 100px;
  height: 40px;
`;
