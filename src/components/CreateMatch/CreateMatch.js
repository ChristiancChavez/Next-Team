import React from 'react';
import './CreateMatch.scss';
import create from '../../images/create-icon.png';
import soccerField from '../../images/soccer-field.jpg';
import players from '../../images/player.png';
import shirts from '../../images/shirt-options.png';
import calendar from '../../images/date.png';
import field from '../../images/field-option.png';
import configure from '../../images/configure.png';
import deleteTeam from '../../images/delete-team.png';

const CreateMatch = () => {
    return (
        <div className="match">
            <span className="match-header">
                <span className="match-header__title">Crear Partido</span>
                <span className="match-header__icon"><img className="match-header__icon-img" src={create} alt="crear partido" /></span>
            </span>
            <section className="match-main">
                <span className="match-team">
                    <input className="match-team__input" placeholder="Nombre de tu Equipo"></input>
                    <input className="match-team__input" placeholder="Alias de tu  Equipo"></input>
                    <input className="match-team__input" placeholder="Número de Jugadores"></input>
                    <span className="match-team__line" > 4-3-2-1</span>
                </span>
                <img className="match-main__img" src={soccerField} alt="campo de juego" />
            </section>
            <section className="match-configure">
                <img className="match-configure__btn" src={players} alt="Lista jugadores" />
                <img className="match-configure__btn" src={shirts} alt="Uniforme" />
                <img className="match-configure__btn" src={field} alt="campo de juego" />
                <img className="match-configure__btn" src={calendar} alt="fecha y lugar" />
                <img className="match-configure__btn" src={configure} alt="configuracion" />
                <img className="match-configure__btn" src={deleteTeam} alt="eliminar equipo" />
            </section>
        </div>
    );
};

export default CreateMatch;