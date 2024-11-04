import styled from "styled-components";
import { SubTitle, Title } from "./StyledComponent";
import { Description } from "./StyledComponent";
import { Input } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { BreakPoint } from "./StyledComponent";
import { Box } from "./StyledComponent";
import { useNavigate } from "react-router-dom";
const Plans = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/plansDetail");
  };
  return (
    <div className="container">
      <Title>Select a Plan</Title>

      <Box>
        <span style={{ fontSize: "24px" }}>Light Plan</span>
        <span style={{ fontSize: "24px" }}>$30/month</span>
        <span style={{ fontSize: "14px" }}>
          Unlimited Calls & Messages with 1GB of Data
        </span>
      </Box>

      <Box>
        <span style={{ fontSize: "24px" }}>Plus Plan</span>
        <span style={{ fontSize: "24px" }}>$45/month</span>
        <span style={{ fontSize: "14px" }}>
          Unlimited Calls & Messages with 5GB of Data
        </span>
      </Box>
      <Box>
        <span style={{ fontSize: "24px" }}>Plus Plan</span>
        <span style={{ fontSize: "24px" }}>$70/month</span>
        <span style={{ fontSize: "14px" }}>
          Unlimited calls & messages & data for hotspot usage.
        </span>
      </Box>

      <Button onClick={handleClick}>Select</Button>
    </div>
  );
};

export default Plans;
