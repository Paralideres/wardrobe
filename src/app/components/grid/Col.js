import styles from './grid.css';
import React, { PropTypes } from 'react';
import cx from 'classnames';

export default function Col({
  children,
  span,
}) {
  const style = cx(styles.col, styles[`span_${span}`]);
  return (
    <div className={style}>
      {children}
    </div>
  );
}

Col.propTypes = {
  children: PropTypes.any,
  span: PropTypes.string,
};
