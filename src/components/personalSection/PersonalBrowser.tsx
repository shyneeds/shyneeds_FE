import styled from 'styled-components';

const PersonalBrowserStyles = styled.div`
  margin: 5rem 5rem;
  font-size: 30px;
  text-align: center;
` 

export const PersonalBrowser = () => {
  return (
    <PersonalBrowserStyles>
      <p>나는 여성끼리 여행을 가고 싶어요</p>
      <br />
      <p>인도에서 문화탐방 여행을 즐기고 싶어요</p>
    </PersonalBrowserStyles>
  ) 
}