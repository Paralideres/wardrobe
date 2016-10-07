import styles from './Header.css';
import React from 'react';

import Social from '../components/Header/Social';
import UserAccount from '../components/Header/UserAccount';
import Logo from '../components/Header/Logo';
import Menu from '../components/Header/Menu';
import SearchBox from '../components/Header/SearchBox';

const Header = () => (
  <div className={styles.fullWidth}>
    <header className={styles.header}>
      <Logo />
      <Menu />
      <UserAccount />
      <SearchBox />
    </header>
  </div>
);

export default Header;
