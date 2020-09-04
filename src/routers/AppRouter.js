import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import BookDashboardPage from '../components/BookDasboardPage'
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import FavouritesPage from '../components/FavouritesPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={BookDashboardPage} exact={true} />
        <Route path="/favourites" component={FavouritesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
