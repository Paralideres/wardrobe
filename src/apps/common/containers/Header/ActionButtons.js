import { container, button } from './UserAccount.css';
import React from 'react';
import Button  from 'common/components/Button/Button';
import { redirect } from 'common/utils/window';

// TODO Include LoginFrom
const ActionButtons = () => {
  return (
    <div className={container}>
      <Button
        className={button}
        onClick={() => redirect('/login')}>
        Ingresar
      </Button>
      <Button
        className={button}
        onClick={() => redirect('/register')}
        mode="secondary">
        Registrarme
      </Button>
    </div>
  );
};

export default ActionButtons;
