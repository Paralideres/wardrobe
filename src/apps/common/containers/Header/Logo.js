import { logo } from './Logo.css';
import React from 'react';
import logoImg from 'img/paralideres_200x27.png';

export default () => (
  <div className={logo}>
    <a href="http://www.paralideres.org/">
      <img
        src={logoImg}
        alt="ParaLideres.org | Recursos - Capacitación - Comunidad"
        title="ParaLideres.org | Recursos - Capacitación - Comunidad"
      />
    </a>
  </div>
);
