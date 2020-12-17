import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      font-family: 'Open Sans', sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }
   body {
      background: #fff;
   }
`;

export default GlobalStyle;
