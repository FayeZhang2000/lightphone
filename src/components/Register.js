import styled from "styled-components";
import { Button, Title } from "./StyledComponent";
import { Input, InputContainer, InputLabel } from "./StyledComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpService from "../api/SignUpService";

// 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  // 1️⃣ 失焦时验证🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
  const validateOnBlur = () => {
    const _validationErrors = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    };

    let isError = false;

    // 输入验证
    if (firstName.trim() === "") {
      _validationErrors.firstName = "First Name is required";
      isError = true;
    }
    if (lastName.trim() === "") {
      _validationErrors.lastName = "Last Name is required";
      isError = true;
    }
    if (!validateEmail(email)) {
      _validationErrors.email = "Please enter a valid email address.";
      isError = true;
    }
    if (!validatePassword(password)) {
      _validationErrors.password =
        "Password must be at least 8 characters long and include at least one number, one uppercase letter, and one special character.";
      isError = true;
    }

    setValidationErrors(_validationErrors);
  };

  // 2️⃣ 点击按钮时验证🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
  const validateOnPressCreateAccount = async () => {
    console.log("Button clicked");
    validateOnBlur(); // 在点击按钮时再次验证输入

    // 检查是否存在错误
    if (Object.values(validationErrors).some((error) => error)) {
      return; // 如果有错误，则停止执行
    }

    await onPressCreateAnAccount(); //这个函数是异步的
  };
  // 3️⃣ 输入验证的逻辑 - email🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
  const validateEmail = (email) => {
    //   ❗️后面加回来！🔴🔴🔴🔴🔴🔴🔴🔴🔴
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return emailRegex.test(email);
    return email;
  };
  // 3️⃣ 输入验证的逻辑 - password
  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[\W_]/.test(password)
    );
  };
  // 4️⃣ 处理OTP🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
  const onPressCreateAnAccount = async () => {
    console.log("Account creation logic fire.");
    try {
      // 验证邮箱是否已存在
      const emailValidationResponse = await SignUpService.validateEmail({
        data: {
          email: email,
          systemCode: "CA_SELFSERVE",
        },
      });

      // 处理邮箱验证结果
      if (emailValidationResponse.data.devMessage === "AccountAlreadyExists") {
        alert("Email already exists. Please sign in.");
        return;
      }

      // 打印将要发送的数据
      console.log({
        firstName,
        lastName,
        email,
        password,
        systemCode: "CA_SELFSERVE",
      });

      // 发送注册请求
      const signUpResponse = await SignUpService.signUp({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          systemCode: "CA_SELFSERVE",
        },
      });

      // 检查注册是否成功
      if (signUpResponse.data.success) {
        alert("Registration successful! Sending OTP to your email...");
        await SignUpService.resendActivationCode({
          data: {
            email: email,
            systemCode: "CA_SELFSERVE",
          },
        });

        // 导航到 EmailOTP 组件
        navigate("/emailcode", {
          state: {
            firstName,
            lastName,
            email,
            password,
            systemCode: "CA_SELFSERVE",
          },
        });
      } else {
        console.error("Registration failed: ", signUpResponse.data.devMessage);
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        alert(`Error: ${error.response.data.message || "An error occurred"}`);
      } else {
        console.error("Error during account creation: ", error);
        alert("An error occurred. Please try again.");
      }
    }
  };
  //   🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡
  return (
    <div className="container">
      <Title>Register</Title>

      {/* 1️⃣ 名字 */}
      <InputContainer>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={validateOnBlur} // 失去焦点时验证
          error={validationErrors.firstName}
        />
        <InputLabel>First name</InputLabel>
        {validationErrors.firstName && (
          <p style={{ color: "red" }}>{validationErrors.firstName}</p>
        )}
      </InputContainer>

      {/* 2️⃣ 姓氏 */}
      <InputContainer>
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={validateOnBlur} // 失去焦点时验证
          error={validationErrors.lastName}
        />
        <InputLabel>Last name</InputLabel>
        {validationErrors.lastName && (
          <p style={{ color: "red" }}>{validationErrors.lastName}</p>
        )}{" "}
        {/* 显示错误信息 */}
      </InputContainer>

      {/* 3️⃣ 邮箱 */}
      <InputContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateOnBlur} // 失去焦点时验证
          error={validationErrors.email}
        />
        <InputLabel>Email</InputLabel>
        {validationErrors.email && (
          <p style={{ color: "red" }}>{validationErrors.email}</p>
        )}{" "}
        {/* 显示错误信息 */}
      </InputContainer>

      {/* 4️⃣ 密码 */}
      <InputContainer>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validateOnBlur} // 失去焦点时验证
          type="password" // 设置为密码输入框
          error={validationErrors.password}
        />
        <InputLabel>Password</InputLabel>
        {validationErrors.password && (
          <p style={{ color: "red" }}>{validationErrors.password}</p>
        )}{" "}
        {/* 显示错误信息 */}
      </InputContainer>
      <Button onClick={validateOnPressCreateAccount}>Select</Button>
    </div>
  );
};

export default Register;
