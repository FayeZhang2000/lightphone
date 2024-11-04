import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: localStorage.getItem("firstName") || "",
  lastName: localStorage.getItem("lastName") || "",
  email: localStorage.getItem("email") || "",
  confirmEmail: localStorage.getItem("confirmEmail") || "",
  province: localStorage.getItem("province") || "",
  city: localStorage.getItem("city") || "",
  phoneNumber: localStorage.getItem("phoneNumber") || "",
  carrier: localStorage.getItem("carrier") || "",
  accountNumber: localStorage.getItem("accountNumber") || "",
  imeiNumber: localStorage.getItem("imeiNumber") || "",
  portIn: localStorage.getItem("portIn") === "true",
  simCardNumber: localStorage.getItem("simCardNumber") || "",
  // plans related:
  planDetails: JSON.parse(localStorage.getItem("planDetails")) || {},
  summaryDetails: JSON.parse(localStorage.getItem("summaryDetails")) || {},
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setConfirmEmail: (state, action) => {
      state.confirmEmail = action.payload;
    },
    setProvince: (state, action) => {
      state.province = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setCarrier: (state, action) => {
      state.carrier = action.payload;
    },
    setAccountNumber: (state, action) => {
      state.accountNumber = action.payload;
    },
    setImeiNumber: (state, action) => {
      state.imeiNumber = action.payload;
    },
    setPortIn: (state, action) => {
      state.portIn = action.payload;
    },
    setSimCardNumber: (state, action) => {
      state.simCardNumber = action.payload;
    },
    // plans related
    setPlanDetails: (state, action) => {
      state.planDetails = action.payload;
    },
    setSummaryDetails: (state, action) => {
      state.summaryDetails = action.payload;
    },

    resetUserInfo: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.confirmEmail = "";
      state.province = "";
      state.city = "";
      state.phoneNumber = "";
      state.carrier = "";
      state.accountNumber = "";
      state.imeiNumber = "";
      state.portIn = false;
      state.simCardNumber = "";
      state.planDetails = {};
      state.summaryDetails = {};

      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("email");
      localStorage.removeItem("confirmEmail");
      localStorage.removeItem("province");
      localStorage.removeItem("city");
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("carrier");
      localStorage.removeItem("accountNumber");
      localStorage.removeItem("imeiNumber");
      localStorage.removeItem("portIn");
      localStorage.removeItem("simCardNumber");
      localStorage.removeItem("planDetails");
      localStorage.removeItem("summaryDetails");
    },
    storeUserInfoInLocalStorage: (state) => {
      localStorage.setItem("firstName", state.firstName);
      localStorage.setItem("lastName", state.lastName);
      localStorage.setItem("email", state.email);
      localStorage.setItem("confirmEmail", state.confirmEmail);
      localStorage.setItem("province", state.province);
      localStorage.setItem("city", state.city);
      localStorage.setItem("phoneNumber", state.phoneNumber);
      localStorage.setItem("carrier", state.carrier);
      localStorage.setItem("accountNumber", state.accountNumber);
      localStorage.setItem("imeiNumber", state.imeiNumber);
      localStorage.setItem("portIn", state.portIn);
      localStorage.setItem("simCardNumber", state.simCardNumber);

      localStorage.setItem("planDetails", JSON.stringify(state.planDetails));
      localStorage.setItem(
        "summaryDetails",
        JSON.stringify(state.summaryDetails)
      );
    },
  },
});

export const {
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
  resetUserInfo,
  storeUserInfoInLocalStorage,
  setPlanDetails,
  setSummaryDetails,
} = userInfoSlice.actions;

export default userInfoSlice.reducer;
