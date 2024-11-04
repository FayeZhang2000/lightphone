import styled from "styled-components";
import { simActivationInstance, simcardInstance } from "../api/axios";
import { setSimCardNumber } from "../api/UserInfoSlice";
import { storeUserInfoInLocalStorage } from "../api/UserInfoSlice";
import { Title } from "./StyledComponent";
import { Description } from "./StyledComponent";
import { Input } from "./StyledComponent";
import { Button } from "./StyledComponent";
import { InputLabel } from "./StyledComponent";
import { InputContainer, ErrorMessage, IconContainer } from "./StyledComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LuRedoDot } from "react-icons/lu";
import { PiSimCard } from "react-icons/pi";
const Activation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [localSimCardNumber, setLocalSimCardNumber] = useState("");
  const [errorText, setErrorText] = useState("");
  const simCardFromStore = useSelector((state) => state.userInfo.simCardNumber);
  //REVIEW -
  useEffect(() => {
    console.log("Sim Card Number in Redux store: ", simCardFromStore);
  }, [simCardFromStore]);

  //ANCHOR -  1️⃣ validate sim formate
  const cleanSimCardNumber = (simCardNumber) => {
    return simCardNumber.slice(-1).toLowerCase() === "f"
      ? simCardNumber.substring(0, simCardNumber.length - 1)
      : simCardNumber;
  };
  const validateSimCard = (simCardNumber) => {
    const simCardRegex = /^\d{19,20}$/;
    const cleanedSimCard = cleanSimCardNumber(simCardNumber);
    return simCardRegex.test(cleanedSimCard);
  };

  //ANCHOR -  2️⃣ onBlur
  const handleBlur = () => {
    if (!validateSimCard(localSimCardNumber)) {
      setErrorText("Please enter a valid SIM card number!");
    } else {
      setErrorText("");
    }
  };
  //ANCHOR -  3️⃣ SIM validation
  const verifySimCard = async (iccid) => {
    setLoading(true);
    try {
      const response = await simcardInstance.get(
        "/api/Activation/CheckSimCardAvailabilityByICCID",
        {
          params: { iccid },
        }
      );
      console.log("Full Response Data:", response.data);

      if (response.data === true) {
        alert("SIM card is available and valid!✅");
        dispatch(setSimCardNumber(iccid));
        dispatch(storeUserInfoInLocalStorage());
        navigate("/plans");
      } else {
        setErrorText("Invalid or unavailable SIM card!");
      }
    } catch (error) {
      console.error("Error verifying SIM card:", error);
      setErrorText("Error verifying SIM card. Please try again.");
    }
    setLoading(false);
  };

  //ANCHOR -  4️⃣ handle onClick
  const handleNext = () => {
    if (validateSimCard(localSimCardNumber)) {
      verifySimCard(localSimCardNumber).then(() => {
        dispatch(setSimCardNumber(localSimCardNumber));
        dispatch(storeUserInfoInLocalStorage());
        //REVIEW - dispatched SIM CARD number
        console.log(
          "Dispatched and Stored SIM Card Number: ",
          localSimCardNumber
        );
      });
    } else {
      setErrorText("Please enter a valid SIM card number!");
    }
  };
  //ANCHOR -  5️⃣ update SIM number
  const handleSimCardNumberChange = (e) => {
    const value = e.target.value;
    setLocalSimCardNumber(value);
  };
  //SECTION - render begin at this point below ↓ ↓ ↓ ↓ ↓
  return (
    <div className="container">
      <Title>Activate Your SIM Card</Title>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <img width="200px" src="/images/sim.png" alt="Activation Sim Card" />
      </div>

      <InputContainer>
        <Input
          placeholder=" "
          required
          value={localSimCardNumber}
          onChange={handleSimCardNumberChange}
          onBlur={handleBlur}
          maxLength={20}
          error={errorText}
        />
        <InputLabel>ICCID #</InputLabel>
        {errorText && <ErrorMessage>{errorText}</ErrorMessage>}
      </InputContainer>

      <Button onClick={handleNext} disabled={loading}>
        {loading ? <LoadingIcon /> : "Activate"}
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
export default Activation;
