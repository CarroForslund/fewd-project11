import React from 'react';
import NavItem from './NavItem';

const Nav = (props) => (

  <div>
    <nav className="main-nav">
      <ul>
        <NavItem link="Cats" />
        <NavItem link="Coffee" />
        <NavItem link="Computers" />
        <NavItem link="Search" />
      </ul>
    </nav>
  </div>
);

export default Nav;
