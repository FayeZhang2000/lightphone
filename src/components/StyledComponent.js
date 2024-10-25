import styled from "styled-components";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
export const SubTitle = styled.h2`
  font-size: 20px;
  color: #d3d5d8;
  font-weight: bold;
`;
export const InputContainer = styled.div`
  position: relative; /* 使标签能够绝对定位 */
  margin-bottom: 15px; /* 给予底部间距 */
`;
export const Input = styled.input`
  width: 100%; /* 宽度填满 */
  font-family: "Arima", system-ui;
  padding: 25px 20px 6px; /* 内边距 */
  border: 1px solid #606774;
  border-radius: 5px; /* 圆角 */
  font-size: 16px; /* 字体大小 */
  box-shadow: none; /* 去掉默认阴影 */

  &:focus {
    border: 2px solid black;
    outline: none; /* 去掉默认轮廓 */
  }
`;
export const InputLabel = styled.label`
  position: absolute; /* 绝对定位 */
  top: 8px; /* 离上边的距离 */
  left: 12px; /* 离左边的距离 */
  font-size: 11px; /* 标签字体大小 */
  color: #606774; /* 标签颜色 */
  transition: 0.2s ease all; /* 标签动画效果 */
`;
export const Box = styled.div`
  width: 100%; /* 宽度填满 */
  height: 25%;
  font-family: "Arima", system-ui;
  padding: 40px; /* 内边距 */
  border: 2px solid #d3d5d8;
  border-radius: 5px; /* 圆角 */
  font-size: 16px; /* 字体大小 */
  box-shadow: none; /* 去掉默认阴影 */
  display: flex;
  flex-direction: column; /* 纵向排列 */
  text-align: center;
  margin-bottom: 10px;
  & span {
    color: #d3d5d8;
  }
`;
export const Button = styled.button`
  width: 100%; /* 宽度填满 */
  padding: 10px 16px; /* 内边距 */
  background-color: #1a1a1a; /* 背景颜色 */
  color: white; /* 字体颜色 */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px; /* 圆角 */
  font-size: 16px; /* 字体大小 */
  font-weight: bold;
  font-family: "Arima", system-ui;
  cursor: pointer; /* 鼠标悬停时为指针 */

  &:hover {
    background-color: #333; /* 鼠标悬停时的背景颜色 */
  }
`;

export const Description = styled.p`
  font-size: 15px;
  color: #606774;
`;

export const BreakPoint = styled.div`
  height: 20px;
  width: 100%; /* 设置为100%宽度 */
`;
