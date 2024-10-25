import styled from "styled-components";
import { simActivationInstance } from "../api/axios";
import { Title } from "./StyledComponent";
import { Description } from "./StyledComponent";
import { Input } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { BreakPoint } from "./StyledComponent";
import { InputLabel } from "./StyledComponent";
import { InputContainer } from "./StyledComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Activation = () => {
  const navigate = useNavigate();
  const [simCardNumber, setSimCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const cleanSimCardNumber = (simCardNumber) => {
  //   return simCardNumber.slice(-1).toLowerCase() === "f"
  //     ? simCardNumber.substring(0, simCardNumber.length - 1)
  //     : simCardNumber;
  // };
  // 1️⃣ 验证输入SIM格式 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
  const validateSimCard = (simCardNumber) => {
    const simCardRegex = /^\d{19,20}$/; // 验证19或20位数字
    return simCardRegex.test(simCardNumber);
  };
  // 2️⃣ 处理输入框失焦验证🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
  const handleBlur = () => {
    if (!validateSimCard(simCardNumber)) {
      setErrorMessage("Please enter a valid SIM card number!");
    } else {
      setErrorMessage("");
    }
  };
  // 3️⃣ 验证SIM是否valid🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
  const verifySimCard = async (simCardNumber) => {
    try {
      const response = await simActivationInstance.post(
        `/api/Activation/VerifySimcard?simnum=${simCardNumber}`
      );
      // 📍📍📍📍📍📍📍📍📍临时打印📍📍📍📍📍📍📍📍📍📍
      console.log("Full Response Data:", response.data);
      // 📍📍📍📍📍📍📍📍📍临时打印📍📍📍📍📍📍📍📍📍📍
      if (
        response.data &&
        response.data.SimNum &&
        response.data.Carrier &&
        response.data.Type
      ) {
        alert("SIM card valid!✅");
        navigate("/plans");
      } else {
        alert("Invalid SIM card❗️");
        setErrorMessage("Please enter a valid SIM card number!");
      }
    } catch (error) {
      console.error("Error verifying SIM card:", error);
      alert("Error verifying SIM card❗️");
    }
  };

  // 4️⃣ 处理点击按钮事件🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
  const handleActivateClick = () => {
    if (validateSimCard(simCardNumber)) {
      verifySimCard(simCardNumber);
    }
  };
  // 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡
  return (
    <div className="container">
      <Title>Activate Your SIM Card</Title>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <img width="200px" src="/images/sim.png" alt="Activation Sim Card" />
      </div>
      <Description>
        Please enter the SIM ICCID number (19 or 20 digits and found on the
        card)
      </Description>
      <InputContainer>
        <Input
          placeholder=" "
          required
          value={simCardNumber}
          onChange={(e) => setSimCardNumber(e.target.value)}
          onBlur={handleBlur}
          maxLength={20}
        />
        <InputLabel>ICCID #</InputLabel>
      </InputContainer>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <Button onClick={handleActivateClick}>Activate</Button>
    </div>
  );
};

export default Activation;
