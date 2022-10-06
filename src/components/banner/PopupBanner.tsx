import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

export const CloseBtn = () => {
  return <IoMdClose size="1.5rem" className="close-button" />;
};

export const PopupBanner = () => {
  const [show, setShow] = useState(true);
  const onClick = () => setShow(!show);

  return (
    <PopupBannerContainer>
      <a href="https://www.gotogether-s.com/notice">
        <img
          src="https://cdn.imweb.me/upload/S202107158604372051740/8be283bb07ca2.jpg"
          alt="main_banner"
        />
      </a>
      <div>
        <button onClick={onClick}>{show ? <CloseBtn /> : null}</button>
      </div>
    </PopupBannerContainer>
  );
};

const PopupBannerContainer = styled.div`
  width: 11rem;
  position: absolute;
  top: 12rem;
  right: 6rem;

  .close-button {
    width: 1.5rem;
    color: #fff;
    position: absolute;
    top: 0.8rem;
    right: 0.7rem;
  }

  &:hover {
    cursor: pointer;
  }
`;
