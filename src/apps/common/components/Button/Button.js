import styles from './Button.css';
import React from 'react';
import classnames from 'classnames';

export default ({
  children,
  className,
  mode,
  ...props
}) => {

  const style = classnames(styles.base, className, {
    [styles.primary]: mode === 'primary',
    [styles.secondary]: mode === 'secondary',
    [styles.passive]: mode === 'passive'
  });

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
}
