import styles from './Button.css';
import React from 'react';
import classnames from 'classnames';

export default ({
  children,
  className,
  type
}) => {

  const style = classnames(styles.base, className, {
    [styles.primary]: type === 'primary',
    [styles.secondary]: type === 'secondary'
  });

  return (
    <button className={style}>
      {children}
    </button>
  );
}
