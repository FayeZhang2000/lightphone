import styled from "styled-components";
import { colors } from "./Constants";
export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
export const SubTitle = styled.h2`
  font-size: 20px;
  color: ${colors.background};
  font-weight: bold;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 15px;
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 22px;
  color: rgba(211, 213, 216, 0.9);
  font-size: 22px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  font-family: "Arima", system-ui;
  padding: 25px 20px 6px 32px;
  border: 2px solid
    ${({ error }) => (error ? colors.error : colors.description)};
  border-radius: 5px;
  font-size: 14px;
  background-color: ${({ error }) => (error ? "#ffeef0" : "white")};
  box-shadow: none;

  &:focus {
    border: 2px solid ${({ error }) => (error ? colors.error : "black")};
    outline: none;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 11px;
  color: ${colors.description};
  transition: 0.2s ease all;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 10px;
  color: ${colors.error};
  background-color: transparent;
  padding: 0 5px;
  font-weight: bold;
`;

export const Box = styled.div`
  width: 100%;
  /* height: 25%; */
  font-family: "Arima", system-ui;
  padding: 40px;
  border: 2px solid ${colors.background};
  border-radius: 5px;
  font-size: 16px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;
  & span {
    color: ${colors.background};
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  font-family: "Arima", system-ui;
  padding: 25px 20px;
  background-color: #f2f4f5;
  border-radius: 8px;
  font-size: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  color: #333;

  & > p,
  & > span {
    color: #5c5c5c;
    margin: 2px 0;
    line-height: 1.1;
    font-weight: 200;
  }

  & span.highlight {
    color: #1f1f1f;
    font-weight: 500;
  }

  & p.notice {
    font-style: italic;
    color: #3a3a3a;
    font-size: 13px;
  }
`;
export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 400px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 16px;
  background-color: #1a1a1a;
  color: white;
  border-radius: 4px 4px 0 0;
  font-size: 16px;
  font-weight: bold;
  font-family: "Arima", system-ui;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  color: ${colors.description};
`;

export const BreakPoint = styled.div`
  height: 20px;
  width: 100%;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 25px 20px 6px;
  font-size: 14px;
  border: 2px solid
    ${({ error }) => (error ? colors.error : colors.description)};
  border-radius: 5px;
  font-family: "Arima", system-ui;
  background-color: ${({ error }) => (error ? "#ffeef0" : "white")};
  box-shadow: none;
  appearance: none;

  &:focus {
    border: 2px solid black;
    outline: none;
  }
`;

export const ArrowIcon = styled.span`
  position: absolute;
  right: 20px;
  top: 30px;
  pointer-events: none;
  color: ${({ error }) => (error ? colors.error : colors.description)};
`;
