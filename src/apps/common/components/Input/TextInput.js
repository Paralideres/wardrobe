import styles from './TextInput.css';
import React from 'react';
import classnames from 'classnames';

export default ({
  children,
  className,
  type,
  ...props
}) => {

  const style = classnames(styles.base, className);

  return (
    <input className={style} {...props}>
      {children}
    </input>
  );
}
