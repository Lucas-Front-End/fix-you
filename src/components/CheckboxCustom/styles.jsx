import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #212121;
  margin-bottom: 8px;
  text-align: left;
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

export const Group = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #424242;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  border: 2px solid #00777d;
  accent-color: #00777d;
  border-radius: 4px;
  cursor: pointer;
`;
