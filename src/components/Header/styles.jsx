import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.background.primary};
  height: 72px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;
export const Imgs = styled.img``;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 100%;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  &::after {
    content: '';
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  color: #fcfcfc;
  margin-right: 8px;

  span.name {
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
  }
  span.email {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
  }
`;

export const ButtonNotifications = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcfcfc;
  outline: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
`;
