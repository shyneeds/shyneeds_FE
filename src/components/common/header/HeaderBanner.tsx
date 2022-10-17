import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const HeaderBanner = (props: any) => {
  const { onClose } = props;

  return (
    <HeaderBannerContainer>
      <Link to="https://www.gotogether-s.com/notice">
        <img
          src="https://cdn.imweb.me/upload/S202107158604372051740/8cc615a7ed144.png"
          alt="head_banner"
        />
      </Link>
      <CloseButton>
        <IoMdClose
          size="2rem"
          onClick={() => {
            onClose(false);
          }}
        />
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

  p {
    font-size: 0.8rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
