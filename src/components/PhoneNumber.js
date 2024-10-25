import styled from "styled-components";
import { Title } from "./StyledComponent";
import { Description } from "./StyledComponent";
import { InputContainer, Input, InputLabel } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { BreakPoint } from "./StyledComponent";

const PhoneNumber = () => {
  return (
    <div className="container">
      <Title>Your Phone Number</Title>
      <OptionButton>
        <OptionText>Get a new number</OptionText>
        <Arrow>➔</Arrow>
      </OptionButton>

      <OptionButton>
        <OptionText>Keep my existing number</OptionText>
        <Arrow>➔</Arrow>
      </OptionButton>

      <Info>
        Most transfers are completed within 30 minutes. In some rare cases,
        transfers can take up to 2 days. During the transfer, you will have
        normal service and can keep using your number on your old provider.
      </Info>
      <Button>Save and Continue</Button>
    </div>
  );
};
const OptionButton = styled.div`
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: space-between; /* 左右对齐 */
  align-items: center; /* 垂直居中 */
  padding: 12px; /* 内边距 */
  border: 1px solid #d3d5d8; /* 边框颜色 */
  border-radius: 5px; /* 圆角 */
  cursor: pointer; /* 鼠标悬停时为指针 */
  margin-bottom: 10px; /* 与下方元素的间距 */

  &:hover {
    background-color: #f5f5f5; /* 鼠标悬停时的背景颜色 */
  }
`;

const OptionText = styled.span`
  font-size: 16px; /* 字体大小 */
`;

const Arrow = styled.span`
  font-size: 20px; /* 箭头大小 */
  color: #606774; /* 箭头颜色 */
`;

const Info = styled.p`
  font-size: 14px;
  color: #606774; /* 描述文本颜色 */
  margin-top: 20px; /* 与上方元素的间距 */
  border: 1px solid #d3d5d8; /* 边框颜色 */
  border-radius: 5px; /* 圆角 */
`;

export default PhoneNumber;
