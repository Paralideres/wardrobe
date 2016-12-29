import { container } from './Main.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'common/containers/Header';
import Footer from 'common/containers/Footer';
import Copy from 'common/components/Copy';
import { setUser } from '../actions/userActions';

class Main extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.registerNewUser({
      email: this.emailInput.value,
      password: this.passwordInput.value,
      'password_confirmation': this.passwordConfirmationInput.value,
      username: this.usernameInput.value
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <div className={container}>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <input name="email" placeholder="email" type="email" ref={(input) => this.emailInput = input}/>
              <input name="username" placeholder="username" ref={(input) => this.usernameInput = input}/>
              <input name="password" type="password" ref={(input) => this.passwordInput = input}/>
              <input name="password_confirmation" type="password" ref={(input) => this.passwordConfirmationInput = input}/>
              <button type="submit">Registrame</button>
            </fieldset>
          </form>
        </div>
        <Footer />
        <Copy />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    registerNewUser: (data) => dispatch(setUser(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
