import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box; 
  }
  html, body {
    margin: 0;
    font-family: "Arima", system-ui;
    font-optical-sizing: auto;

  }

  .container {
   width:100%;
   height:100%;
    max-width: 400px; 
    /* border: 2px solid pink;  */
    margin: 0; 
    position: relative; 
  }
`;

export default GlobalStyle;
