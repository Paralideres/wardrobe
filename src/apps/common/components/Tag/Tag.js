import { base } from './Tag.css';
import React from 'react';

export default ({
  children,
  ...props
}) => (
  <a className={base} {...props}>{children}</a>
);
