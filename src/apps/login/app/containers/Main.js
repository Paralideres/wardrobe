import { container } from './Main.css';
import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Central from '../components/Central/Central';
import LastUpdates from '../components/LastUpdates/LastUpdates';
import BlogStream from '../components/BlogStream/BlogStream';
import Poll from '../components/Poll/Poll';
import SocialNetworks from '../components/SocialNetworks/SocialNetworks';
import Footer from './Footer';

class Users extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className={container} >
          Login Form
        </div>
        <Footer />
      </div>
    );
  }
}

export default Users;
