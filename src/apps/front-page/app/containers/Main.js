import { container, extraContent } from './Main.css';
import React, { Component } from 'react';
import Header from 'common/containers/Header';
import SideBar from './SideBar';
import Central from '../components/Central/Central';
import LastUpdates from '../components/LastUpdates/LastUpdates';
import BlogStream from '../components/BlogStream/BlogStream';
import Poll from '../components/Poll/Poll';
import SocialNetworks from '../components/SocialNetworks/SocialNetworks';
import Footer from 'common/containers/Footer';
import Copy from 'common/components/Copy';

class Users extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className={container} >
          <Central />
          <LastUpdates />
          <div className={extraContent}>
            <BlogStream />
            <Poll />
          </div>
          <SocialNetworks />
        </div>
        <Footer />
        <Copy />
      </div>
    );
  }
}

export default Users;
