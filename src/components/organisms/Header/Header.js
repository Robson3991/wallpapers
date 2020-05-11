import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.accentLight};
`;

const Header = () => (
  <StyledWrapper>
    <Button as={NavLink} to="/">
      Wallpapers
    </Button>
    <Button as={NavLink} to="/favourites">
      Favourites
    </Button>
  </StyledWrapper>
);

export default Header;
