import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #111827;
  margin-bottom: 8px;
  display: inline-block;
`;

export const ErrorText = styled.p`
  color: #dc2626;
  font-size: 12px;
  margin-top: 6px;
`;

export const Group = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  border: 2px solid #00777d;
  accent-color: #00777d;
  border-radius: 4px;
  cursor: pointer;
`;
