import React, { Component } from 'react';
import Header from './Header';
import Central from './Central';
import SideBar from './SideBar';
import BlogStream from '../components/BlogStream/BlogStream';
import Poll from '../components/Poll/Poll';
import SocialNetworks from '../components/SocialNetworks/SocialNetworks';
import Footer from './Footer';

class Users extends Component {

  render() {
    return (
      <div id="main_wrapper" className="clearfix">
        <Header />
        <div id="content" className="clearfix">

          <Central />

          <div id="extra-content">

            <BlogStream />

            <Poll />

          </div>
          <SocialNetworks />

          <Footer />
        </div>
      </div>
    );
  }
}

export default Users;
