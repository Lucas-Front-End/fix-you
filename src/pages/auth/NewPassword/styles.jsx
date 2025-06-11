import React from 'react';
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LeftPanel = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 24px;
`;

export const LeftContent = styled.div`
  width: 412px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 32px;
  text-align: center;
`;

export const Description = styled.div`
  width: 230px;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  line-height: 24px;
  margin: 0 0 32px 0;
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const ForgotPassword = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  align-self: flex-end;
  margin: 32px 0;
  text-decoration: underline;
  text-underline-offset: 4px;
`;

export const RightPanel = styled.div`
  width: 50%;
  background-color: #014959;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin: 24px;
`;

export const Logo = styled.img`
  width: 470px;
  height: 175px;
  height: auto;
  margin-bottom: 24px;
`;

export const BrandText = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const Tagline = styled.p`
  font-size: 16px;
  color: #ffffff;
  opacity: 0.8;
  text-align: center;
  max-width: 200px;
`;

export const PasswordChecklistWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  margin-top: 32px;
`;

export const PasswordChecklistItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const PasswordChecklistText = styled.span`
  font-size: 16px;
`;

export function PasswordCheckIcon({ valid }) {
  return valid ? (
    <CheckCircleIcon style={{ color: '#27ae60', marginRight: 8 }} />
  ) : (
    <RadioButtonUncheckedIcon style={{ color: '#d3d3d3', marginRight: 8 }} />
  );
}
