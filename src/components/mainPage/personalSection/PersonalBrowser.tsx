import { useState } from 'react';
import styled from 'styled-components';
import { Dropdown } from './Dropdown';

export const PersonalBrowser = () => {
  const [selected, setSelected] = useState('');
  return (
    <PersonalBrowserStyles>
      <BrowserText>
        나는 <Dropdown selected={selected} setSelected={setSelected} />
        여행을 가고 싶어요
      </BrowserText>
      <br />
      <BrowserText>인도에서 문화탐방 여행을 즐기고 싶어요</BrowserText>
    </PersonalBrowserStyles>
  );
};

const PersonalBrowserStyles = styled.div`
  margin: 5rem 5rem;
  font-size: 30px;
  text-align: center;
`;

const BrowserText = styled.div`
  margin-top: -5rem;
`;
