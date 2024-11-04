import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Title, Description } from "./StyledComponent";
import SignUpService from "../api/SignUpService";
import { useState, useRef } from "react";
//SECTION - function ===================================================
const EmailOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, firstName, lastName, password } = location.state || {};

  console.log("Received data from Register:", {
    email,
    firstName,
    lastName,
    password,
  });

  const [otp, setOtp] = useState(Array(6).fill(""));
  const [errorText, setErrorText] = useState("");
  const inputRefs = useRef([]);

  //ANCHOR - handle input change
  const handleChange = (e, index) => {
    const value = e.target.value.slice(0, 1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };
  //ANCHOR - handle onclick
  const handleNext = async () => {
    const code = otp.join("");
    if (code.length < 6) {
      setErrorText("Please enter the complete OTP.");
      return;
    }

    try {
      const response = await SignUpService.activateUserByEmailId({
        data: {
          email,
          code,
          systemCode: "CA_SELFSERVE",
        },
      });

      if (response.data.success) {
        alert("Account activated successfully!");
        navigate("/login");
      } else {
        setErrorText("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      setErrorText("An error occurred. Please try again.");
    }
  };
  //ANCHOR - handle resend OTP
  const handleResendOTP = async () => {
    try {
      await SignUpService.resendActivationCode({
        data: {
          email,
          systemCode: "CA_SELFSERVE",
        },
      });
      alert("OTP has been resent to your email.");
    } catch (error) {
      console.error("Error during resending OTP:", error);
      alert("An error occurred while resending OTP. Please try again.");
    }
  };
  //SECTION - render ========================================================
  return (
    <div className="container">
      <Title>Security Code</Title>
      <Description>Please enter the 6-digit security code:</Description>
      <OTPContainer>
        {otp.map((_, index) => (
          <OTPInput
            key={index}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </OTPContainer>
      {errorText && <p style={{ color: "red" }}>{errorText}</p>}
      <Description>
        Did not receive your code ?{" "}
        <ResendLink onClick={handleResendOTP}>Resend</ResendLink>
      </Description>

      <Button onClick={handleNext} style={{ marginTop: "10px" }}>
        Submit
      </Button>
    </div>
  );
};
//SECTION - styled components ===============================================
const OTPContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const OTPInput = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 2px solid black;
  }
`;
const ResendLink = styled.span`
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
`;

export default EmailOTP;
