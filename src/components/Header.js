// src/Header.jsx
import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <BackButton onClick={handleBackClick}>
        <IoIosArrowBack size={24} />
      </BackButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 10%;
  width: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: white;
  /* border: 2px solid blue; */
`;
const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  font-size: 1.5rem;

  &:hover {
    color: #0056b3;
  }
`;

export default Header;
