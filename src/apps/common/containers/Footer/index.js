import styles from './Footer.css';
import React from 'react';
import Menu from './Menu';

export default () => (
  <div className={styles.fullWidth}>
    <footer className={styles.footer}>
      <Menu />
    </footer>
  </div>
);