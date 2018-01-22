import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (

  <div>
    <nav className="main-nav">
      <ul>
        <li><NavLink to={"/cat"}>Cat</NavLink></li>
        <li><NavLink to={"/coffee"}>Coffee</NavLink></li>
        <li><NavLink to={"/computer"}>Computer</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Nav;
