import { avatar, container, button } from './UserAccount.css';

import React from 'react';
import Icon from 'common/components/Icon/Icon';
import Button  from 'common/components/Button/Button';
import { redirect } from 'common/utils/window';

const UserAccount = ({
  user
}) => {
  return (
    <div className={container}>
      <a className={avatar} href={`/profile/${user.id}`} title={user.username}>
        <Icon glyph={Icon.set.ID_CARD} width="25" height="25"/>
      </a>
    </div>
  );
};

UserAccount.propTypes = {
  user: React.PropTypes.object
};

export default UserAccount;
