import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 ${({ theme }) => css`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   body {
     background-color: #807ece;
     -webkit-font-smoothing: antialiased;
   }
   body,
   input,
   textarea,
   button {
     font: 400 1rem Roboto, sans-serif;
   }
 `}
`;
