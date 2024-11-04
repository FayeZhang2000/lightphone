import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setUserDetails } from "../api/UserSlice";
import {
  Button,
  Title,
  Input,
  InputContainer,
  InputLabel,
} from "./StyledComponent";
import { useState } from "react";
import { LuRedoDot } from "react-icons/lu";
import LoginService from "../api/LoginService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loggedIn = useSelector((state) => state.user.loggedIn);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const response = await LoginService.signIn({ email, password });
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
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Title>Login</Title>
      <InputContainer>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputLabel>Email</InputLabel>
      </InputContainer>
      <InputContainer>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <InputLabel>Password</InputLabel>
      </InputContainer>
      {errorMessage && (
        <p style={{ color: "red", fontSize: "10px", fontWeight: "bold" }}>
          {errorMessage}
        </p>
      )}
      <Button onClick={handleLogin} disabled={loading}>
        {loading ? <LoadingIcon /> : "Continue"}
      </Button>
    </div>
  );
};

const LoadingIcon = styled(LuRedoDot)`
  animation: rotate 1s linear infinite;
  font-size: 1.5rem;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Login;
