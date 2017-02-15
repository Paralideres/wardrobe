import styles from './Header.css';
import React from 'react';
import { connect } from 'react-redux';

import Logo from './Logo';
import Menu from './Menu';
import UserAccount from './UserAccount';
import ActionButtons from './ActionButtons';
import SearchBox from './SearchBox';

const Header = ({
  currentUser
}) => (
  <header className={styles.header}>
    <Logo />
    <Menu />
    <SearchBox />
    { currentUser && currentUser.id ?
      (<UserAccount user={currentUser} />) :
      (<ActionButtons />)
    }
  </header>
);

Header.propTypes = {
  currentUser: React.PropTypes.object
}

function mapStateToProps({ currentUser }) {
  return { currentUser }
}

export default connect(
  mapStateToProps
)(Header);
