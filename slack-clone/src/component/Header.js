import React from 'react';
import '../css/Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from '../component/StateProvider';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className='header'>
      <div className='header__left'>
        {/*Avatars for logged in user */}
        <Avatar
          className='header__avatar'
          alt={user?.displayName}
          src={user?.photoURL}
        />
        {/*Time icon */}
        <AccessTimeIcon />
      </div>
      <div className='header__search'>
        {/*Serach icon */}
        <SearchIcon />
        <input placeholder='Search '></input>
        {/*input */}
      </div>
      <div className='header__right'>
        {/*Help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
