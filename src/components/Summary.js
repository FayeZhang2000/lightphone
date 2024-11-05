import { Title, SubTitle, SectionContainer } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();
  const { summaryDetails, planDetails } = useSelector(
    (state) => state.userInfo
  );

  const handleNext = () => {
    navigate("/myplan");
  };

  return (
    <div className="container">
      <Title>Thank you for your purchase!</Title>
      <SubTitle>Order Summary</SubTitle>
      <SectionContainer>
        <p>
          <strong>Name:</strong> {summaryDetails?.name || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {summaryDetails?.email || "N/A"}
        </p>
        <p>
          <strong>Activation Date:</strong>{" "}
          {summaryDetails?.activationDate || "N/A"}
        </p>
      </SectionContainer>

      <SubTitle>Plan Details</SubTitle>
      <SectionContainer>
        <p>
          <strong>Currency:</strong> {planDetails?.currency || "N/A"}
        </p>
        <p>
          <strong>Plan Amount:</strong> {planDetails?.plan_Amt || "N/A"}
        </p>
        <p>
          <strong>Sim Card Fee:</strong> {planDetails?.simcard_amt || "N/A"}
        </p>
        <p>
          <strong>Subtotal:</strong> {planDetails?.subtotal || "N/A"}
        </p>
        <p>
          <strong>Taxes:</strong>{" "}
          {planDetails?.gst_Amt + planDetails?.pst_Amt || "N/A"}
        </p>
        <p>
          <strong>Total:</strong> {planDetails?.total || "N/A"}
        </p>
      </SectionContainer>

      <Button onClick={handleNext}>My Plans</Button>
    </div>
  );
};

export default Summary;
