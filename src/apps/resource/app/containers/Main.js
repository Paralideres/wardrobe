import { container } from './Main.css';
import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';


import Header from 'common/containers/Header';
import Resource from './Resource';
import ExtraResources from './ExtraResources';
import Footer from 'common/containers/Footer';
import Copy from 'common/components/Copy';

class Main extends Component {

  componentDidMount() {
    this.props.getResource(window.location.pathname.split('/')[2]);
  }

  render() {
    return (
      <div>
        <Header />
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
    resource: state.resource.payload
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResource: (id) => dispatch({type: 'REQUEST_RESOURCE', id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
