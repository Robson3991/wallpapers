import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 5px;
  font-family: 'Montserrat';
  min-width: 100px;
  min-height: 20px;
  font-size: 16px;
  padding: 10px 12px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.accent};
  text-decoration: none;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.black};
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.accentLight};
      border-radius: 0;
    `}
`;

export default Button;
