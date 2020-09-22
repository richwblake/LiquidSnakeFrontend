import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
        exact

      >Home</NavLink>

      <NavLink
        to='/hiscores'
        exact

      >Hiscores</NavLink>

      <NavLink
        to='/catpics'
        exact

      >CatPics</NavLink>
    </div>
  );
};

export default NavBar;
