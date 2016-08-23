import React, { Component } from 'react';
import Header from './Header';
import Central from './Central';
import Footer from './Footer';

class Main extends Component {

  render() {
    return (
      <div id="main_wrapper" className="clearfix">
        <Header />
        <div id="content" className="clearfix">
          <Central />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
