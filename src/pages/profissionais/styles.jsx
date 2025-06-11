import styled from 'styled-components';

export const Content = styled.div`
  padding: 24px 32px 32px;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #262729;
  margin: 26px 0 30px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 32px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  padding: 56px 32px;
  box-shadow: 0px 0px 4px 0px #0000000a;
  text-align: center;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #212121;
`;
