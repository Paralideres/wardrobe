import React from 'react';

import Social from '../components/Header/Social';
import UserAccount from '../components/Header/UserAccount';
import Logo from '../components/Header/Logo';
import Menu from '../components/Header/Menu';
import SearchBox from '../components/Header/SearchBox';

const Header = () => (
  <div id="header">

    <div id="top_user_box">
      <Social />
      <UserAccount />
    </div>

    <div id="main_head_box">
      <Logo />
      <Menu />
      <SearchBox />
    </div>

  </div>
);

export default Header;
