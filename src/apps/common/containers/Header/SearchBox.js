import { searchBox, input, icon } from './SearchBox.css';
import React from 'react';
import Icon from 'common/components/Icon/Icon';

export default () => (
  <div className={searchBox}>
    <Icon className={icon} glyph={Icon.set.SEARCH} />
    <input className={input} placeholder="Buscar recursos..." />
  </div>
);
