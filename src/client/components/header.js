import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to={'/'}><h4>Anxiety</h4></Link>
      <NavLink to={'/create'}><h5>Create New</h5></NavLink>
      <NavLink to={'/list'}><h5>List All</h5></NavLink>
      <NavLink to={'/:category'}><h5>Find By Category</h5></NavLink>
    </header>
  )
};

export default Header;
