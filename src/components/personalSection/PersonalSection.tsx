import styled from 'styled-components';
import { PersonalTitle } from './PersonalTitle';
import { PersonalGoodsList } from './PersonalGoodsList';
import { PersonalButton } from './PersonalButton';
import { PersonalBrowser } from './PersonalBrowser';
import { RecommendButton } from './PersonalRecommendButton';

const PersonalSectionStyles = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const PersonalSection = () => {
  return (
    <PersonalSectionStyles>
      <PersonalTitle />
      <PersonalBrowser />
      <PersonalButton />
      <PersonalGoodsList />
      <RecommendButton />
    </PersonalSectionStyles>
  )
}
