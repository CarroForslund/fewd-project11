import React from 'react';
import NavItem from './NavItem';

const Nav = (props) => (

  <nav className="main-nav">
    <ul>
<<<<<<< HEAD
      <NavItem link="cats" />
      <NavItem link="coffee" />
      <NavItem link="computers" />
=======
      <li><NavLink to='/cats'>Cats</NavLink></li>
      <li><NavLink to='/coffee'>Coffee</NavLink></li>
      <li><NavLink to='/computers'>Computers</NavLink></li>
>>>>>>> e78a2a59d44d8289d8d2e7d8a89216a1c2c9a969
    </ul>
  </nav>
);

export default Nav;
