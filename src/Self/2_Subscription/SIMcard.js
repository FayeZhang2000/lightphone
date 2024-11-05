import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/StyledComponent";

const SimCard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Title>SIM Card</Title>
        <ReplaceButton onClick={() => navigate("/replaceSim")}>
          Replace your SIM
        </ReplaceButton>
      </Header>

      <Section>
        <InfoRow>
          <Icon>🌐</Icon>
          <InfoText>
            <Label>Service Provider</Label>
            <Value>AT&T</Value>
          </InfoText>
        </InfoRow>

        <InfoRow>
          <Icon>📲</Icon>
          <InfoText>
            <Label>SIM ICCID #</Label>
            <Value>89014104274143188192</Value>
          </InfoText>
          <CopyButton>Copy</CopyButton>
        </InfoRow>

        <InfoRow>
          <Icon>📄</Icon>
          <InfoText>
            <Label>SIM Type</Label>
            <Value>SIM</Value>
          </InfoText>
        </InfoRow>
      </Section>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  font-family: "Arima", system-ui;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ReplaceButton = styled.button`
  font-size: 12px;
  padding: 5px 10px;
  background-color: #e0e0e0;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const Icon = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;

const InfoText = styled.div`
  flex-grow: 1;
`;

const Label = styled.div`
  font-size: 12px;
  color: #888;
`;

const Value = styled.div`
  font-size: 16px;
  color: #333;
`;

const CopyButton = styled.button`
  font-size: 12px;
  padding: 5px 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default SimCard;
