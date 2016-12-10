import { container, button } from './UserAccount.css';
import React from 'react';
import Button  from 'common/components/Button/Button';
import { redirect } from 'common/utils/window';

// TODO Include LoginFrom

const UserAccount = ({
  user
}) => {

  if (user && user.id) {
    return (
      <div className={container}>
        <a
          onClick={() => redirect(`/profile/${user.id}`)}>
          {user.username}
        </a>
        <a href="#">
          Logout
        </a>
      </div>
    );
  }

  if (user && user.isFetching) {
    return null;
  }

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
        type="secondary">
        Registrarme
      </Button>
    </div>
  );
};

UserAccount.propTypes = {
  user: React.PropTypes.object
};

export default UserAccount;
