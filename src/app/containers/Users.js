import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from '../components/grid/Section';
import Col from '../components/grid/Col';
import Table from '../components/table/Table';

import { getUsers } from '../actions/usersActions';

const columns = ['id', 'label', 'slug', 'description'];

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <Section>
        <Col span="1">
          <Table columns={columns} results={this.props.users} />
        </Col>
      </Section>
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
