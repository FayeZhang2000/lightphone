import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Title } from "../components/StyledComponent";
import { Box } from "../components/StyledComponent";
import { Button } from "../components/StyledComponent";
const MyPlans = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/plans");
  };
  return (
    <div className="container">
      <Title>My Plans</Title>

      <Box>
        <span style={{ fontSize: "24px" }}>Light Plan</span>
        <span style={{ fontSize: "24px" }}>$30/month</span>
        <span style={{ fontSize: "14px" }}>
          Unlimited Calls & Messages with 1GB of Data
        </span>
      </Box>
      <Box></Box>
      <Box></Box>

      <Button onClick={handleClick}>Add a Plan</Button>
    </div>
  );
};

export default MyPlans;
