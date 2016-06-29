import styles from './Layout.css';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">Editor</Link>
        </div>
      </header>
      <nav className={styles.sidebar}>
        <Link to="/">Users</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/resources">Resources</Link>
      </nav>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
