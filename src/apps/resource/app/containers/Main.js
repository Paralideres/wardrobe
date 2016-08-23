import React, { Component } from 'react';
import Header from './Header';
import Resource from './Resource';
import ExtraResources from './ExtraResources';
import Footer from './Footer';

class Main extends Component {

  render() {
    return (
      <div id="main_wrapper" className="clearfix">
        <Header />

        <div id="content" className="clearfix">
          <Resource />
        </div>

        <ExtraResources />

        <Footer />
      </div>
    );
  }
}

export default Main;
