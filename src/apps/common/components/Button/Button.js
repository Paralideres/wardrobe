import styles from './Button.css';
import React from 'react';
import classnames from 'classnames';

export default ({
  children,
  className,
  type,
  ...props
}) => {

  const style = classnames(styles.base, className, {
    [styles.primary]: type === 'primary',
    [styles.secondary]: type === 'secondary',
    [styles.passive]: type === 'passive'
  });

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
}
