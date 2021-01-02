import React from 'react';
import '../css/Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        {/*Avatars for logged in user */}
        <Avatar className='header__avatar' alt='ilayda' src='' />
        {/*Time icon */}
        <AccessTimeIcon />
      </div>
      <div className='header__search'>
        {/*Serach icon */}
        {/*input */}
      </div>
      <div className='header__right'>{/*Help icon */}</div>
    </div>
  );
}

export default Header;
