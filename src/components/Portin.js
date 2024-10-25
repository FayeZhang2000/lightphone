import styled from "styled-components";
import { Title } from "./StyledComponent";
import { Description } from "./StyledComponent";
import { InputContainer, Input, InputLabel } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { BreakPoint } from "./StyledComponent";

const Portin = () => {
  return (
    <div className="container">
      <Title>What's Your Current Phone Number?</Title>
      <Label>Country/Region</Label>
      <Select>
        <option>United States (+1)</option>
        <option>Canada (+1)</option>
      </Select>

      <Label>Current Phone Number</Label>
      <Input placeholder="1 (302) 217-0075" required />

      <Label>Current Carrier</Label>
      <Select>
        <option>AT&T</option>
        <option>Verizon</option>
      </Select>

      <Warning>
        ⚠️ Do not cancel your existing plan until your number is successfully
        ported.
      </Warning>
      <Button>Save and Continue</Button>
    </div>
  );
};
const Label = styled.label`
  font-size: 14px;
  margin-top: 10px; /* 上方间距 */
`;

const Select = styled.select`
  width: 100%; /* 宽度填满 */
  padding: 12px 16px; /* 内边距 */
  border: 1px solid #606774;
  border-radius: 5px; /* 圆角 */
  margin-bottom: 15px; /* 与下方元素的间距 */
`;

const Warning = styled.p`
  font-size: 14px;
  margin-top: 20px; /* 与上方元素的间距 */
`;

export default Portin;
