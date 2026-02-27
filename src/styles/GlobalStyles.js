import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Georgia", serif;
    background-color: #e9e7e2;
    color: #2b2b2b;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;