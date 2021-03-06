import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import BookDashboardPage from '../components/BookDasboardPage'
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import FavouritesPage from '../components/FavouritesPage'
import BookDetailsPage from '../components/BookDetailsPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={BookDashboardPage} exact={true} />
        <Route path="/favourites" component={FavouritesPage} />
        <Route path="/details/:id" component={BookDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
