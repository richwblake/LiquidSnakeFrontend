import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '0 12px 0 12px',
  textDecoration: 'none',
  color: '#b4e5af',
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
        exact
        style={link}

      >Home</NavLink>

      <NavLink
        to='/hiscores'
        exact
        style={link}

      >Hiscores</NavLink>

      <NavLink
        to='/catpics'
        exact
        style={link}

      >CatPics</NavLink>
    </div>
  );
};

export default NavBar;
