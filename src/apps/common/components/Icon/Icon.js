import { icon } from './Icon.css';
import React from 'react';
import Set from './Set';

const Icon = ({
  glyph,
  width = 16,
  height = 16,
  className
}) => (
  <i className={className}>
    <svg className={icon} width={width} height={height}>
      <use xlinkHref={glyph} />
    </svg>
  </i>
);

Icon.set = Set;

export default Icon;
