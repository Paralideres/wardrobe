import { container, button } from './UserAccount.css';
import React from 'react';
import Button  from 'common/components/Button/Button';
import { redirect } from 'common/utils/window';

const UserAccount = ({
  user
}) => {
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
};

UserAccount.propTypes = {
  user: React.PropTypes.object
};

export default UserAccount;
