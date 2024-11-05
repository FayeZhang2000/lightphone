import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/StyledComponent";

const Setting = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Settings</Title>

      {/* Account Details Section */}
      <Section>
        <SectionTitle>Account Details</SectionTitle>
        <DetailsList>
          <DetailItem onClick={() => navigate("/account/fullname")}>
            <Icon>👤</Icon>
            <DetailText>
              <span>Full Name</span>
              <span>Testing</span>
            </DetailText>
            <Arrow>→</Arrow>
          </DetailItem>

          <DetailItem>
            <Icon>✉️</Icon>
            <DetailText>
              <span>Email Address</span>
              <span>testing@gophonebox.com</span>
            </DetailText>
          </DetailItem>

          <DetailItem onClick={() => navigate("/account/address")}>
            <Icon>🏠</Icon>
            <DetailText>
              <span>Home Address</span>
              <span>
                9443 Lee Hwy
                <br />
                Washington
                <br />
                Fairfax, VA 22031
                <br />
                United States
              </span>
            </DetailText>
            <Arrow>→</Arrow>
          </DetailItem>

          <DetailItem onClick={() => navigate("/account/birthdate")}>
            <Icon>📅</Icon>
            <DetailText>
              <span>Date of Birth</span>
              <span>June 10, 1992</span>
            </DetailText>
            <Arrow>→</Arrow>
          </DetailItem>
        </DetailsList>
      </Section>

      {/* Billing Information Section */}
      <Section>
        <SectionTitle>Billing Information</SectionTitle>
        <DetailsList>
          <DetailItem onClick={() => navigate("/billing/payment-method")}>
            <Icon>💳</Icon>
            <DetailText>
              <span>Payment Method</span>
              <span>Amex •••• 1001</span>
            </DetailText>
            <Arrow>→</Arrow>
          </DetailItem>

          <DetailItem onClick={() => navigate("/billing/payment-history")}>
            <Icon>📜</Icon>
            <DetailText>
              <span>Payment History</span>
            </DetailText>
            <Arrow>→</Arrow>
          </DetailItem>
        </DetailsList>
      </Section>

      {/* Support & Legal Section */}
      <Section>
        <SectionTitle>Support & Legal</SectionTitle>
        <DetailsList>
          <DetailItem onClick={() => navigate("/support/customer-service")}>
            <Icon>📞</Icon>
            <DetailText>
              <span>Customer Service</span>
            </DetailText>
            <Arrow>→</Arrow>
          </DetailItem>

          <DetailItem onClick={() => navigate("/support/faq")}>
            <Icon>❓</Icon>
            <DetailText>
              <span>FAQ</span>
            </DetailText>
            <Arrow>→</Arrow>
          </DetailItem>

          <DetailItem onClick={() => navigate("/support/terms")}>
            <Icon>📄</Icon>
            <DetailText>
              <span>Terms of Service</span>
            </DetailText>
            <Arrow>→</Arrow>
          </DetailItem>

          <DetailItem onClick={() => navigate("/support/privacy-policy")}>
            <Icon>🔒</Icon>
            <DetailText>
              <span>Privacy Policy</span>
            </DetailText>
            <Arrow>→</Arrow>
          </DetailItem>
        </DetailsList>
      </Section>
    </Container>
  );
};
const Container = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
`;

const Icon = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;

const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #333;

  & span:first-child {
    font-size: 12px;
    color: #666;
  }

  & span:last-child {
    font-size: 14px;
    color: #333;
  }
`;

const Arrow = styled.span`
  font-size: 18px;
  color: #888;
`;
export default Setting;
