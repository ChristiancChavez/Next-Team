import React, { Component } from 'react';
import logo from '../../images/logo-white.png';
import blueShirt from '../../images/shirt-blue.png';
import redShirt from '../../images/shirt-red.png';
import facebookIcon from '../../images/facebook.png';
import googleIcon from '../../images/google.png';
import './MainContent.scss';
import * as playersActions from '../../modules/players/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MainContent extends Component { 

    state = {
        name: '',
    }
    
    onChangeName = (e) => {
        this.setState({
            name: e.target.value,
        });
        console.log(this.state.name);
    }

    render() {
        const { onClickAddPlayer, players, onClickRemovePlayer } = this.props;
        console.log(this.props);
        return (
            <span className="principal">
                <img className="principal__logo" src={logo} alt="Logo Next Team" />
                <span className="principal__message">Para crear un partido, primero ingresa con tu cuenta</span>
                <span className="principal-container">
                    <span className="principal-facebook">
                        <img className="principal-facebook__shirt" src={blueShirt} alt="" />
                        <img className="principal-facebook__icon" src={facebookIcon} alt="" />
                        <span className="principal-facebook__text">Ingresa con Facebook</span>
                    </span>
                    <span className="principal-google">
                        <img className="principal-google__shirt" src={redShirt} alt="" />
                        <img className="principal-google__icon" src={googleIcon} alt="" />
                        <span className="principal-google__text">Ingresa con Google+</span>
                    </span>
                </span>
                <input
                    name="player"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    className="principal__input"
                />
                <button onClick={() => onClickAddPlayer(this.state.name)} className="principal__button">Add player</button>
                {players.map(player => (
                    <span onClick={() => onClickRemovePlayer(player.id)} key={player.id}>{player.name}</span>
                ))}
            </span>
        )
    }
}

const mapStateToProps = ({ players }) => ({
    players
});
  
const mapDispatchToProps = dispatch => bindActionCreators({
    onClickAddPlayer: playersActions.addPlayer,
    onClickRemovePlayer: playersActions.removePlayer
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContent);