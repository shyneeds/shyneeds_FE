import { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown } from "react-icons/fi";

export const Dropdown = ({ selected, setSelected }: any) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "여성들과 함께", 
    "남성들과 함께",
    "아이 동반하여",
    "반려동물과 함께",
    "누구든지 함께",  ]
  
  return (
    <DropdownBox>
      <DropdownBtn onClick={(e) => 
        setIsActive(!isActive)}
      >
        {selected ? selected : "날 선택해줘"}
        <FiChevronDown />
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownBox>  
  )
}

const DropdownBox = styled.div`
  font-size: 1.5rem;
  width: 14rem;
  margin: 100px auto;
  position: relative;
  display: inline-block;

`
const DropdownBtn = styled.div`
  padding: 15px;
  background-color: #fff;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #000;
  gap: 0.5rem;
`

const DropdownContent = styled.div`
  position: absolute;
  top: 95%;
  padding: 15px;
  background: #fff;
  font-weight: 500;
  color: #000;
  width: 100%;
`

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f4f4f4;
  }
`