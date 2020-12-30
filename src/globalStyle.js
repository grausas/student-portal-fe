import { createGlobalStyle } from "styled-components";
import logo from "./assets/background.jpg";

const GlobalStyle = createGlobalStyle`
   * {
      font-family: 'Poppins', sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }
   body {
      background-image: url(${logo});
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
   }
`;

export default GlobalStyle;
