import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Book Finder</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Books</NavLink>
    <NavLink to="/favourites" activeClassName="is-active">Favourites</NavLink>
  </header>
);

export default Header;
