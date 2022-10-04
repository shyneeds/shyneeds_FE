import styled from 'styled-components';
import { AiOutlineArrowRight } from "react-icons/ai";

export const RecommendButton = () => {
  return (
    <RecommendButtonStyles>
      여행그룹 추천 받기<AiOutlineArrowRight />
    </RecommendButtonStyles>
  )
}

const RecommendButtonStyles = styled.div`
  background-color: #e4e4e4;
  border-radius: 5px;
  height: 3rem;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
  }
`
