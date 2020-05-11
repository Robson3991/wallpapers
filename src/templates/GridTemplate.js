import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const GridTemplate = ({ children }) => (
  <>
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

export default GridTemplate;
