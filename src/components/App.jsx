import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import MainContent from './mainContent/MainContent';
import AboutUs from './aboutUs/AboutUs';
import Account from './account/Account';
import PasswordForgetPage from './passwordForget/PasswordForget';
import SingInPage from './signIn/SignIn';
import SignUpPage from './signUp/SignUp';
import CreateMatch from './CreateMatch/CreateMatch';
import * as routes from '../shared/constants/routes';
import Navigation from './navigation/Navigation';
import { firebase } from '../config/firebase';

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
            path={routes.HOME}
          />
          <Route
            exact
            path={routes.ABOUT_US}
            component={AboutUs}
          />
          <Route
            exact
            path={routes.ACCOUNT}
            component={Account}
          />
          <Route
            exact
            path={routes.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route
            exact
            path={routes.SIGN_IN}
            component={SingInPage}
          />
          <Route
            exact
            path={routes.SIGN_UP}
            component={SignUpPage}
          />
          <Route
            exact
            path={routes.CREATE_MATCH}
            component={CreateMatch}
          />
        </main>
      </div>
    );
  }
}

export default App;
