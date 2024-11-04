import styled from "styled-components";
import { Title, SubTitle } from "./StyledComponent";
import { Description } from "./StyledComponent";
import {
  InputContainer,
  Input,
  InputLabel,
  SectionContainer,
} from "./StyledComponent";
import { Button } from "./StyledComponent";
import { BreakPoint } from "./StyledComponent";
import { Box } from "./StyledComponent";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { simActivationInstance } from "../api/axios";
import {
  setFirstName,
  setLastName,
  setEmail,
  setConfirmEmail,
  setProvince,
  setCity,
  setPhoneNumber,
  setCarrier,
  setAccountNumber,
  setImeiNumber,
  setPortIn,
  setSimCardNumber,
  storeUserInfoInLocalStorage,
  setPlanDetails,
  setSummaryDetails,
} from "../api/UserInfoSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const {
    firstName,
    lastName,
    email,
    confirmEmail,
    province,
    city,
    phoneNumber,
    carrier,
    accountNumber,
    imeiNumber,
    portIn,
    simCardNumber,
    planDetails,
    summaryDetails,
  } = useSelector((state) => state.userInfo);
  const getEndDate = () => {
    const today = new Date();
    const endDate = new Date(today.setDate(today.getDate() + 30));
    return endDate.toISOString().split("T")[0];
  };
  const handleNext = async () => {
    try {
      const response = await simActivationInstance.post(
        "/api/Activation/PostActivationInfoPrepaid",
        {
          simcardOrder: true,
          simcard_no: simCardNumber || "",
          startDate: new Date().toISOString().split("T")[0],
          endDate: getEndDate(),
          planId: 1689,
          firstName,
          lastName,
          email,
          serviceType: "M",
          portin_carrier: carrier,
          portin_accountNo: accountNumber,
          portin_phoneNo: phoneNumber,
          portin_IMEI: imeiNumber,
          service_countryId: 42,
          service_province: province,
          service_city: city,
          delivery_countryId: 0,
          delivery_province: "",
          delivery_address: "",
          delivery_postal: "",
          currency: "CAD",
          simcard_fee: 0,
          prorate_fee: 0,
          charge_duration: 0,
          plan_fee: planDetails.plan_Amt,
          gst_rate: planDetails.gst_rate,
          pst_rate: planDetails.pst_rate,
          gst_amt: planDetails.gst_Amt,
          pst_amt: planDetails.pst_Amt,
          subtotal: planDetails.subtotal,
          total: planDetails.total,
          promocode: "",
          promocredit: 0,
          bizId: 0,
          sfID: 0,
          referral_cnum: "",
          consent_cem: true,
          shipping_contact_number: "",
        }
      );

      if (response.status === 200) {
        console.log("checkout response data", response);
        navigate("/payment");
      } else {
        console.error("failed:", response.error);
      }
    } catch (error) {
      console.error("Error occurred during activation:", error);
    }
  };
  return (
    <div className="container">
      <Title>Checkout</Title>

      <SubTitle>Plan Details</SubTitle>
      <SectionContainer>
        <p>Currency: {planDetails?.currency || "N/A"}</p>
        <p>Plan Amount: {planDetails?.plan_Amt || "N/A"}</p>
        <p>Duration: {planDetails?.charge_Duration || "N/A"}</p>
        <p>Subtotal: {planDetails?.subtotal || "N/A"}</p>
        <p>GST: {planDetails?.gst_Amt || "N/A"}</p>
        <p>PST: {planDetails?.pst_Amt || "N/A"}</p>
        <p>Sim Card Fee: {planDetails?.simcard_amt || "N/A"}</p>
        <p>Total: {planDetails?.total || "N/A"}</p>
      </SectionContainer>

      <SubTitle>Summary</SubTitle>
      <SectionContainer>
        <p>Name: {summaryDetails?.name || "N/A"}</p>
        <p>Email: {summaryDetails?.email || "N/A"}</p>
        <p>Activation Date: {summaryDetails?.activationDate || "N/A"}</p>
      </SectionContainer>

      <Button onClick={handleNext}>Proceed to Payment</Button>
    </div>
  );
};

// Styled Components

export default Checkout;
