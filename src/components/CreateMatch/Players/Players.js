import React,  { Component } from 'react';
import profilePlayer from '../../../images/perfil.jpg';
import './Players.scss';

class Players extends Component {
    render(){
        const { colorSelected } = this.props;
        return(
            <span className="players">
                <span className="position">
                    <span className="position-player">
                        <img className="position-player__photo" src={profilePlayer} style={{background:colorSelected}} alt="escudo del equipo" />
                        <span className="position-player__info">Delantero</span>
                        <span className="position-player__info">9</span>
                    </span>
                    <span className="position-player">
                        <img className="position-player__photo" src={profilePlayer} style={{background:colorSelected}} alt="escudo del equipo" />
                        <span className="position-player__info">Delantero</span>
                        <span className="position-player__info">11</span>
                    </span>
                </span>
                <span className="position">
                    <span className="position-player">
                        <img className="position-player__photo" src={profilePlayer} style={{background:colorSelected}} alt="escudo del equipo" />
                        <span className="position-player__info">Mediocampista</span>
                        <span className="position-player__info">6</span>
                    </span>
                    <span className="position-player">
                        <img className="position-player__photo" src={profilePlayer} style={{background:colorSelected}} alt="escudo del equipo" />
                        <span className="position-player__info">Mediocampista</span>
                        <span className="position-player__info">7</span>
                    </span>
                    <span className="position-player">
                        <img className="position-player__photo" src={profilePlayer} style={{background:colorSelected}} alt="escudo del equipo" />
                        <span className="position-player__info">Mediocampista</span>
                        <span className="position-player__info">8</span>
                    </span>
                    <span className="position-player">
                        <img className="position-player__photo" src={profilePlayer} style={{background:colorSelected}} alt="escudo del equipo" />
                        <span className="position-player__info">Mediocampista</span>
                        <span className="position-player__info">10</span>
                    </span>
                </span>
                <span className="position">
                    <span className="position-player">
                        <img className="position-player__photo" src={profilePlayer} style={{background:colorSelected}} alt="escudo del equipo" />
                        <span className="position-player__info">Defensa</span>
                        <span className="position-player__info">3</span>
                    </span>
                    <span className="position-player">
                        <img className="position-player__photo" src={profilePlayer} style={{background:colorSelected}} alt="escudo del equipo" />
                        <span className="position-player__info">Defensa</span>
                        <span className="position-player__info">4</span>
                    </span>
                    <span className="position-player">
                        <img className="position-player__photo" src={profilePlayer} style={{background:colorSelected}} alt="escudo del equipo" />
                        <span className="position-player__info">Defensa</span>
                        <span className="position-player__info">5</span>
                    </span>
                    <span className="position-player">
                        <img className="position-player__photo" src={profilePlayer} style={{background:colorSelected}} alt="escudo del equipo" />
                        <span className="position-player__info">Defensa</span>
                        <span className="position-player__info">2</span>
                    </span>
                </span>
                <span className="position">
                    <span className="position-player">
                        <img className="position-player__photo" src={profilePlayer} style={{background:colorSelected}} alt="escudo del equipo" />
                        <span className="position-player__info">Arquero</span>
                        <span className="position-player__info">1</span>
                    </span>
                </span>
            </span>
        )
    }
}
export default Players;
