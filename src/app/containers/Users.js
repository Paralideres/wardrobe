import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from '../components/grid/Section';
import Col from '../components/grid/Col';
import Table from '../components/table/Table';

const columns = ['username', 'created_at', 'updated_at'];

function Users({ users }) {
  return (
    <Section>
      <Col span="1">
        <Table columns={columns} data={users} />
      </Col>
    </Section>
  );
}

Users.propTypes = {
  users: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    data: state.users,
  };
}
export default connect(mapStateToProps)(Users);
