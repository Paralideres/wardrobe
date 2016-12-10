import { container } from './Main.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'common/containers/Header';
import Resource from './Resource';
import ExtraResources from '../components/ExtraResources';
import Footer from 'common/containers/Footer';
import Copy from 'common/components/Copy';

class Main extends Component {
  render() {
    return (
      <div>
        <Header user={this.props.currentUser}/>
        <div className={container}>
          <Resource resource={this.props.resource} />
          <ExtraResources />
        </div>
        <Footer />
        <Copy />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    resource: state.resource,
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps
)(Main);
