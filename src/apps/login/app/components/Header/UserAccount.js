import { container, button } from './UserAccount.css';
import React from 'react';
import Button  from 'common/components/Button/Button';

// TODO Include LoginFrom

export default () => (
  <div className={container}>
    <Button className={button}>Ingresar</Button>
    <Button className={button} type="secondary">Registrarme</Button>
  </div>
);
