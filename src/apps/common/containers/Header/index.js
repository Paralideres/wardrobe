import styles from './Header.css';
import React from 'react';

import UserAccount from './UserAccount';
import Logo from './Logo';
import Menu from './Menu';
import SearchBox from './SearchBox';

const Header = ({
  user
}) => (
  <div className={styles.fullWidth}>
    <header className={styles.header}>
      <Logo />
      <Menu />
      <UserAccount user={user} />
      <SearchBox />
    </header>
  </div>
);

Header.propTypes = {
  user: React.PropTypes.object
}

export default Header;
