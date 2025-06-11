// styles.js
import styled, { css } from 'styled-components';

export const Aside = styled.aside`
  width: 100%;
  max-width: 276px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #eee;
  background: #fcfcfc;
  box-shadow: 0px 12px 16px -4px #00010d14;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: #212121;
  cursor: pointer;

  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;

  svg {
    width: 24px;
    height: 24px;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #f5f5f5;
      font-weight: 600;
    `}

  &:hover {
    background-color: ${({ danger }) => (danger ? '#fee2e2' : '')};
  }
`;

export const Divider = styled.hr`
  margin: 2px 0;
  border: none;
  border-top: 1px solid #e0e0e0;
`;

export const SupportButton = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #d7d7d9;
  border-radius: 4px;
  cursor: pointer;
  background: none;
  outline: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
`;
