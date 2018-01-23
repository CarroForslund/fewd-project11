import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (

  <div>
    <nav className="main-nav">
      <ul>
        <li><NavLink to={"/cats"}>Cats</NavLink></li>
        <li><NavLink to={"/coffee"}>Coffee</NavLink></li>
        <li><NavLink to={"/computers"}>Computers</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Nav;