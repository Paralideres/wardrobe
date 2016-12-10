import { container } from './Main.css';
import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';

import Header from 'common/containers/Header';
import Footer from 'common/containers/Footer';
import Copy from 'common/components/Copy';
import { sendCredentials } from '../actions/currentUserActions';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onButtonClick() {
    this.props.login(this.state.email, this.state.password);
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className={container} >
          <input name="email" value={this.state.email} onChange={this.onChangeEmail} />
          <input name="password" type="password" value={this.state.password} onChange={this.onChangePassword} />
          <button onClick={this.onButtonClick}>Ingresar</button>
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

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) =>
      dispatch({
        type: 'REQUEST_LOGIN',
        payload: { email, password }
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
