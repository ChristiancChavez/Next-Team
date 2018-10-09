import React, { Component } from 'react';
import search from '../../../images/search-icon.png';
<<<<<<< HEAD
=======
import addTeamList from '../../../images/create-team-list.png';
import check from '../../../images/check-icon.png';
import newPlayer from '../../../images/add-player.png';
import ballPlay from '../../../images/ball-play.png';
import captain from '../../../images/captain.png';
import './Team.scss';
>>>>>>> create the features of the Create Team option inside of CreateMatch component


class Team extends Component {

    render() {
        return(
            <div className="team">
                {this.props.createTeam ? <span className="info">
                    <input className="info__input"  type="text" placeholder="Nuevo Jugador" name="player" />
                    <input className="info__input info__input--number" type="text" placeholder="#" name="number" />
                    <span className="info-add">
                        <img className="info-add__icon" src={newPlayer} alt="adicionar jugador"/>
                        <img className="info-add__icon " src={captain} alt="adicionar capitán"/>
                        <img className="info-add__icon" src={ballPlay} alt="adicionar balón"/>
                    </span> 
                </span> : ''}
                <span className="team-option">
                    <h1 className="team-option__title">Crea tu Equipo</h1>
                    <img className="team-option__icon" src={addTeamList} alt="adicionar lista jugadores" onClick={this.props.showCreateTeam}/>
                </span>
                <span className="team-option">
                    <input className="team-option__input" placeholder="Mi Equipo" />
                    <img className="team-option__icon" src={search} alt="buscar Mi Equipo"/>
                    <span className="team-filter">
                        <span className="team-filter__title">Nacional</span>
                        <img className="team-filter__check" src={check} alt="aprobar este Equipo"/>
                    </span>
                </span>
            </div>
        )
    }
}

export default Team;
