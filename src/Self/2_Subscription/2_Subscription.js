import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Title, Box, Button } from "../../components/StyledComponent";

const Subscription = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Title>Light Plan</Title>
        <SettingsButton
          onClick={() => navigate("/subscription/subscriptionSetting")}
        >
          Subscription Settings
        </SettingsButton>
      </Header>
      <PhoneNumber>+1 (571) 663-3651</PhoneNumber>

      <Section>
        <SectionTitle>Usage</SectionTitle>
        <UsageInfo>
          <UsageBarContainer>
            <UsageBar style={{ width: "0%" }} />
          </UsageBarContainer>
          <UsageText>0 MB used</UsageText>
          <UsageText>1 GB total</UsageText>
        </UsageInfo>
        <Notice>Data usage data can be delayed by up to 48 hours</Notice>
        <AddDataBox>
          <AddDataHeader>Add Data</AddDataHeader>
          <DataOptions>
            <DataOption onClick={() => navigate("/subscription/topupCheckout")}>
              2 GB for $20.00
            </DataOption>
            <DataOption onClick={() => navigate("/subscription/topupCheckout")}>
              1 GB for $10.00
            </DataOption>
          </DataOptions>
        </AddDataBox>
      </Section>

      <Section>
        <SectionTitle>Billing</SectionTitle>
        <BillingInfo>
          <BillingItem>
            <Icon>🔄</Icon>
            <BillingText>
              <span>Next Renewal</span>
              <span>Tuesday, Dec 3, 2024, 4:05 PM</span>
            </BillingText>
          </BillingItem>
          <BillingItem>
            <Icon>🏷️</Icon>
            <BillingText>
              <span>Price</span>
              <span>$30.00</span>
            </BillingText>
          </BillingItem>
        </BillingInfo>
      </Section>

      <Section>
        <SectionTitle>Subscription Details</SectionTitle>
        <DetailsList>
          {/* Phone Number */}
          <DetailItem>
            <Icon>📞</Icon>
            <DetailText>
              <span>Phone Number</span>
              <span>+1 (571) 663-3651</span>
            </DetailText>
          </DetailItem>

          {/* Plan Details */}
          <DetailItem
            onClick={() => navigate("/plansDetail")}
            style={{ cursor: "pointer" }}
          >
            <Icon>📄</Icon>
            <DetailText>
              <span>Plan Details</span>
              <span>Light Plan</span>
            </DetailText>
            <Arrow>→</Arrow>
          </DetailItem>

          {/* SIM ICCID */}
          <DetailItem
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/subscription/SIMcard")}
          >
            <Icon>💳</Icon>
            <DetailText>
              <span>SIM ICCID #</span>
              <span>89014104274143188192</span>
            </DetailText>
            <Arrow>→</Arrow>
          </DetailItem>
        </DetailsList>
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
`;

const SettingsButton = styled.button`
  font-size: 12px;
  padding: 5px 10px;
  margin-bottom: 12px;
  background-color: #e0e0e0;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const PhoneNumber = styled.div`
  font-size: 16px;
  color: #555;
  margin: 10px 0;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const UsageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

const UsageBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 10px;
`;

const UsageBar = styled.div`
  height: 100%;
  background-color: #007bff;
`;

const UsageText = styled.span`
  font-size: 14px;
  color: #555;
`;

const Notice = styled.p`
  font-size: 12px;
  color: #888;
  margin-top: 10px;
`;

const AddDataBox = styled.div`
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
`;

const AddDataHeader = styled.div`
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Arrow = styled.span`
  font-size: 18px;
`;

const DataOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const DataOption = styled.div`
  background-color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BillingInfo = styled.div`
  margin-top: 10px;
`;

const BillingItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

const BillingText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #555;
`;

const DetailsList = styled.div`
  margin-top: 10px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #555;
`;
export default Subscription;
