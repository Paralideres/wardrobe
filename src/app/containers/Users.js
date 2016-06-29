import React, { PropTypes } from 'react';
import Section from '../components/grid/Section';
import Col from '../components/grid/Col';
import Table from '../components/table/Table';

const columns = ['username', 'created_at', 'updated_at'];

export default function Users() {
  return (
    <Section>
      <Col span="1">
        <Table columns={columns} />
      </Col>
    </Section>
  );
}

Users.propTypes = {
  children: PropTypes.any,
};
