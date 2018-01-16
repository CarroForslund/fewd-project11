import React from 'react';
import NavItem from './NavItem';

const Nav = (props) => (

  <nav className="main-nav">
    <ul>
      <NavItem link="cats" />
      <NavItem link="coffee" />
      <NavItem link="computers" />
    </ul>
  </nav>
);

export default Nav;
