import styles from './Layout/Layout.css';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Table from '../components/table/Table';

import { getUsers } from '../actions/usersActions';

const columns = ['id', 'username', 'email', 'created_at'];

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <div className={styles.titleStripe}>
          <h2>Todos los Usuarios</h2>
        </div>
        <div className={styles.mainContainer}>
          <Table
            tableClassName={styles.tableView}
            columns={columns}
            results={this.props.users}
            useGriddleStyles={false}
          />
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(getUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
