import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Register from "./Register";
import Login from "./Login";
import EmailOTP from "./EmailOTP";
import Activation from "./Activation";
import Plans from "./Plans";
import PlansDetail from "./PlansDetail";
import PersonalInfo from "./PersonalInfo";
import Payment from "./Payment";
import Checkout from "./Checkout";
import PhoneNumber from "./PhoneNumber";
import Portin from "./Portin";
import Summary from "./Summary";
import { useSelector } from "react-redux";

const AppWrapper = styled.div`
  border: 3px solid black;
  height: 100vh;
  width: 50%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
`;

const App = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn); // 获取登录状态

  return (
    <AppWrapper>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/emailcode"
            element={loggedIn ? <EmailOTP /> : <Navigate to="/login" />}
          />
          <Route
            path="/activation"
            element={loggedIn ? <Activation /> : <Navigate to="/login" />}
          />
          <Route
            path="/plans"
            element={loggedIn ? <Plans /> : <Navigate to="/login" />}
          />
          <Route
            path="/plansDetail"
            element={loggedIn ? <PlansDetail /> : <Navigate to="/login" />}
          />
          <Route
            path="/personalInfo"
            element={loggedIn ? <PersonalInfo /> : <Navigate to="/login" />}
          />
          <Route
            path="/payment"
            element={loggedIn ? <Payment /> : <Navigate to="/login" />}
          />
          <Route
            path="/checkout"
            element={loggedIn ? <Checkout /> : <Navigate to="/login" />}
          />
          <Route
            path="/phoneNumber"
            element={loggedIn ? <PhoneNumber /> : <Navigate to="/login" />}
          />
          <Route
            path="/portin"
            element={loggedIn ? <Portin /> : <Navigate to="/login" />}
          />
          <Route
            path="/summary"
            element={loggedIn ? <Summary /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppWrapper>
  );
};
export default App;
