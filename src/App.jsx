import React from 'react';
import AllFilmsPage from 'enitites/AllFilmsPage';
import './styles/index.scss';
import PageLayout from 'shared/PageLayout';
import { Route, Switch } from 'react-router-dom';
import FavouriteFilmsPage from 'enitites/FavouriteFilmsPage';

const App = () => (
  <Switch>
    <PageLayout>
      <Route path="/films_all">
        <AllFilmsPage />
      </Route>
      <Route path="/favourite_films">
        <FavouriteFilmsPage />
      </Route>
    </PageLayout>
  </Switch>
);

export default App;
