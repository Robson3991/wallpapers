import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import WallpapersTemplate from 'templates/WallpapersTemplate';
import FavouritesTemplate from 'templates/FavouritesTemplate';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={WallpapersTemplate} />
          <Route path={routes.favourites} component={FavouritesTemplate} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default App;
