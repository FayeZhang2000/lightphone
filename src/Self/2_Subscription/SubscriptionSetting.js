import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/StyledComponent";
import { BsCalendar, BsArrowRepeat, BsInfoCircle } from "react-icons/bs";

const SubscriptionSetting = () => {
  const navigate = useNavigate();

  const handleChangePlan = () => {
    //TODO -
    // navigate("/subscription/change-plan");
  };

  const handleCancelSubscription = () => {
    //TODO -
    navigate("/subscription/cancelSubscription");
  };

  return (
    <Container>
      <Header>
        <Title>Subscription Settings</Title>
        <CancelButton onClick={handleCancelSubscription}>
          Cancel Subscription
        </CancelButton>
      </Header>

      <Section>
        <DetailItem>
          <Icon>
            <BsCalendar />
          </Icon>
          <DetailText>
            <span>Subscription Started</span>
            <DateText>Thursday, Oct 3, 2024, 5:05 PM</DateText>
          </DetailText>
        </DetailItem>

        <DetailItem>
          <Icon>
            <BsArrowRepeat />
          </Icon>
          <DetailText>
            <span>Next Renewal</span>
            <DateText>Tuesday, Dec 3, 2024, 4:05 PM</DateText>
          </DetailText>
        </DetailItem>
      </Section>

      <NoticeBox>
        <BsInfoCircle />
        <NoticeText>
          Your subscription will be charged to your selected payment method
          every month.
        </NoticeText>
      </NoticeBox>

      <ButtonWrapper>
        <Button onClick={handleChangePlan}>Change Plan</Button>
      </ButtonWrapper>
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
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

const Section = styled.div`
  margin-top: 20px;
  border-top: 1px solid #e0e0e0;
  padding-top: 15px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const Icon = styled.div`
  font-size: 18px;
  margin-right: 15px;
  color: #888;
`;

const DetailText = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateText = styled.span`
  font-size: 14px;
  color: #333;
`;

const NoticeBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 14px;
  color: #555;
`;

const NoticeText = styled.p`
  margin-left: 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
`;

export default SubscriptionSetting;
