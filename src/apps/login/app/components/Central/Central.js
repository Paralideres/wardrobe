import { container } from './Central.css';
import React from 'react';

import slider1 from 'img/old/slider/compartir.jpg';

export default () => (
  <div className={container}>
    <a href="http://paralideres.org/UploadFile.aspx">
      <img src={slider1} alt="Compartir" />
    </a>
  </div>
);
