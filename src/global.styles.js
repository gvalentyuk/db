import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    padding: 20px 80px;
    font-family: 'Open Sans Condensed', sans-serif;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
  
  .rccs{
    margin: 0;
  }
`;
