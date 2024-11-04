import styled from "styled-components";
import { Button, Title } from "./StyledComponent";
import {
  Input,
  InputContainer,
  InputLabel,
  ErrorMessage,
} from "./StyledComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpService from "../api/SignUpService";
import { colors } from "./Constants";
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
  const validateOnBlur = () => {
    const _validationErrors = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    };

    let isError = false;

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

  const validateOnPressCreateAccount = async () => {
    validateOnBlur();

    if (Object.values(validationErrors).some((error) => error)) {
      return;
    }

    await onPressCreateAnAccount();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[\W_]/.test(password)
    );
  };
  //ANCHOR - deal with otp
  const onPressCreateAnAccount = async () => {
    try {
      const emailValidationResponse = await SignUpService.validateEmail({
        data: {
          email: email,
          systemCode: "CA_SELFSERVE",
        },
      });

      if (emailValidationResponse.data.devMessage === "AccountAlreadyExists") {
        alert("Email already exists. Please sign in.");
        return;
      }
      //REVIEW -
      console.log({
        firstName,
        lastName,
        email,
        password,
        systemCode: "CA_SELFSERVE",
      });
      const signUpResponse = await SignUpService.signUp({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          systemCode: "CA_SELFSERVE",
        },
      });

      if (signUpResponse.data.success) {
        alert("Registration successful! Sending OTP to your email...");
        await SignUpService.resendActivationCode({
          data: {
            email: email,
            systemCode: "CA_SELFSERVE",
          },
        });
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
  //SECTION - render
  return (
    <div className="container">
      <Title>Register</Title>
      {/* 1️⃣ name */}
      <InputContainer>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={validateOnBlur}
          error={validationErrors.firstName}
        />
        <InputLabel>First name</InputLabel>
        {validationErrors.firstName && (
          <ErrorMessage>{validationErrors.firstName}</ErrorMessage>
        )}
      </InputContainer>
      {/* 2️⃣ family name */}
      <InputContainer>
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={validateOnBlur}
          error={validationErrors.lastName}
        />
        <InputLabel>Last name</InputLabel>
        {validationErrors.lastName && (
          <ErrorMessage>{validationErrors.lastName}</ErrorMessage>
        )}
      </InputContainer>
      {/* 3️⃣ email */}
      <InputContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateOnBlur}
          error={validationErrors.email}
        />
        <InputLabel>Email</InputLabel>
        {validationErrors.email && (
          <ErrorMessage>{validationErrors.email}</ErrorMessage>
        )}
      </InputContainer>
      {/* 4️⃣ password */}
      <InputContainer>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validateOnBlur}
          type="password"
          error={validationErrors.password}
        />
        <InputLabel>Password</InputLabel>
      </InputContainer>
      {validationErrors.password && (
        <p style={{ color: colors.error, fontSize: "9px", fontWeight: "bold" }}>
          {validationErrors.password}
        </p>
      )}{" "}
      <Button onClick={validateOnPressCreateAccount}>Submit</Button>
    </div>
  );
};

export default Register;
