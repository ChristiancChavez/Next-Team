import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SignUpLink } from '../signUp/SignUp';
import { auth } from '../../config/firebase';
import * as routes from '../../shared/constants/routes';

const SignInPage = ({ history }) => (
  <div>
    <h1>Sign In</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
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
      email,
      password,
    } = this.state;

    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
      email,
      password,
      error,
    } = this.state;


    const isInvalid = password === ''
    || email === '';

    return (
      <form>
        <input
          value={email}
          onChange={event => this.byProperKey('email', event.target.value)}
          type="text"
          placeholder="Email address"
        />
        <input
          value={password}
          onChange={event => this.byProperKey('password', event.target.value)}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

SignInPage.propTypes = {
  history: PropTypes.shape().isRequired,
};

SignInForm.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(SignInPage);

export {
  SignInForm,
};
