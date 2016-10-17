import React from 'react';

import List from '../components/List/List';

export default ({
  category
}) => (
  <div id="central_content">
    <List {...category} />
  </div>
);
