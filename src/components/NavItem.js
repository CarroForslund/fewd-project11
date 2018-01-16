import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => (

  <li><NavLink to={`/${props.link}`}>{props.link}</NavLink></li>

);

export default NavItem;
