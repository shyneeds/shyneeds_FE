import styled from 'styled-components';
import { PersonalSection } from "../.././components/personalSection/PersonalSection"

export const MainPage = () => {
  return (
    <MainPageStyles>
      <PersonalSection />
    </MainPageStyles>
  )
}

const MainPageStyles = styled.div`
  width: 62vw;
  margin: 0 auto;
`