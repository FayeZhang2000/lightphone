import styled from "styled-components";
import { Title } from "./StyledComponent";
import { Description } from "./StyledComponent";
import { InputContainer, Input, InputLabel } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { BreakPoint } from "./StyledComponent";

const Payment = () => {
  return (
    <div className="container">
      <Title>Select Payment Method</Title>
      <InputContainer>
        <Input></Input>
        <InputLabel>Credit Card</InputLabel>
      </InputContainer>
      <Button>Save and Continue</Button>
    </div>
  );
};

export default Payment;
