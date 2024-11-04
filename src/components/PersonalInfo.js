import styled from "styled-components";
import { simActivationInstance } from "../api/axios";
import { Title } from "./StyledComponent";
import { Input } from "./StyledComponent";
import {
  Button,
  ButtonContainer,
  StyledSelect,
  ArrowIcon,
} from "./StyledComponent";
import { InputLabel } from "./StyledComponent";
import { InputContainer, ErrorMessage } from "./StyledComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setFirstName,
  setLastName,
  setEmail,
  setConfirmEmail,
  setProvince,
  setCity,
  setPhoneNumber,
  setCarrier,
  setAccountNumber,
  setImeiNumber,
  setPortIn,
  setSimCardNumber,
  storeUserInfoInLocalStorage,
  setPlanDetails,
  setSummaryDetails,
} from "../api/UserInfoSlice";
import { provinces, carriers } from "./Constants";
import { GoQuestion } from "react-icons/go";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { useState } from "react";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    email,
    confirmEmail,
    province,
    city,
    phoneNumber,
    carrier,
    accountNumber,
    imeiNumber,
    portIn,
    simCardNumber,
  } = useSelector((state) => state.userInfo);
  const [emailError, setEmailError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [isFreedomPortin, setIsFreedomPortin] = useState(false);
  const [accountPhoneError, setAccountPhoneError] = useState(false);
  const [imeiError, setImeiError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  //SECTION - FUNCTIONS=============================================================
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const checkEmailExists = async () => {
    //REVIEW - get SIM card number and EMAIL from redux
    console.log("Sim Card Number in Redux store: ", simCardNumber);
    console.log("Email in Redux store: ", email);
    let bn = new URLSearchParams(window.location.search).get("bn");
    const url = `/api/Activation/CheckIfEmailExisting?email=${email}&bizid=${
      bn ? bn : 0
    }&simnum=${simCardNumber || "''"}`;

    try {
      const response = await simActivationInstance.post(url);
      let data = response.data;
      console.log("Email existence check response: ", data);
      return data;
    } catch (error) {
      console.error("Error in checking email existence:", error.response?.data);
      return false;
    }
  };
  const handleAccountNumberValidation = () => {
    if (accountNumber === phoneNumber) {
      setAccountPhoneError(true);
    } else {
      setAccountPhoneError(false);
    }
  };

  const handleImeiValidation = (value) => {
    const isValidImei = /^\d{15}$/.test(value);
    setImeiError(!isValidImei);
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      imeiNumber: !isValidImei ? "IMEI number must be 15 digits" : "",
    }));
  };

  const handlePhoneNumberValidation = (value) => {
    const isValidPhone = /^\d{10}$/.test(value);
    setPhoneError(!isValidPhone);
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      phoneNumber: !isValidPhone ? "Phone number must be 10 digits" : "",
    }));
  };

  const handlePortInChange = (event) => {
    dispatch(setPortIn(event.target.value === "yes"));
  };

  const handleCarrierChange = (event) => {
    const selectedValue = event.target.value.toLowerCase();
    dispatch(setCarrier(event.target.value));

    if (selectedValue === "freedom") {
      setIsFreedomPortin(true);
    } else {
      setIsFreedomPortin(false);
    }
  };

  //ANCHOR - Validation and HandleBLUR function
  const validateField = (field, value, email, portIn, isFreedomPortin) => {
    switch (field) {
      case "firstName":
        return value.trim() ? "" : "First Name is required";
      case "lastName":
        return value.trim() ? "" : "Last Name is required";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!validateEmail(value)) return "Invalid Email";
        return "";
      case "confirmEmail":
        if (!email.trim()) return "Email is required";
        return value === email ? "" : "Emails do not match";
      case "province":
        return value.trim() ? "" : "Province is required";
      case "city":
        return value.trim() ? "" : "City is required";
      case "phoneNumber":
        if (portIn) {
          return value.trim().length === 10
            ? ""
            : "Phone number must be 10 digits";
        }
        return "";
      case "imeiNumber":
        if (portIn) {
          return value.trim().length === 15
            ? ""
            : "IMEI number must be 15 digits";
        }
        return "";
      case "accountNumber":
        if (portIn && !isFreedomPortin) {
          return value.trim() ? "" : "Account Number is required";
        }
        return "";
      default:
        return "";
    }
  };
  const handleBlur = async (field, value) => {
    let error = validateField(field, value, email, portIn, isFreedomPortin);

    if (field === "email" && !error) {
      const emailExists = await checkEmailExists(value);
      if (emailExists) {
        error = "This email is already in use!";
      }
    }

    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  };

  //ANCHOR - NEXT BUTTON validation
  const handleNext = async () => {
    const errors = {};

    if (!firstName.trim()) errors.firstName = "First Name is required";
    if (!lastName.trim()) errors.lastName = "Last Name is required";

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid Email";
    }

    if (!confirmEmail.trim() && !email.trim()) {
      errors.confirmEmail = "Confirm Email is required";
    } else if (confirmEmail !== email) {
      errors.confirmEmail = "Emails do not match";
    }

    if (!province.trim()) errors.province = "Province is required";
    if (!city.trim()) errors.city = "City is required";

    if (portIn) {
      if (!carrier) errors.carrier = "Carrier is required";

      if (!phoneNumber.trim() || !/^\d{10}$/.test(phoneNumber)) {
        errors.phoneNumber = "Invalid Phone Number";
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }

      if (!imeiNumber.trim() || !/^\d{15}$/.test(imeiNumber)) {
        errors.imeiNumber = "Invalid IMEI Number";
        setImeiError(true);
      } else {
        setImeiError(false);
      }

      if (
        !isFreedomPortin &&
        (!accountNumber.trim() || accountNumber === phoneNumber)
      ) {
        errors.accountNumber = "Invalid Account Number";
        setAccountPhoneError(true);
      } else {
        setAccountPhoneError(false);
      }
    }

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      console.log("Validation failed with errors: ", errors);
      return;
    }

    try {
      const response = await simActivationInstance.get(
        "/api/Activation/GetTotalPrepaid",
        {
          params: {
            orderSimcard: true,
            planId: 1689, //TODO - use real PLAN ID
            countryId: 42, // Canada
            provinceCode: province, // User-selected province
            start: new Date().toISOString().split("T")[0], // Today's date
          },
        }
      );
      //REVIEW -
      console.log("Full API response: ", response);
      console.log("Response data: ", response.data);

      const planDetails = response.data[0];
      dispatch(setPlanDetails(planDetails));

      const summaryDetails = {
        name: `${firstName} ${lastName}`,
        email,
        activationDate: new Date().toISOString().split("T")[0],
        simCardFee: planDetails.simcard_amt,
        esimPromo: planDetails.esim_promo_not_applied
          ? "Applied"
          : "Not Applied",
        planFee: planDetails.plan_Amt,
        subtotal: planDetails.subtotal,
        taxes: planDetails.gst_Amt + planDetails.pst_Amt,
        total: planDetails.total,
      };

      dispatch(setSummaryDetails(summaryDetails));
      dispatch(storeUserInfoInLocalStorage());

      if (response.status === 200) {
        navigate("/checkout");
      } else {
        console.error("Failed to submit the form", response.data);
        setFieldErrors({ submission: "Submission failed. Please try again." });
      }
    } catch (error) {
      console.error("Error occurred while submitting the form", error);
      setFieldErrors({
        submission: "An error occurred. Please try again later.",
      });
    }
  };
  //SECTION - RENDER=================================================================
  return (
    <div className="container">
      <Title>Personal Information</Title>

      {/* First Name */}
      <InputContainer>
        <Input
          placeholder=" "
          required
          value={firstName}
          onChange={(e) => dispatch(setFirstName(e.target.value))}
          onBlur={() => handleBlur("firstName", firstName)}
          error={fieldErrors.firstName}
        />
        <InputLabel>First Name</InputLabel>
        {fieldErrors.firstName && (
          <ErrorMessage>{fieldErrors.firstName}</ErrorMessage>
        )}
      </InputContainer>

      {/* Last Name */}
      <InputContainer>
        <Input
          placeholder=" "
          required
          value={lastName}
          onChange={(e) => dispatch(setLastName(e.target.value))}
          onBlur={() => handleBlur("lastName", lastName)}
          error={fieldErrors.lastName}
        />
        <InputLabel>Last Name</InputLabel>
        {fieldErrors.lastName && (
          <ErrorMessage>{fieldErrors.lastName}</ErrorMessage>
        )}
      </InputContainer>

      {/* Email */}
      <InputContainer>
        <Input
          placeholder=" "
          required
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          onBlur={() => handleBlur("email", email)}
          error={fieldErrors.email}
        />
        <InputLabel>Email</InputLabel>
        {fieldErrors.email && <ErrorMessage>{fieldErrors.email}</ErrorMessage>}
      </InputContainer>

      {/* Confirm Email */}
      <InputContainer>
        <Input
          placeholder=" "
          required
          value={confirmEmail}
          onChange={(e) => dispatch(setConfirmEmail(e.target.value))}
          onBlur={() => handleBlur("confirmEmail", confirmEmail)}
          error={fieldErrors.confirmEmail}
        />
        <InputLabel>Confirm Email</InputLabel>
        {fieldErrors.confirmEmail && (
          <ErrorMessage>{fieldErrors.confirmEmail}</ErrorMessage>
        )}
      </InputContainer>

      {/* Province Selection */}
      <InputContainer>
        <StyledSelect
          value={province}
          onChange={(e) => dispatch(setProvince(e.target.value))}
          required
          error={fieldErrors.province}
        >
          <option value="">Select a Province</option>
          {provinces.map((province) => (
            <option key={province.key} value={province.code}>
              {province.name}
            </option>
          ))}
        </StyledSelect>
        <ArrowIcon error={!!fieldErrors.province}>▼</ArrowIcon>
        <InputLabel>Province</InputLabel>
        {fieldErrors.province && (
          <ErrorMessage>{fieldErrors.province}</ErrorMessage>
        )}
      </InputContainer>

      {/* City */}
      <InputContainer>
        <Input
          placeholder=" "
          required
          value={city}
          onChange={(e) => dispatch(setCity(e.target.value))}
          onBlur={() => handleBlur("city", city)}
          error={fieldErrors.city}
        />
        <InputLabel>City</InputLabel>
        {fieldErrors.city && <ErrorMessage>{fieldErrors.city}</ErrorMessage>}
      </InputContainer>

      {/* Port-In Selection */}
      <InputContainer>
        <StyledSelect
          value={portIn ? "yes" : "no"}
          onChange={handlePortInChange}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </StyledSelect>
        <ArrowIcon>▼</ArrowIcon>
        <InputLabel>Port In?</InputLabel>
      </InputContainer>

      {/* Conditional Fields for Port-In */}
      {portIn && (
        <>
          <InputContainer>
            <StyledSelect
              value={carrier}
              onChange={handleCarrierChange}
              required
              error={fieldErrors.carrier}
            >
              <option value="">Select Carrier</option>
              {carriers.map((carrier) => (
                <option key={carrier.key} value={carrier.code}>
                  {carrier.name}
                </option>
              ))}
            </StyledSelect>
            <ArrowIcon>▼</ArrowIcon>
            <InputLabel>Current Carrier</InputLabel>
          </InputContainer>
          {fieldErrors.carrier && <ErrorText>{fieldErrors.carrier}</ErrorText>}

          {/* IMEI Number */}
          <InputContainer>
            <Input
              placeholder=" "
              value={imeiNumber}
              onChange={(e) => dispatch(setImeiNumber(e.target.value))}
              onBlur={(e) => handleImeiValidation(e.target.value)}
              required
              maxLength={15}
              minLength={15}
              type="text"
              error={imeiError}
            />
            <InputLabel>IMEI Number</InputLabel>
          </InputContainer>
          {imeiError && (
            <ErrorText>IMEI number must be 15 digits long.</ErrorText>
          )}

          {/* Phone Number */}
          <InputContainer>
            <Input
              placeholder=" "
              value={phoneNumber}
              onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
              onBlur={(e) => handlePhoneNumberValidation(e.target.value)}
              required
              maxLength={10}
              minLength={10}
              type="text"
              error={phoneError}
            />

            <InputLabel>Phone Number</InputLabel>
          </InputContainer>
          {phoneError && (
            <ErrorText>Phone number must be 10 digits long.</ErrorText>
          )}
          {/* Account Number */}
          <InputContainer
            style={{
              visibility: isFreedomPortin ? "hidden" : "visible",
              opacity: isFreedomPortin ? 0 : 1,
            }}
          >
            <Input
              value={accountNumber}
              onChange={(e) => dispatch(setAccountNumber(e.target.value))}
              onBlur={handleAccountNumberValidation}
              required={!isFreedomPortin}
              disabled={isFreedomPortin}
              error={accountPhoneError}
            />

            <InputLabel>Account Number</InputLabel>
          </InputContainer>
          {accountPhoneError && (
            <ErrorText>
              Account number cannot be the same as phone number, and it must be
              10-20 digits long.
            </ErrorText>
          )}
        </>
      )}

      <Button onClick={handleNext}>Save and Continue</Button>
    </div>
  );
};

const ErrorText = styled.p`
  color: red;
  font-size: 10px;
  font-weight: bold;
`;

export default PersonalInfo;
