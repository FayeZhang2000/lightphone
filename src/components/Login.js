import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLoggedIn } from "../api/UserSlice";
import { setUserDetails } from "../api/UserSlice";
import {
  Button,
  Title,
  Input,
  InputContainer,
  InputLabel,
} from "./StyledComponent";
import { useState } from "react"; // 导入 useState
import LoginService from "../api/LoginService"; // 导入 LoginService
import { useNavigate } from "react-router-dom"; // 导入 useNavigate

const Login = () => {
  const dispatch = useDispatch(); // 创建 dispatch
  const navigate = useNavigate(); // 用于导航
  const [email, setEmail] = useState(""); // 保存用户输入的邮箱
  const [password, setPassword] = useState(""); // 保存用户输入的密码
  const [errorMessage, setErrorMessage] = useState(""); // 保存错误信息

  // 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please enter both email and password."); // 检查输入
      return;
    }

    console.log("Logging in with data:", { email, password }); // 打印要发送的数据

    try {
      // 调用登录 API
      const response = await LoginService.signIn({
        email,
        password,
      });
      // 测试： 打印返回的数据 📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚
      console.log("Login response data:", response.data);
      // 检查登录是否成功
      if (response.data.success) {
        dispatch(setLoggedIn(true));
        dispatch(
          setUserDetails({
            email,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
          })
        );
        // 将登录状态和用户信息存储到 localStorage
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("email", email);
        localStorage.setItem("firstName", response.data.firstName);
        localStorage.setItem("lastName", response.data.lastName);
        alert("Login successful!"); // 登录成功的提示
        navigate("/"); // 导航到用户主页面
      } else {
        setErrorMessage("Invalid email or password. Please try again."); // 登录失败的提示
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        alert(`Error: ${error.response.data.message || "An error occurred"}`);
      } else {
        console.error("Error during login:", error);
        setErrorMessage("An error occurred. Please try again."); // 错误处理
      }
    }
  };
  console.log("User logged in state:", {
    loggedIn,
  });
  // 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡
  return (
    <div className="container">
      <Title>Login</Title>
      <InputContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)} // 更新邮箱状态
          placeholder="Enter your email" // 提示用户输入邮箱
        />
        <InputLabel>Email</InputLabel>
      </InputContainer>
      <InputContainer>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 更新密码状态
          placeholder="Enter your password" // 提示用户输入密码
          type="password" // 设置为密码输入框
        />
        <InputLabel>Password</InputLabel>
      </InputContainer>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
      {/* 显示错误信息 */}
      <Button onClick={handleLogin}>Continue</Button> {/* 点击按钮登录 */}
    </div>
  );
};

export default Login;
