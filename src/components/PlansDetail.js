import styled from "styled-components";
import { SubTitle, Title } from "./StyledComponent";
import { Description } from "./StyledComponent";
import { Input } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { BreakPoint } from "./StyledComponent";
import { Box } from "./StyledComponent";
import { useNavigate } from "react-router-dom";
const PlansDetail = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/personalInfo");
  };
  return (
    <div className="container">
      <Title>Plan detail </Title>
      <PlanPrice>$70.00 per Month</PlanPrice>

      <SectionTitle>Allowances</SectionTitle>
      <Allowances>
        <Allowance>
          <AllowanceIcon>📶 Data:</AllowanceIcon>
          <AllowanceValue>Unlimited</AllowanceValue>
        </Allowance>
        <Allowance>
          <AllowanceIcon>📞 Voice</AllowanceIcon>
          <AllowanceValue>Unlimited</AllowanceValue>
        </Allowance>
        <Allowance>
          <AllowanceIcon>💬 Text Messages</AllowanceIcon>
          <AllowanceValue>Unlimited</AllowanceValue>
        </Allowance>
      </Allowances>

      <SectionTitle>Plan Overview</SectionTitle>
      <PlanOverview>
        <OverviewItem>
          <OverviewLabel>💰 Price:</OverviewLabel>
          <OverviewValue>$70.00</OverviewValue>
        </OverviewItem>
        <OverviewItem>
          <OverviewLabel>📅 Billing Period:</OverviewLabel>
          <OverviewValue>1 Month</OverviewValue>
        </OverviewItem>
        <OverviewItem>
          <OverviewLabel>☎️ Phone Number:</OverviewLabel>
          <OverviewValue>Included</OverviewValue>
        </OverviewItem>
      </PlanOverview>

      <Button onClick={handleNext}>Select Plan </Button>
    </div>
  );
};

const PlanPrice = styled.p`
  font-size: 18px;
  text-align: center; /* 居中对齐 */
  color: #333; /* 可根据需要调整颜色 */
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
  padding-top: 20px;
  margin-bottom: 10px;
  border-top: 1px solid #e0e0e0; /* 下划线 */
  padding-bottom: 5px;
`;

const Allowances = styled.div`
  margin-bottom: 20px;
`;

const Allowance = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  justify-content: space-between; /* 左右对齐 */
`;

const AllowanceIcon = styled.span`
  margin-right: 10px; /* 图标与文本之间的间距 */
`;

const AllowanceValue = styled.span`
  display: flex;
  justify-content: space-between; /* 左右对齐 */
`;
const PlanOverview = styled.div`
  margin-bottom: 20px;
`;

const OverviewItem = styled.div`
  display: flex;
  justify-content: space-between; /* 左右对齐 */
  margin-bottom: 5px;
`;

const OverviewLabel = styled.span`
  font-weight: bold;
`;

const OverviewValue = styled.span`
  color: #333; /* 可根据需要调整颜色 */
`;

export default PlansDetail;
