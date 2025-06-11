import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: ${({ margin }) => margin || 0};
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  vertical-align: middle;
  text-align: left;
  display: block;
  color: ${({ hasError }) => (hasError ? '#B71C1C' : '#262729')};
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  border: none;
  border-bottom: 2px solid ${({ hasError, focused }) => (hasError ? '#B71C1C' : focused ? '#00777D' : '#9ca3af')};
  background-color: transparent;
  outline: none;
  padding: 0 8px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #9e9e9e;
  &:placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #9e9e9e;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 56px;
  padding: 0px 8px;
  border: none;
  border-bottom: 2px solid ${({ hasError, focused }) => (hasError ? '#B71C1C' : focused ? '#00777D' : '#9ca3af')};
  background-color: transparent;
  outline: none;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #9e9e9e;
  &:placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #9e9e9e;
  }
`;

export const ErrorText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #b71c1c;
  text-align: left;
  margin: 8px 0 0;
`;
