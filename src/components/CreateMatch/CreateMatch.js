import React, { Component } from 'react';
import './CreateMatch.scss';
import create from '../../images/create-icon.png';
import soccerField from '../../images/soccer-field.jpg';
import players from '../../images/player.png';
import shirts from '../../images/shirt-options.png';
import calendar from '../../images/date.png';
import field from '../../images/field-option.png';
import configure from '../../images/configure.png';
import deleteTeam from '../../images/delete-team.png';
import CreateTeam from './Team/CreateTeam/CreateTeam';

class CreateMatch extends Component {

    constructor() {
        super();
        this.state = {
            equipo: '',
            alias: '',
            jugadores: '', 
            FPC : {
               liga:  ["junior", "nacional", "pasto", "medellin"],
               copa: ["caldas", "leones", "huila"],
            }
        }
    }

    handleOnChange = e => {
        const  { target: { value, name } } = e;
        this.setState({
            [name]: value,
            FPC: {liga:["patriotas", "chico", "santafe", "aguilas"],
            copa: ["caldas", "leones", "huila"],},
        })
        
    }

    handleOnClick = () => {
        this.setState({
            equipo: "Nacional",
            alias: 'verdolaga',
            jugadores: 'paisas',
            FPC: {liga:["envigado", "cali", "america", "magdalena"],
            copa: ["union", "tigres", "rionegro"],},
        })
    }
    
 

    render () {
        return (

            <div className="match">
                <span className="match-header">
                    <span className="match-header__title">Crear Partido</span>
                    <span className="match-header__icon"><img className="match-header__icon-img" src={create} alt="crear partido" /></span>
                </span>
                <section className="match-main">
                    <span className="match-team">
                        <input onChange={this.handleOnChange} value={this.state.equipo} name="equipo"  className="match-team__input" placeholder="Nombre de tu Equipo" />
                        <input onChange={this.handleOnChange} value={this.state.alias} name="alias"  className="match-team__input" placeholder="Alias de tu  Equipo" />
                        <input onChange={this.handleOnChange} value={this.state.jugadores} name="jugadores"  className="match-team__input" placeholder="Número de Jugadores" />
                        <span className="match-team__line" > 4-3-2-1</span>
                    </span>
                    <img className="match-main__img" src={soccerField} alt="campo de juego" />
                </section>
                <section className="match-configure">
                    <img className="match-configure__btn" src={players} alt="Lista jugadores" onClick={this.handleOnClick} />
                    <img className="match-configure__btn" src={shirts} alt="Uniforme" />
                    <img className="match-configure__btn" src={field} alt="campo de juego" />
                    <img className="match-configure__btn" src={calendar} alt="fecha y lugar" />
                    <img className="match-configure__btn" src={configure} alt="configuracion" />
                    <img className="match-configure__btn" src={deleteTeam} alt="eliminar equipo" />
                </section>
                <CreateTeam FPC={this.state} />
            </div>
            
        );
    }
} 
export default CreateMatch;