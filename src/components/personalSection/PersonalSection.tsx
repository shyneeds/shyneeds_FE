import styled from 'styled-components';
// import { PersonalTitle } from './PersonalTitle';
import { PersonalGoodsList } from './PersonalGoodsList';
import { PersonalButton } from './PersonalButton';
import { PersonalBrowser } from './PersonalBrowser';

export const PersonalSection = () => {
  return (
    <PersonalSectionStyles>
      {/* <PersonalTitle /> */}
      <PersonalBrowser />
      <PersonalButton />
      <PersonalGoodsList />
    </PersonalSectionStyles>
  );
};

const PersonalSectionStyles = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 62vw;
  margin: 0 auto;
`;
