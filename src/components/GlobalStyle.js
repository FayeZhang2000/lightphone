import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box; /* 确保所有元素的宽度和高度包括内边距和边框 */
  }
  html, body {
    margin: 0;
    font-family: "Arima", system-ui;
    font-optical-sizing: auto;

  }

  .container {
   width:100%;
   height:100%;
    max-width: 500px; /* 最大宽度 */
    border: 2px solid pink; 
    margin: 0; /* 移除外边距 */
    position: relative; /* 使容器成为相对定位的基准 */
  }
`;

export default GlobalStyle;
