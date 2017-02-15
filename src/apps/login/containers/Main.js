import { container } from './Main.css';
import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';

import Header from 'common/containers/Header';
import Footer from 'common/containers/Footer';
import Copy from 'common/components/Copy';
import TextInput from 'common/components/Input/TextInput';
import Button from 'common/components/Button/Button';

import { sendCredentials } from '../actions/userActions';

class Users extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className={container} >
          <form>
            <TextInput name="email"  />
            <TextInput name="password" />
            <Button
              onClick={this.onButtonClick}
              mode="primary"
              type="submit">
              Ingresar
            </Button>
          </form>
        </div>
        <Footer />
        <Copy />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Users);
