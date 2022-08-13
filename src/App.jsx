import PageLayout from 'common/PageLayout';
import AllFilmsPage from 'entities/AllFilmsPage';
import FavouriteFilmsPage from 'entities/FavouriteFilmsPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/index.scss';

const App = () => (
  <Switch>
    <PageLayout>
      <Route path="/films_all">
        <AllFilmsPage />
      </Route>
      <Route path="/films_favourite">
        <FavouriteFilmsPage />
      </Route>
    </PageLayout>
  </Switch>
);

export default App;
