import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (

  <nav className="main-nav">
    <ul>
      <li><NavLink to='/cats' onClick={ () => { this.performSearch() } }>Cats</NavLink></li>
      <li><NavLink to='/coffee' onClick={ () => { this.performSearch() } }>Coffee</NavLink></li>
      <li><NavLink to='/computers' onClick={ () => { this.performSearch() } }>Computers</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
