import styled from "styled-components";
import { Button, Title, Description } from "./StyledComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // 引入 useDispatch 和 useSelector
import { resetUser } from "../api/UserSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.user.loggedIn); // 获取登录状态
  // const firstName = useSelector((state) => state.user.firstName); // 获取用户名字
  console.log("Logged In:", loggedIn);
  // console.log("First Name:", firstName);
  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(resetUser()); // 重置用户状态
    navigate("/"); // 返回主页
  };

  return (
    <div className="container">
      <Title>Home Page</Title>
      {loggedIn && <p>Welcome!</p>}
      <Description>
        {!loggedIn && (
          <>
            Already a member? {""}
            <LoginLink onClick={handleLogin}>Login</LoginLink>
          </>
        )}
      </Description>
      <Button onClick={handleRegister}>Register</Button>
      {loggedIn && <Button onClick={handleLogout}>Logout</Button>}{" "}
      {/* 注销按钮 */}
    </div>
  );
};

const LoginLink = styled.span`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export default HomePage;
