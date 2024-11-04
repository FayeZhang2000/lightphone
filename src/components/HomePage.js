import styled from "styled-components";
import { Button, Title, Description } from "./StyledComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../api/UserSlice";
import { useEffect } from "react";
import { resetUserInfo } from "../api/UserInfoSlice";
import { LuActivity } from "react-icons/lu";
import { LuMousePointerClick, LuMoreHorizontal } from "react-icons/lu";
const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.user.loggedIn);
  // const firstName = useSelector((state) => state.user.firstName);
  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);
  console.log("Logged In:", loggedIn);
  // console.log("First Name:", firstName);
  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(resetUser());
    dispatch(resetUserInfo());
    localStorage.clear();
  };

  return (
    <div className="container">
      <Title>Let's do it!</Title>
      <Description>
        {!loggedIn && (
          <>
            Already a member? <LoginLink onClick={handleLogin}>Login</LoginLink>
            <LuMousePointerClick size={25} />
          </>
        )}
      </Description>
      <Wrapper>
        <IconWrapper>
          <LuMoreHorizontal size={100} />
          <LuActivity size={120} />
          <LuMoreHorizontal size={100} />
        </IconWrapper>

        <ButtonWrapper>
          {!loggedIn && <Button onClick={handleRegister}>Register</Button>}
          {loggedIn && <Button onClick={handleLogout}>Logout</Button>}
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 150px 0;
  filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.5));
`;

const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  padding-top: 20px;
  position: absolute;
  bottom: 20px;
`;

const LoginLink = styled.span`
  color: black;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export default HomePage;
