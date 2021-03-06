import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { auth } from '../../config/firebase';
import * as routes from '../../shared/constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUpPage = ({ history }) => {
  console.log(history);
  return (
    <div>
      <h1>Sign Up</h1>
      <SingUpForm history={history} />
    </div>
  );
};


class SingUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };
  }

  byProperKey = (propertyName, value) => {
    this.setState({
      [propertyName]: value,
    });
  };

  onSubmit = (event) => {
    const {
      // username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        console.log(authUser);
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch((error) => {
        this.byProperKey('error', error);
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo
      || passwordOne === ''
      || email === ''
      || username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.byProperKey('username', event.target.value)}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.byProperKey('email', event.target.value)}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.byProperKey('passwordOne', event.target.value)}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.byProperKey('passwordTwo', event.target.value)}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    No tienes una cuenta?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

SignUpPage.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

SingUpForm.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(SignUpPage);

export {
  SingUpForm,
  SignUpLink,
};
