import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    color: #424A52;
  }

  img {
    max-width: 100%;
  }
`;
 
export default GlobalStyle;