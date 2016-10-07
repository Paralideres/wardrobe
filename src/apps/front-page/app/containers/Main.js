import { container, extraContent } from './Main.css';
import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Central from '../components/Central/Central';
import LastUpdates from '../components/LastUpdates/LastUpdates';
import BlogStream from '../components/BlogStream/BlogStream';
import Poll from '../components/Poll/Poll';
import SocialNetworks from '../components/SocialNetworks/SocialNetworks';
import Footer from './Footer';
import Copy from '../components/Footer/Copy';

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
