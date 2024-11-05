import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/StyledComponent";
import { useNavigate } from "react-router-dom";
import { BsExclamationTriangle } from "react-icons/bs";

const CancelSubscription = () => {
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState("");

  const reasons = [
    "Support unsatisfactory",
    "Connectivity unsatisfactory",
    "Would rather not say",
    "No need for device or subscription",
    "Price too high",
    "Other",
  ];

  const handleReasonChange = (reason) => {
    setSelectedReason(reason);
  };

  const handleConfirm = () => {
    if (selectedReason) {
      console.log("Cancellation reason:", selectedReason);
      //TODO -
      //   navigate("/confirmation");
    } else {
      alert("Please select a reason for cancellation.");
    }
  };

  return (
    <Container>
      <Header>
        <BsExclamationTriangle />
        <Title>Cancel subscription</Title>
      </Header>
      <Description>
        Are you sure you want to cancel your subscription? If so, mind telling
        us why?
      </Description>

      <ReasonsList>
        {reasons.map((reason, index) => (
          <ReasonItem key={index} onClick={() => handleReasonChange(reason)}>
            <RadioButton
              type="radio"
              checked={selectedReason === reason}
              readOnly
            />
            <Label>{reason}</Label>
          </ReasonItem>
        ))}
      </ReasonsList>

      <ButtonContainer>
        <BackButton onClick={() => navigate(-1)}>Go back</BackButton>
        <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  font-family: "Arima", sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 10px;
  color: #333;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const ReasonsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const ReasonItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const RadioButton = styled.input`
  margin-right: 10px;
  accent-color: #333;
`;

const Label = styled.span`
  font-size: 14px;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const BackButton = styled(Button)`
  background-color: white;
  color: #333;
  border: 1px solid #333;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ConfirmButton = styled(Button)`
  background-color: #333;
  color: white;
  &:hover {
    background-color: #444;
  }
`;

export default CancelSubscription;
