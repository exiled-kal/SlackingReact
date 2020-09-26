import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="Tsering Kalden" src="" />
        <AccessTimeIcon />
        {/* Avatar for the logged in user */}
        {/* Time Icon */}
      </div>
      <div className="header__search">
        {/* Search icon */}
        {/* input */}
      </div>
      <div className="header__right">{/* help icon */}</div>
    </div>
  );
}

export default Header;
