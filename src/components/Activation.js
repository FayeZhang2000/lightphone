import styled from "styled-components";
import { Title } from "./StyledComponent";
import { Description } from "./StyledComponent";
import { Input } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { BreakPoint } from "./StyledComponent";
import { InputLabel } from "./StyledComponent";
import { InputContainer } from "./StyledComponent";
const Activation = () => {
  return (
    <div className="container">
      <Title>Activate Your SIM Card</Title>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}
      >
        <img width="200px" src="/images/sim.png" alt="Activation Sim Card" />
      </div>
      <Description>
        Please enter the SIM ICCID number (19 or 20 digits and found on the
        card)
      </Description>
      <BreakPoint />
      <InputContainer>
        <Input placeholder=" " required />
        <InputLabel>ICCID #</InputLabel>
      </InputContainer>
      <Button>Activate</Button>
    </div>
  );
};

export default Activation;
