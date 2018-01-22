import React from 'react';
import NavItem from './NavItem';
import Search from './Search';

const Nav = (props) => (

  <div>
    <Search onSearch={this.performSearch} />
    <nav className="main-nav">
      <ul>
        <NavItem link="cats" />
        <NavItem link="coffee" />
        <NavItem link="computers" />
        <NavItem link="search" />
      </ul>
    </nav>
  </div>
);

export default Nav;
