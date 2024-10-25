// src/Header.jsx
import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Wrapper>Header Content</Wrapper>;
};

const Wrapper = styled.div`
  height: 10%; /* Header 占据视口高度的 20% */
  width: 100%; /* 占据 100% 的宽度 */
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 内容居中 */
  align-items: center; /* 垂直居中 */
  background-color: white; /* 背景颜色 */
  border: 2px solid blue; /* 边框颜色 */
`;

export default Header;
