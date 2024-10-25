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
import { useState } from "react";
import LoginService from "../api/LoginService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }
    // 📍📍📍📍📍📍📍📍📍临时打印📍📍📍📍📍📍📍📍📍📍
    console.log("Logging in with data:", { email, password });

    try {
      const response = await LoginService.signIn({
        email,
        password,
      });
      // 📍📍📍📍📍📍📍📍📍临时打印📍📍📍📍📍📍📍📍📍📍
      console.log("Login response data:", response.data);

      if (response.data.success) {
        dispatch(setLoggedIn(true));
        dispatch(
          setUserDetails({
            email,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
          })
        );

        localStorage.setItem("loggedIn", true);
        localStorage.setItem("email", email);
        localStorage.setItem("firstName", response.data.firstName);
        localStorage.setItem("lastName", response.data.lastName);
        alert("Login successful!");
        navigate("/activation");
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        alert(`Error: ${error.response.data.message || "An error occurred"}`);
      } else {
        console.error("Error during login:", error);
        setErrorMessage("An error occurred. Please try again.");
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
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <InputLabel>Email</InputLabel>
      </InputContainer>
      <InputContainer>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          type="password"
        />
        <InputLabel>Password</InputLabel>
      </InputContainer>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
      {/* 显示错误信息 */}
      <Button onClick={handleLogin}>Continue</Button>
    </div>
  );
};

export default Login;
