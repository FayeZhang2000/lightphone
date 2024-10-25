import styled from "styled-components";
import { useLocation } from "react-router-dom"; // 导入 useLocation
import {
  Button,
  Title,
  Input,
  InputContainer,
  InputLabel,
} from "./StyledComponent";
import SignUpService from "../api/SignUpService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, firstName, lastName, password } = location.state || {};

  // 📍📍📍📍📍📍📍📍📍临时打印📍📍📍📍📍📍📍📍📍📍
  console.log("Received data from Register:", {
    email,
    firstName,
    lastName,
    password,
  });

  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (otp.length === 0) {
      setErrorMessage("Please enter the OTP.");
      return;
    }

    try {
      // 调用激活用户的 API
      const response = await SignUpService.activateUserByEmailId({
        data: {
          email: email, // 使用从上一个组件传递的 email
          code: otp,
          systemCode: "CA_SELFSERVE",
        },
      });

      // 检查激活是否成功
      if (response.data.success) {
        alert("Account activated successfully!");
        navigate("/login");
      } else {
        setErrorMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleResendOTP = async () => {
    try {
      // 调用重新发送激活码的 API
      await SignUpService.resendActivationCode({
        data: {
          email: email,
          systemCode: "CA_SELFSERVE",
        },
      });
      alert("OTP has been resent to your email.");
    } catch (error) {
      console.error("Error during resending OTP:", error);
      alert("An error occurred while resending OTP. Please try again.");
    }
  };

  return (
    <div className="container">
      <Title>EMAIL code</Title>
      <InputContainer>
        <Input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
        <InputLabel>OTP</InputLabel>
      </InputContainer>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
      <button onClick={handleSubmit}>Continue</button>
      <Button onClick={handleResendOTP} style={{ marginTop: "10px" }}>
        Resend OTP
      </Button>{" "}
    </div>
  );
};

export default EmailOTP;
