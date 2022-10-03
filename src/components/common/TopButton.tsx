import React from "react";
import styled from "styled-components";
import { ReactComponent as TopButtonIcon } from "./Top_btn.svg";
import { useEffect, useState } from "react";

const TopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn &&(
        <StyledTopBtnIcon onClick={goToTop} />
      )}
    </>
  );
};

export default TopButton;

const StyledTopBtnIcon = styled(TopButtonIcon)`
  position: fixed;
  width: 60px;
  right : 3%;
  bottom : 5%;
  z-index: 999;
  cursor: pointer;
`;
