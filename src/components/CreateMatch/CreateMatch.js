import React, { Component } from 'react';
import './CreateMatch.scss';
import create from '../../images/create-icon.png';
import soccerField from '../../images/soccer-field.jpg';
import player from '../../images/player.png';
import shirts from '../../images/shirt-options.png';
import calendar from '../../images/date.png';
import field from '../../images/field-option.png';
import configure from '../../images/configure.png';
import close from '../../images/delete-team.png';
import shield from '../../images/shield.png';
import Team from './Team/Team';
import CreateTeam from './Team/CreateTeam/CreateTeam';
import check from '../../images/check-icon.png';
import deleteIcon from '../../images/delete-icon.png';
import editIcon from '../../images/edit-icon.png';
import ballPlay from '../../images/ball-play.png';
import captain from '../../images/captain.png';
import Users from '../../Library/Users';

class CreateMatch extends Component { 
    constructor () {
        super();
        this.state = {
            addPlayer: false,
            createTeam: false,
            name: '',
            nickname: '',
            players: '',
            containerInput: true,
            namePlayer: '',
            numberPlayer: '',
            editPlayer: false,
        }
    }

    handleOnChange = e => {
        const { target: { value, name } } = e
        this.setState({        
            [name]: value      
        }); 
    }

    toggleAddPlayer = () => {
        this.setState({
            addPlayer: !this.state.addPlayer,
        })
    };

    showCreateTeam = () => {
        this.setState ({
            createTeam: !this.state.createTeam,
        })
    };

    hideInfoInput = () => {
        const { name, nickname, players } = this.state;
        if( !name && !nickname && !players ){
            this.setState({
                containerInput:!this.state.containerInput,
            });
        }
    };

    showPlayersList = () => {
        return Users.map((singlePLayer) => <span className="list-player" key={singlePLayer.name}>
                <span className="list-player-options">
                    <img className="list-player-options__option" src={captain} alt="capitan"/>
                    <img className="list-player-options__option" src={ballPlay} alt="capitan"/>
                </span>   
                <span className="list-player__name">{singlePLayer.name}</span>
                <span className="list-player__number">{singlePLayer.number}</span>
                <span className="list-player-icons">
                    <img className="list-player-icons__icon" src={editIcon} alt="editar jugador" onClick={this.showEditPlayer}/>
                    <img className="list-player-icons__icon" src={deleteIcon} alt="eliminar jugador" />
                </span>   
            </span>
        )
    };

    showEditPlayer = () => {
        this.setState({
            editPlayer: !this.state.editPlayer,   
        })
    };

    render() {
        const { name, containerInput, createTeam, addPlayer, nickname, players, editPlayer } = this.state;
        return (
            <div className="match">
                <span className="match-header">
                    <span className="match-header__title">
                        <span>Crear Partido</span>
                    </span>
                    <span className="match-header__icon">
                        <img className="match-header__icon-img" src={create} alt="crear partido" />
                    </span>
                </span>
                <section className="match-main">
                    {containerInput ? <span id="infoTeam" className="match-team">
                        <input className="match-team__input" type="text" placeholder="Nombre de tu Equipo" name="name" value={name} onChange={this.handleOnChange} />
                        <input className="match-team__input" type="text" placeholder="Alias de tu  Equipo" name="nickname" value={nickname}  onChange={this.handleOnChange}/>
                        <input className="match-team__input match-team__input--number" type="number" min="5" max="20" placeholder="Jugadores" name="players" value={players}  onChange={this.handleOnChange}/>
                        <span className="match-team__line"> 4-3-2-1</span>
                        <img className="match-team__check" src={check} alt="validar información" onClick={this.hideInfoInput} />
                    </span> : ''}
                    <span className="match-name">
                        <span className="match-name__name">{name}</span>
                        <img className="match-name__shield" src={shield} alt="escudo del equipo" />
                    </span>
                    <img className="match-main__img" src={soccerField} alt="campo de juego" />

                    {createTeam ? <CreateTeam 
                        showCreateTeam={this.showCreateTeam} 
                        hidecreateTeam={createTeam} 
                        playerList={this.showPlayersList} 
                        editPlayer={editPlayer}/> 
                    : ''}
                </section>
                <section className="match-configure">
                    <img className="match-configure__btn" src={player} alt="Lista jugadores" onClick={this.toggleAddPlayer} />
                    <img className="match-configure__btn" src={shirts} alt="Uniforme" />
                    <img className="match-configure__btn" src={field} alt="campo de juego" />
                    <img className="match-configure__btn" src={calendar} alt="fecha y lugar" />
                    <img className="match-configure__btn" src={configure} alt="configuracion" />
                    <img className="match-configure__btn" src={close} alt="cerrar" />
                </section>
                {addPlayer ? <Team showCreateTeam={this.showCreateTeam} createTeam={createTeam} /> : ''}
            </div>
        );
    }
}
    
export default CreateMatch;