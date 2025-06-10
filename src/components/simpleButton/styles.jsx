import styled from 'styled-components';
import { Button } from '@mui/material';

export const CustomButton = styled(Button)`
  width: ${({ $width }) => $width || '176px'} !important;
  min-width: ${({ $minWidth }) => $minWidth || '176px'} !important;
  height: ${({ $height }) => $height || '40px'};
  background-color: ${({ $backgroundColor, disabled, theme }) =>
    disabled ? theme.colors.disabled : $backgroundColor || theme.colors.primary} !important;
  padding: ${({ $padding }) => $padding || '0px'} !important;
  margin: ${({ $margin }) => $margin || '0px'} !important;
  border-radius: ${({ $borderRadius }) => $borderRadius || '4px'};
  color: ${({ $fontColor, disabled }) => (disabled ? '#666' : $fontColor || '#fff')} !important;
  font-size: ${({ $fontSize }) => $fontSize || '16px'} !important;
  font-weight: ${({ $fontWeight }) => $fontWeight || '600'};
  border: ${({ $borderColor }) => `1px solid ${$borderColor || 'transparent'}`} !important;
  text-transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  text-transform: none !important;
  box-shadow: none !important;
  &:hover {
    box-shadow: none !important;
  }
  cursor: pointer;
`;

export const ButtonText = styled.span``;
