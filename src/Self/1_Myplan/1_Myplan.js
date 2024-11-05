import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Title, Box, Button } from "../../components/StyledComponent";

const MyPlan = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/plans");
  };

  return (
    <div className="container">
      <Header>
        <Title>My Plans</Title>
        <SettingsButton onClick={() => navigate("/setting")}>
          Account setting
        </SettingsButton>
      </Header>

      <Box>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>Light Plan</span>
        <span style={{ fontSize: "24px" }}>$30/month</span>
        <span style={{ fontSize: "14px", color: "#555" }}>
          Unlimited Calls & Messages with 1GB of Data
        </span>
      </Box>
      <Box>
        <UsageInfo>
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>346 MB</span>
          <span style={{ fontSize: "14px", color: "#555" }}>used</span>
          <UsageBar>
            <UsageProgress style={{ width: "34.6%" }} />
          </UsageBar>
          <span style={{ fontSize: "14px", color: "#555" }}>1 GB total</span>
        </UsageInfo>
        <span style={{ fontSize: "10px", color: "#999", marginTop: "10px" }}>
          Data usage data can be delayed by up to 48 hours
        </span>
        <DeviceInfo>
          <DeviceRow>
            <DeviceIcon>📱</DeviceIcon>
            <DeviceText>
              <span>Light Phone Light Phone II</span>
              <span style={{ fontSize: "12px", color: "#555" }}>
                +1 (917) 825-3988
              </span>
            </DeviceText>
          </DeviceRow>
          <DeviceRow>
            <DeviceIcon>📅</DeviceIcon>
            <DeviceText>
              <span>Next Renewal</span>
              <span style={{ fontSize: "12px", color: "#555" }}>
                Thursday, Apr 25, 2024, 9:41 PM
              </span>
            </DeviceText>
          </DeviceRow>
        </DeviceInfo>
      </Box>
      {/* //FIXME - direct to subscription page later */}
      <SubscriptionDetails onClick={() => navigate("/subscription")}>
        Subscription Details →
      </SubscriptionDetails>
      <Button onClick={handleClick}>Add a Plan</Button>
    </div>
  );
};

export default MyPlan;

// Styled Components
const UsageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 20px;
`;

const UsageBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

const UsageProgress = styled.div`
  height: 100%;
  background-color: black;
`;

const DeviceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const DeviceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DeviceIcon = styled.span`
  font-size: 16px;
`;

const DeviceText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
`;

const SubscriptionDetails = styled.div`
  font-size: 14px;
  color: black;
  cursor: pointer;
  text-align: left;
  margin-top: 15px;
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
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
