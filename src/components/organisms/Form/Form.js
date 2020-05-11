import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
`;

const Form = () => {
  return (
    <StyledWrapper>
      <Input placeholder="search wallpaper..." />
      <Input />
      <Button secondary>send</Button>
    </StyledWrapper>
  );
};

export default Form;
