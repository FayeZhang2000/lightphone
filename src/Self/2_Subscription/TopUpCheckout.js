import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/StyledComponent";
import { BsInfoCircle } from "react-icons/bs";

const TopUpCheckout = () => {
  const navigate = useNavigate();

  const handlePaymentMethodClick = () => {
    // navigate("/payment-method");
  };

  return (
    <Container>
      <Title>Checkout</Title>

      {/* Data Top-up Section */}
      <TopUpBox>
        <TopUpTitle>2GB Data Top-up</TopUpTitle>
        <TopUpPrice>$20.00</TopUpPrice>
        <TopUpDescription>
          Valid through the end of your billing period
          <br />
          <DateText>(Tuesday, Dec 3, 2024, 4:05 PM)</DateText>
        </TopUpDescription>
        <TopUpProvider>2GB data top-up on AT&T</TopUpProvider>
      </TopUpBox>

      {/* Payment Method Section */}
      <Section>
        <SectionTitle>Payment Method</SectionTitle>
        <PaymentMethod onClick={handlePaymentMethodClick}>
          Amex •••• 1001
        </PaymentMethod>
      </Section>

      {/* Payment Details Section */}
      <Section>
        <SectionTitle>Payment Details</SectionTitle>
        <DetailsBox>
          <DetailRow>
            <DetailLabel>Subtotal</DetailLabel>
            <DetailAmount>$20.00</DetailAmount>
          </DetailRow>
          <DetailRow>
            <DetailLabel>
              Taxes & Surcharges <BsInfoCircle size={12} />
            </DetailLabel>
            <DetailAmount>$2.00</DetailAmount>
          </DetailRow>
          <TotalRow>
            <TotalLabel>TOTAL</TotalLabel>
            <TotalAmount>$22.00</TotalAmount>
          </TotalRow>
        </DetailsBox>
      </Section>

      {/* Confirm Button */}
      <Button onClick={() => navigate("/confirmation")}>Confirm Payment</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  font-family: "Arima", sans-serif;
`;

const Title = styled.h1`
  font-size: 22px;
  color: #333;
  margin-bottom: 20px;
`;

const TopUpBox = styled.div`
  border: 1px solid #e0e0e0;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const TopUpTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const TopUpPrice = styled.p`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const TopUpDescription = styled.p`
  font-size: 12px;
  color: #666;
`;

const DateText = styled.span`
  font-size: 12px;
  color: #999;
`;

const TopUpProvider = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 10px;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

const PaymentMethod = styled.div`
  font-size: 14px;
  color: #007aff;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DetailsBox = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 8px;
`;

const DetailLabel = styled.span`
  color: #666;
`;

const DetailAmount = styled.span`
  color: #333;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const TotalLabel = styled.span`
  color: #333;
`;

const TotalAmount = styled.span`
  color: #333;
`;

export default TopUpCheckout;
