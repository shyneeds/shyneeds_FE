import styled from 'styled-components';
import { useEffect, useState } from 'react';

export const TopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <>
      {showTopBtn && (
        <StyledTopBtnIcon
          onClick={goToTop}
          src={process.env.PUBLIC_URL + '/icons/Top_btn.svg'}
        />
      )}
    </>
  );
};

const StyledTopBtnIcon = styled.img`
  width: 100px;
  height: 40px;
  cursor: pointer;
`;
