import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../images/logo-white.png';
import blueShirt from '../../images/shirt-blue.png';
import redShirt from '../../images/shirt-red.png';
import facebookIcon from '../../images/facebook.png';
import googleIcon from '../../images/google.png';
import './MainContent.scss';
import * as playersActions from '../../modules/players/actions';
import { firebase } from '../../config/firebase';

class MainContent extends Component {
    state = {
      name: '',
      user: null,
    }

    onChangeName = (e) => {
      this.setState({
        name: e.target.value,
      });
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

          console.log(user);
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
      const { onClickAddPlayer, players, onClickRemovePlayer } = this.props;
      const { name, user } = this.state;
      return (
        <span className="principal">
          <img className="principal__logo" src={logo} alt="Logo Next Team" />
          <span className="principal__message">Para crear un partido, primero ingresa con tu cuenta</span>
          <span className="principal-container">
            <span className="principal-facebook">
              <img className="principal-facebook__shirt" src={blueShirt} alt="" />
              <img className="principal-facebook__icon" src={facebookIcon} alt="" />
              <span className="principal-facebook__text" onClick={this.loginFacebook} role="presentation">Ingresa con Facebook</span>
            </span>
            <span className="principal-google">
              <img className="principal-google__shirt" src={redShirt} alt="" />
              <img className="principal-google__icon" src={googleIcon} alt="" />
              <span className="principal-google__text" onClick={this.loginGoogle} role="presentation">Ingresa con Google+</span>
            </span>
          </span>
          <button type="button" onClick={this.logout}>out</button>
          {user
            ? (
              <h1>
                Hi!&nbsp;
                {user.displayName}
              </h1>
            )
            : null
          }
          <input
            name="player"
            value={name}
            onChange={this.onChangeName}
            className="principal__input"
          />
          <button type="button" onClick={() => onClickAddPlayer(name)} className="principal__button">Add player</button>
          {players.map(player => (
            <span
              role="presentation"
              onClick={() => onClickRemovePlayer(player.id)}
              key={player.id}
            >
              {player.name}
            </span>
          ))}
        </span>
      );
    }
}

const mapStateToProps = ({ players }) => ({
  players,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onClickAddPlayer: playersActions.addPlayer,
  onClickRemovePlayer: playersActions.removePlayer,
}, dispatch);

MainContent.propTypes = {
  onClickAddPlayer: PropTypes.func.isRequired,
  onClickRemovePlayer: PropTypes.func.isRequired,
  players: PropTypes.shape([]).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContent);
