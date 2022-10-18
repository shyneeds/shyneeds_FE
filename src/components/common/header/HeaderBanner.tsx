import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

interface IBannerProps {
  closeBanner: () => void;
  closeBannerUntilExpires: () => void;
}

export const HeaderBanner = ({
  closeBanner,
  closeBannerUntilExpires,
}: IBannerProps) => {
  return (
    <HeaderBannerContainer>
      <Link to="https://www.gotogether-s.com/notice">
        <img
          src="https://cdn.imweb.me/upload/S202107158604372051740/8cc615a7ed144.png"
          alt="head_banner"
        />
      </Link>
      <CloseButton>
        <p onClick={closeBannerUntilExpires}>하루 동안 보지 않기</p>
        <IoMdClose size="1rem" onClick={closeBanner} />
      </CloseButton>
    </HeaderBannerContainer>
  );
};

const HeaderBannerContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const CloseButton = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 1.2rem;
  display: flex;
  align-items: center;
  // padding: 0.5rem;

  p {
    font-size: 0.8rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
