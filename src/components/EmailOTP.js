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
  const location = useLocation(); // 获取路由位置
  const { email, firstName, lastName, password } = location.state || {}; // 使用默认值，避免解构时出错

  // 打印接收到的数据
  console.log("Received data from Register:", {
    email,
    firstName,
    lastName,
    password,
  });

  const [otp, setOtp] = useState(""); // 创建状态以保存 OTP
  const [errorMessage, setErrorMessage] = useState(""); // 保存错误信息

  const handleSubmit = async () => {
    if (otp.length === 0) {
      setErrorMessage("Please enter the OTP."); // 检查是否输入 OTP
      return;
    }

    try {
      // 调用激活用户的 API
      const response = await SignUpService.activateUserByEmailId({
        data: {
          email: email, // 使用从上一个组件传递的 email
          code: otp,
          systemCode: "CA_SELFSERVE", // 直接硬编码，或根据需求进行调整
        },
      });

      // 检查激活是否成功
      if (response.data.success) {
        alert("Account activated successfully!"); // 激活成功的提示
        navigate("/login"); // 导航到登录页面
      } else {
        setErrorMessage("Invalid OTP. Please try again."); // 激活失败的提示
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      setErrorMessage("An error occurred. Please try again."); // 错误处理
    }
  };

  const handleResendOTP = async () => {
    try {
      // 调用重新发送激活码的 API
      await SignUpService.resendActivationCode({
        data: {
          email: email,
          systemCode: "CA_SELFSERVE", // 直接硬编码，或根据需求进行调整
        },
      });
      alert("OTP has been resent to your email."); // 提示用户 OTP 已重新发送
    } catch (error) {
      console.error("Error during resending OTP:", error);
      alert("An error occurred while resending OTP. Please try again."); // 错误处理
    }
  };

  return (
    <div className="container">
      <Title>EMAIL code</Title>
      <InputContainer>
        <Input
          value={otp}
          onChange={(e) => setOtp(e.target.value)} // 更新 OTP 状态
          placeholder="Enter OTP" // 提示用户输入 OTP
        />
        <InputLabel>OTP</InputLabel>
      </InputContainer>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
      {/* 显示错误信息 */}
      <button onClick={handleSubmit}>Continue</button> {/* 点击按钮验证 OTP */}
      <Button onClick={handleResendOTP} style={{ marginTop: "10px" }}>
        Resend OTP
      </Button>{" "}
      {/* 重新发送 OTP 的按钮 */}
    </div>
  );
};

export default EmailOTP;
