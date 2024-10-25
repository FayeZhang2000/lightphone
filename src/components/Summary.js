import styled from "styled-components";
import { Title } from "./StyledComponent";
import { Description } from "./StyledComponent";
import { InputContainer, Input, InputLabel } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { BreakPoint } from "./StyledComponent";

const Summary = () => {
  return (
    <div className="container">
      <Title>Portin Reuqest</Title>
      <PhoneNumber>+1 (302) 217-0075</PhoneNumber>
      <InfoText>
        You decided to bring your existing number with you. After the checkout,
        we will ask you for more information to start the porting process.
      </InfoText>

      <SectionTitle>Payment Details</SectionTitle>

      <DiscountCodeLabel>Discount Code</DiscountCodeLabel>
      <Select>
        <option>Select a discount code</option>
      </Select>

      <DetailsRow>
        <DetailLabel>Subtotal</DetailLabel>
        <DetailValue>$30.00</DetailValue>
      </DetailsRow>

      <DetailsRow>
        <DetailLabel>Discount</DetailLabel>
        <DetailValue>-$33.00</DetailValue>
        <DetailDescription>LIGHTPHONE: 1 Month $33 Off</DetailDescription>
      </DetailsRow>

      <DetailsRow>
        <DetailLabel>Taxes & Surcharges</DetailLabel>
        <DetailValue>-$0.30</DetailValue>
      </DetailsRow>

      <TotalRow>
        <TotalLabel>TOTAL</TotalLabel>
        <TotalValue>$0.00</TotalValue>
      </TotalRow>

      <CheckboxContainer>
        <Checkbox type="checkbox" />
        <CheckboxLabel>
          By checking this box, you confirm that you have read and agreed to the
          <a href="#"> Terms of Service</a> and the{" "}
          <a href="#"> Privacy Policy</a>. You thereby agree that you will be
          automatically enrolled in a
        </CheckboxLabel>
      </CheckboxContainer>
      <Button>Pay now</Button>
    </div>
  );
};
const PhoneNumber = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px; /* 下方间距 */
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #606774; /* 信息文本颜色 */
  margin-bottom: 20px; /* 下方间距 */
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  margin: 20px 0 10px; /* 上方间距和下方间距 */
`;

const DiscountCodeLabel = styled.label`
  font-size: 14px;
  margin-top: 10px; /* 上方间距 */
`;

const Select = styled.select`
  width: 100%; /* 宽度填满 */
  padding: 12px 16px; /* 内边距 */
  border: 1px solid #606774;
  border-radius: 5px; /* 圆角 */
  margin-bottom: 15px; /* 与下方元素的间距 */
`;

const DetailsRow = styled.div`
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: space-between; /* 左右对齐 */
  margin-bottom: 10px; /* 每一行的间距 */
`;

const DetailLabel = styled.span`
  font-size: 16px; /* 字体大小 */
`;

const DetailValue = styled.span`
  font-size: 16px; /* 字体大小 */
  color: #333; /* 可根据需要调整颜色 */
`;

const DetailDescription = styled.span`
  font-size: 14px;
  color: #606774; /* 描述文本颜色 */
  display: block; /* 占据一整行 */
`;

const TotalRow = styled(DetailsRow)`
  font-weight: bold; /* 总计行加粗 */
  margin-top: 20px; /* 与上方元素的间距 */
`;

const TotalLabel = styled.span``;

const TotalValue = styled.span``;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center; /* 垂直居中 */
  margin-top: 20px; /* 与上方元素的间距 */
`;

const Checkbox = styled.input`
  margin-right: 10px; /* 右侧间距 */
`;

const CheckboxLabel = styled.label`
  font-size: 14px; /* 字体大小 */
`;
export default Summary;
