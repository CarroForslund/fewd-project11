import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({match}) => (
  <nav className="main-nav">
    <ul>
    {
      /*
      <li><NavLink to={`${match.url}`}>Cats</NavLink></li>
      <li><NavLink to={`${match.url}`}>Coffee</NavLink></li>
      <li><NavLink to={`${match.url}`}>Computers</NavLink></li>
      */
    }
      <li><NavLink to='/cats'>Cats</NavLink></li>
      <li><NavLink to='/coffee'>Coffee</NavLink></li>
      <li><NavLink to='/computers'>Computers</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;
