import { FC, useRef, useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';

interface Props {
  show: boolean;
}

export const Modal: FC<Props> = ({ show }) => {
  // show가 false면 화면에 메뉴를 나타내지 않는다.
  if (!show) {
    return null;
  }
  // show가 true면 아래 메뉴가 화면에 나타난다.
  return (
    <MenuBox>
      <li>5070끼리</li>
      <li>2040끼리</li>
      <li>남자끼리</li>
      <li>여자끼리</li>
      <li>자녀동반</li>
      <li>누구든지</li>
    </MenuBox>
  );
};

const MenuBox = styled.ul``;
