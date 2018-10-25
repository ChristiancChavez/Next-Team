import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignOutButton from '../signOut/SignOut';
import * as routes from '../../shared/constants/routes';

const Navigation = ({ authUser }) => (
  <div>
    { authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><Link to={routes.CREATE_MATCH}>Create Match</Link></li>
    <li><SignOutButton /></li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.SIGN_IN}>Account</Link></li>
  </ul>
);

Navigation.propTypes = {
  authUser: PropTypes.bool.isRequired,
};

export default Navigation;
