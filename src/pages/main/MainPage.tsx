import styled from 'styled-components';
import { PersonalSection } from "../.././components/personalSection/PersonalSection"

const MainPageStyles = styled.div`
  width: 62vw;
  margin: 0 auto;
`

export const MainPage = () => {
  return (
    <MainPageStyles>
      <PersonalSection />
    </MainPageStyles>
  )
}