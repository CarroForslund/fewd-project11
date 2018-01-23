import React from 'react';
import NavItem from './NavItem';

const Nav = (props) => (

  <div>
    <nav className="main-nav">
      <ul>
        <NavItem link="cats" />
        <NavItem link="horses" />
        <NavItem link="dogs" />
        <NavItem link="search" />
      </ul>
    </nav>
  </div>
);

export default Nav;
