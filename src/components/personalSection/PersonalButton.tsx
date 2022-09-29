import styled from 'styled-components';
import { GrPowerCycle } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";

const ButtonWrapper = styled.div`
  text-align: center;
`

const ButtonStyles = styled.button`
  display: inline-flex;
  align-items: center;
  outline: solid 1px #bbb;
  border-radius: 20px;
  cursor: pointer;
  padding-left: 1em;
  padding-right: 1em;
  height: 2.25em;
  font-size: 1rem;
  margin-left: 1rem;
`

  const WhiteButton = styled(ButtonStyles)`
    color: #000;
    background: #fff;
    &:hover{
      outline: solid 1px #000;
    }
  `

  const BlackButton = styled(ButtonStyles)`
    color: #fff;
    background: #000;
    &:hover{
      background: #333;
    }
  `

export const PersonalButton = () => {
  return (
    <ButtonWrapper>
      <WhiteButton>
        다른 취향 보기 <GrPowerCycle />
      </WhiteButton>
      <BlackButton>
        내 취향 여행 보기 <FiChevronDown />
      </BlackButton>
    </ButtonWrapper>
  )
}
