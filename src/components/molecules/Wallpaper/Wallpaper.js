import React from 'react';
import styled from 'styled-components';
import Image from 'components/atoms/Image/Image';
import Heart from 'images/heart.svg';

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 400px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledIcon = styled(Image)`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 25px;
  cursor: pointer;
`;

const Wallpaper = ({ src }) => (
  <StyledWrapper>
    <StyledImage src={src} />
    <StyledIcon src={Heart} />
  </StyledWrapper>
);

export default Wallpaper;
