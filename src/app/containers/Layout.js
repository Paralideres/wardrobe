import styles from './Layout.css';
import React, { PropTypes } from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="#">Editor</a>
        </div>
      </header>
      <nav>
        <a href="">Users</a>
        <a href="">Teams</a>
        <a href="">Resources</a>
        <a href="">Polls</a>
        <a href="">Collections</a>
        <a href="">Categories</a>
        <a href="">Tags</a>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
