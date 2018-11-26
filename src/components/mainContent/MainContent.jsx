import React, { Component } from 'react';
import { firebase } from '../../config/firebase';
import logo from '../../images/logo-white.png';
import blueShirt from '../../images/shirt-blue.png';
import redShirt from '../../images/shirt-red.png';
import facebookIcon from '../../images/facebook.png';
import googleIcon from '../../images/google.png';
import './MainContent.scss';


class MainContent extends Component {
  state = {
    user: null
  }

  loginFacebook = () => {
    firebase.auth().signInWithPopup(firebase.facebookAuthProvider)
      .then(({ user }) => {
        this.setState({ user });
      });
  }

  loginGoogle = () => {
    firebase.auth().signInWithPopup(firebase.googleAuthProvider)
      .then((result) => {
        const token = result.credential.accessToken;
        console.log(token);

        const { user } = result;

        this.setState({ user });
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const { email, credential } = error;
        console.log(errorCode, errorMessage, email, credential);
      });
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      this.setState({ user: null });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <span className="principal">
        <img className="principal__logo" src={logo} alt="Logo Next Team" />
        <span className="principal__message">Para crear un partido, primero ingresa con tu cuenta</span>
        <span className="principal-container">
          <span className="principal-facebook">
            <img className="principal-facebook__shirt" src={blueShirt} alt="" />
            <img className="principal-facebook__icon" src={facebookIcon} alt="" />
            <span
              className="principal-facebook__text"
              onClick={this.loginFacebook}
              role="presentation"
            >
              Ingresa con Facebook
            </span>
          </span>
          <span className="principal-google">
            <img className="principal-google__shirt" src={redShirt} alt="" />
            <img className="principal-google__icon" src={googleIcon} alt="" />
            <span
              className="principal-google__text"
              onClick={this.loginGoogle}
              role="presentation"
            >
              Ingresa con Google+
            </span>
          </span>
        </span>
        {user
          ? (
            <React.Fragment>
              <h1>
                Hi!&nbsp;
                {user.displayName}
              </h1>
              <button type="button" onClick={this.logout}>out</button>
            </React.Fragment>
          )
          : null
        }
      </span>
    );
  }
}

export default MainContent;
