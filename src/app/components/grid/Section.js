import styles from './grid.css';
import React, { PropTypes } from 'react';
import cx from 'classnames';

export default function Section({ children }) {
  const style = cx(styles.section, styles.group);
  return (
    <div className={style}>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.any,
};
