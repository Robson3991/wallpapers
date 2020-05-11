import styled from 'styled-components';

const Input = styled.input`
  padding: 5px 15px;
  min-height: 20px;
  border: 1px solid ${({ theme }) => theme.accent};
  font-size: 15px;
  color: ${({ theme }) => theme.accent};
`;

export default Input;
