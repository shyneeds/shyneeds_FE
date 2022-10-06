import React from "react";
import styled from "styled-components";
// import { ReactComponent as TopButtonIcon } from "./Top_btn.svg";
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
      {showTopBtn && (
        <StyledTopBtnIcon onClick={goToTop} src={process.env.PUBLIC_URL + "/icons/Top_btn.svg"} />
      )}
    </>
  );
};

export default TopButton;

const StyledTopBtnIcon = styled.img`
  position: fixed;
  width: 60px;
  height : 60px;
  right: 3%;
  bottom: 5%;
  z-index: 999;
  cursor: pointer;
`;
