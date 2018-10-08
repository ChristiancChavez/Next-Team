import React from 'react';
import './App.scss';
import { Route, Link } from 'react-router-dom';
import MainContent from './mainContent/MainContent';
import AboutUs from './aboutUs/AboutUs';
import Account from './account/Account';
import PasswordForgetPage from './passwordForget/PasswordForget';
import SingInPage from './signIn/SignIn';
import SignUpPage from './signUp/SignUp';
import * as routes from '../shared/constants/routes';

const App = () => (
  <div>
    <header>
      <Link to={routes.HOME}>Home</Link>
      <Link to={routes.SIGN_UP}>Sign Up</Link>
      <Link to={routes.SIGN_IN}>Sign In</Link>
      <Link to={routes.ABOUT_US}>About us</Link>
    </header>

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

    </main>
  </div>
);

export default App;
