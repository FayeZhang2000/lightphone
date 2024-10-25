import styled from "styled-components";
import { Title } from "./StyledComponent";
import { Description } from "./StyledComponent";
import { Input } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { BreakPoint } from "./StyledComponent";
import { InputLabel } from "./StyledComponent";
import { InputContainer } from "./StyledComponent";
const PersonalInfo = () => {
  return (
    <div className="container">
      <Title>What's Your address?</Title>
      {/* Full Name Input */}
      <InputContainer>
        <Input placeholder=" " required />
        <InputLabel>Full Name</InputLabel>
      </InputContainer>

      {/* Street Address Input */}
      <InputContainer>
        <Input placeholder=" " required />
        <InputLabel>Street Address</InputLabel>
      </InputContainer>

      {/* Apt, Suite Input */}
      <InputContainer>
        <Input placeholder=" " />
        <InputLabel>Apt, Suite, other (optional)</InputLabel>
      </InputContainer>

      {/* City and ZIP Input */}
      <InputRow>
        <InputContainer style={{ flex: 1, marginRight: "10px" }}>
          <Input placeholder=" " required />
          <InputLabel>City</InputLabel>
        </InputContainer>
        <InputContainer style={{ flex: 1 }}>
          <Input placeholder=" " required />
          <InputLabel>ZIP</InputLabel>
        </InputContainer>
      </InputRow>

      {/* State Input */}
      <InputContainer>
        <Input placeholder=" " required />
        <InputLabel>State</InputLabel>
      </InputContainer>

      {/* Country Input */}
      <InputContainer>
        <Input placeholder=" " required />
        <InputLabel>Country</InputLabel>
      </InputContainer>

      <Button>Save and Continue</Button>
    </div>
  );
};

// Flex container for City and ZIP
const InputRow = styled.div`
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: space-between; /* 左右对齐 */
`;
export default PersonalInfo;
