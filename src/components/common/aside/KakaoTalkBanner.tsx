import { useState } from 'react';
import styled from 'styled-components';

const btnTalkSmall: string =
  process.env.PUBLIC_URL + '/icons/main-icon/btn-talk-56x56.svg';
const btnTalkBig: string =
  process.env.PUBLIC_URL + '/icons/main-icon/btn-talk-140x56.svg';

export const KakaoTalkBanner = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const getKakaoChat = () => {
    const script = document.createElement('script');
    script.async = true;
    try {
      if (typeof window.Kakao !== 'undefined') {
        window.Kakao.init(''); // 자바스크립트 API 키
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}
    // Kakao Channel 추가 버튼 생성
    window.Kakao.Channel.chat({
      channelPublicId: '', // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
    });
  };

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {isHover ? (
        <KakaoIcon_big onClick={getKakaoChat} src={btnTalkBig} />
      ) : (
        <KakaoIcon_small onClick={getKakaoChat} src={btnTalkSmall} />
      )}
    </div>
  );
};

const KakaoIcon_small = styled.img`
  width: 56px;
  height: 56px;

  &:hover {
    cursor: pointer;
  }
`;

const KakaoIcon_big = styled.img`
  width: 120px;
  height: 56px;
  position: relative;
  right: 32px;

  &:hover {
    cursor: pointer;
  }
`;
