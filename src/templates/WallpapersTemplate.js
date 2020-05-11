import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Wallpaper from 'components/molecules/Wallpaper/Wallpaper';
import { fetchItems } from 'actions';
import Form from 'components/organisms/Form/Form';
import GridTemplate from './GridTemplate';

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background: ${({ theme }) => theme.accent};
`;

const WallpapersTemplate = ({ wallpapers = [], fetchWallpapers }) => {
  useEffect(() => {
    fetchWallpapers();
  }, []);

  return (
    <>
      <StyledForm>
        <Form />
      </StyledForm>
      <GridTemplate>
        {wallpapers.map(({ urls: { small } }) => (
          <Wallpaper src={small} />
        ))}
      </GridTemplate>
    </>
  );
};

const mapStateToProps = (state) => {
  const { wallpapers } = state;
  return { wallpapers };
};

const mapDispatchToProps = (dispatch) => ({
  fetchWallpapers: () => dispatch(fetchItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WallpapersTemplate);
