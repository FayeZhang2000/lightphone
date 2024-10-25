import styled from "styled-components";
import { Title } from "./StyledComponent";
import { Description } from "./StyledComponent";
import { InputContainer, Input, InputLabel } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { BreakPoint } from "./StyledComponent";
import { Box } from "./StyledComponent";
const Checkout = () => {
  return (
    <div className="container">
      <Title>Checkout</Title>
      <Box>
        <span style={{ fontSize: "24px" }}>Light Plan</span>
        <span style={{ fontSize: "24px" }}>$30/month</span>
        <span style={{ fontSize: "14px" }}>
          Unlimited Calls & Messages with 1GB of Data
        </span>
      </Box>
      <Title style={{ fontSize: "20px" }}>Account Details</Title>
      <Label>Full Name</Label>
      <DetailRow>
        <Value>test</Value>
        <Arrow>➔</Arrow>
      </DetailRow>

      <Label>Home Address</Label>
      <DetailRow>
        <Address>
          <AddressLine>112 N Main St</AddressLine>
          <AddressLine>British Columbia</AddressLine>
          <AddressLine>Windsor, NJ 08561</AddressLine>
          <AddressLine>United States</AddressLine>
        </Address>
        <Arrow>➔</Arrow>
      </DetailRow>

      <Button>Pay Now</Button>
    </div>
  );
};
const DetailRow = styled.div`
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中 */
  margin-bottom: 15px; /* 每一行的间距 */
  border-bottom: 1px solid #d3d5d8;
`;

const Label = styled.span`
  font-weight: bold;
  display: block; /* 占据一整行 */
  margin: 15px 0;
  flex: 1; /* 使标签占据可用空间 */
`;

const Value = styled.span`
  font-size: 16px;
  color: #333; /* 可根据需要调整颜色 */
  flex: 2; /* 使值占据更多空间 */
`;

const Arrow = styled.span`
  font-size: 20px; /* 调整箭头大小 */
  margin-left: 10px; /* 左侧间距 */
  color: #606774; /* 箭头颜色 */
  flex: 0; /* 使箭头仅占用必要空间 */
`;

const Address = styled.div`
  margin-top: 5px; /* 地址与标签之间的间距 */
  flex: 2; /* 使地址占据更多空间 */
`;

const AddressLine = styled.div`
  font-size: 16px; /* 可根据需要调整字体大小 */
  color: #333; /* 可根据需要调整颜色 */
`;

export default Checkout;
