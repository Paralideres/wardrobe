import { container, extraContent } from './Main.css';
import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';

import Header from 'common/containers/Header';
import Central from '../components/Central/Central';
import LastUpdates from '../components/LastUpdates/LastUpdates';
import BlogStream from '../components/BlogStream/BlogStream';
import Poll from '../components/Poll/Poll';
import SocialNetworks from '../components/SocialNetworks/SocialNetworks';
import Footer from 'common/containers/Footer';
import Copy from 'common/components/Copy';

class Users extends Component {

  componentDidMount() {
    this.props.getResources();
    this.props.getPoll();
    this.props.getBlogPosts();
  }

  render() {
    return (
      <div>
        <Header />
        <div className={container} >
          <Central />
          <LastUpdates resources={this.props.resources} />
          <div className={extraContent}>
            <BlogStream />
            <Poll {...this.props.poll} />
          </div>
          <SocialNetworks />
        </div>
        <Footer />
        <Copy />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    resources: state.resources.payload.data,
    poll: state.poll.payload
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResources: () => dispatch({type: 'REQUEST_RESOURCES'}),
    getPoll: () => dispatch({type: 'REQUEST_POLL'}),
    getBlogPosts: () => dispatch({type: 'REQUEST_BLOG_POSTS'})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
