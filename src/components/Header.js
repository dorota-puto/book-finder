import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header__content">
      <NavLink className="button-link" to="/" activeClassName="is-active" exact={true}>Books</NavLink>
      <NavLink className="button-link" to="/favourites" activeClassName="is-active">Favourites</NavLink>
    </div>
    <h1 className="header__title">Book Finder</h1>
  </header>
);

export default Header;
