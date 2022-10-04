import styled from "styled-components"
import { ImCross } from "react-icons/im";

export const MainBanner = (props: any) => {
  const { onClose } = props;
  
  return (
    <MainBannerContainer>
      <img 
        src="https://cdn.imweb.me/upload/S202107158604372051740/8be283bb07ca2.jpg" 
        alt="main_banner" 
      />
      <ImCross
        className="close-button"
        onClick={() => { onClose(false) }}
      >
      </ImCross>
      
    </MainBannerContainer>
  )
}

const MainBannerContainer = styled.div`
  width: 11rem;
  position: absolute;
  top: 12rem;
  right: 6rem;

  .close-button {
    width: 1rem;
    color: #fff;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  &:hover {
    cursor: pointer;
  }
`