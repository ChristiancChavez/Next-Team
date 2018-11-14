import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import SignOutButton from '../signOut/SignOut';
import * as routes from '../../shared/constants/routes';
import stadiumWhite from '../../images/stadium-white.png';
import logo from '../../images/logo-white.png';
import userAccount from '../../images/player-user-white.png';
import './Navigation.scss';

const Navigation = ({ authUser }) => (
  <div>
    { authUser
      ? <NavigationNonAuth />
      : <NavigationAuth />
    }
  </div>
);

const NavigationAuth = () => (
  <span className="navigation">
    <img className="navigation__logo" alt="Redireccionar a Home" src={logo} />
    <button className="navigation-button navigation-button--center" type="button">
      <img className="navigation-button__image navigation-button__image--stadium" alt="Acciones principales de la aplicación" src={stadiumWhite} />
      <Link to={routes.SESSION_USER} />
    </button>
    <button className="navigation-button" type="button">
      <img className="navigation-button__image" alt="Entrar a Cuenta de Usuario" src={userAccount} />
      <Link to={routes.ACCOUNT} />
    </button>
    {/* <li><SignOutButton /></li> */}
  </span>
);

const NavigationNonAuth = () => (
  <span className="navigation">
    <img className="navigation__logo" alt="logo NextTeam" src={logo} />
    <button className="navigation-button" type="button">
      <img className="navigation-button__image" alt="Redirecionar a cuenta de Usuario" src={userAccount} />
      <Link to={routes.SIGN_IN} />
    </button>
  </span>
);

Navigation.propTypes = {
  authUser: PropTypes.bool.isRequired,
};

export default Navigation;
