// src/components/inputText/styles.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ status, theme }) =>
    status === "error" ? theme.colors.red : theme.colors.primary};
  margin: 24px 0 4px 0;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: ${({ width }) => `calc(${width} + 42px)`};
`;

export const StyledInput = styled.input`
  width: ${({ width }) => width};
  padding: 12px 36px 12px 12px;
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  border-bottom: 1px solid
    ${({ status, theme }) =>
      status === "error" ? theme.colors.red : theme.colors.primary};
  font-size: 16px;

  &:focus {
    outline: none;
    border-bottom-color: ${({ status, theme }) =>
      status === "error" ? theme.colors.red : theme.colors.primary};
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
`;

export const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-variation-settings: "FILL" 0, "wght" 400;
  font-size: 20px;
  color: #555;
`;
