import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {

  //Capitalize link
  const link = props.link.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

  return <li><NavLink to={`/${props.link}`}>{link}</NavLink></li>;

}

export default NavItem;
