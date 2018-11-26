import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import MainContent from './mainContent/MainContent';
import AboutUs from './aboutUs/AboutUs';
import Account from './account/Account';
import PasswordForgetPage from './passwordForget/PasswordForget';
import SingInPage from './signIn/SignIn';
import SignUpPage from './signUp/SignUp';
import CreateMatch from './CreateMatch';
import {
  HOME, ABOUT_US, ACCOUNT, PASSWORD_FORGET, SIGN_IN, SIGN_UP, CREATE_MATCH, SESSION_USER
} from '../shared/constants/routes';
import Navigation from './navigation/Navigation';
import SessionUser from './SessionUser/SessionUser';
import { firebase } from '../config/firebase';
// import ballplay from '../images/arrow-right.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((authUser) => {
      // eslint-disable-next-line no-unused-expressions
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    const { authUser } = this.state;

    return (
      <div>
        <Navigation authUser={authUser} />
        <main>
          <Route
            exact
            component={MainContent}
            path={HOME}
          />
          <Route
            exact
            path={ABOUT_US}
            component={AboutUs}
          />
          <Route
            exact
            path={ACCOUNT}
            component={Account}
          />
          <Route
            exact
            path={PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route
            exact
            path={SIGN_IN}
            component={SingInPage}
          />
          <Route
            exact
            path={SIGN_UP}
            component={SignUpPage}
          />
          <Route
            exact
            path={CREATE_MATCH}
            component={CreateMatch}
          />
          <Route
            exact
            path={SESSION_USER}
            component={SessionUser}
          />
        </main>
      </div>
    );
  }
}

export default App;
