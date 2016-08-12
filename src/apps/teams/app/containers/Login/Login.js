import styles from './Login.css';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { sendCredentials } from '../../actions/currentUserActions';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.doLogin({
      email: this.refs.email.value,
      password: this.refs.password.value,
    });
  }

  render() {
    return (
      <div>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">Editor</Link>
          </div>
        </header>
        <nav className={styles.sidebar}>
        </nav>
        <main className={styles.main}>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <input ref="email" />
            <input ref="password" type="password" />
            <button type="submit">Login</button>
          </form>
        </main>
      </div>
    );
  }
}

Login.propTypes = {
  doLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  doLogin: (credentials) => dispatch(sendCredentials(credentials)),
});

export default connect(null, mapDispatchToProps)(Login);
