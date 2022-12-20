import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    margin: 0 auto;
    max-width: 1920px;
    min-width: 1240px;
    background-color: #ffffff;
    font-family: 'Pretendard-Regular', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    font-family: 'Pretendard-Regular', sans-serif;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Pretendard-Regular', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  
`;

export default GlobalStyle;
