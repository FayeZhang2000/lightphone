import styled from "styled-components";
import {
  Title,
  InputContainer,
  Input,
  InputLabel,
  Button,
} from "./StyledComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const Payment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [errorText, setErrorText] = useState("");
  const { planDetails } = useSelector((state) => state.userInfo);

  const validateInputs = () => {
    if (cardNumber.length < 16) return "Invalid card number.";
    if (nameOnCard.trim() === "") return "Cardholder name is required.";
    if (!/^\d{2}\/\d{2}$/.test(expirationDate))
      return "Invalid expiration date.";
    if (cvv.length < 3) return "Invalid CVV.";
    return "";
  };

  const handleNext = async () => {
    //FIXME - add this back
    // const validationError = validateInputs();
    // if (validationError) {
    //   setErrorText(validationError);
    //   return;
    // }

    const [expiry_month, expiry_year] = expirationDate.split("/");

    const requestData = {
      CreditCardType: "",
      CreditCardNumber: cardNumber,
      CreditCardName: nameOnCard,
      CCV: cvv,
      ExpirationMonth: parseInt(expiry_month, 10),
      ExpirationYear: parseInt(`20${expiry_year}`, 10),
      PaymentAmt: planDetails.total,
      AutoPayment: true, //TODO - always true for autopayment
      currency: "CAD",
      AutoTopUp: true, //TODO - always true for autopayment
      epid: 0,
    };
    //FIXME - API needed for this function
    // try {
    //   const response = await axios.post("https://yourapi.com/payment", requestData);
    //   if (response.data.success) {
    //     navigate("/summary");
    //   } else {
    //     setErrorText(response.data.message || "Payment failed.");
    //   }
    // } catch (error) {
    //   setErrorText("An error occurred during payment.");
    // }
    navigate("/summary");
  };

  return (
    <div className="container">
      <Title>Payment</Title>
      {errorText && <p style={{ color: "red" }}>{errorText}</p>}

      {/* Credit Card Number */}
      <InputContainer>
        <Input
          type="text"
          placeholder=" "
          maxLength="16"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <InputLabel>Credit Card Number</InputLabel>
      </InputContainer>

      {/* Cardholder Name */}
      <InputContainer>
        <Input
          type="text"
          placeholder=" "
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
        />
        <InputLabel>Cardholder Name</InputLabel>
      </InputContainer>

      {/* Expiration Date */}
      <InputContainer>
        <Input
          type="text"
          placeholder="MM/YY"
          maxLength="5"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <InputLabel>Expiration Date (MM/YY)</InputLabel>
      </InputContainer>

      {/* CVV */}
      <InputContainer>
        <Input
          type="text"
          placeholder=" "
          maxLength="3"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
        />
        <InputLabel>CVV</InputLabel>
      </InputContainer>

      <Button onClick={handleNext}>Save and Continue</Button>
    </div>
  );
};

export default Payment;
