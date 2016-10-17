import { container } from './Main.css';
import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';

import Header from 'common/containers/Header';
import Central from './Central';
import Footer from 'common/containers/Footer';
import Copy from 'common/components/Copy';

class Main extends Component {

  componentDidMount() {
    this.props.getCategory(window.location.pathname.split('/')[2]);
  }

  render() {
    return (
      <div>
        <Header />
        <div className={container}>
          <Central category={this.props.category} />
        </div>
        <Footer />
        <Copy />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    category: state.category.payload
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: (id) => dispatch({type: 'REQUEST_CATEGORY', id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
