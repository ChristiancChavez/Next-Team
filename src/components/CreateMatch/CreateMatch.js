import React, { Component } from 'react';
import Team from './Team/Team';
import ChooseTshirt from '../ChooseTshirt/ChooseTshirt';
import Schedule from '../Schedule/Schedule';
import ChooseField from '../ChooseField/ChooseField';
import CreateTeam from './Team/CreateTeam/CreateTeam';
import Users from '../../Library/Users';
import Players from './Players/Players';
import create from '../../images/create-icon.png';
import soccerField from '../../images/soccer-field.jpg';
import player from '../../images/player.png';
import shirts from '../../images/shirt-options.png';
import calendar from '../../images/date.png';
import field from '../../images/field-option.png';
import configure from '../../images/configure.png';
import close from '../../images/delete-team.png';
import shield from '../../images/shield.png';
import check from '../../images/check-icon.png';
import deleteIcon from '../../images/delete-icon.png';
import editIcon from '../../images/edit-icon.png';
import ballPlay from '../../images/ball-play.png';
import captain from '../../images/captain.png';
import './CreateMatch.scss';


class CreateMatch extends Component { 

    state = {
        addPlayer: false,
        addShirt: false,
        addField: false,
        addSchedule: false,
        createTeam: false,
        name: '',
        nickname: '',
        players: '',
        containerInput: true,
        namePlayer: '',
        numberPlayer: '',
        editPlayer: false,
        containerConfigureMatch: false,
        showPlayersField: false,
        colorSelected: '',
        fieldToShow: soccerField,
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
            addShirt: false,
            addField: false,
            addSchedule: false,
        })
    };

    toggleChooseShirt = () => {
        this.setState({
            addShirt: !this.state.addShirt,
            addPlayer: false,
            addField: false,
            addSchedule: false,
        })
    };

    toggleChooseField = () => {
        this.setState({
            addField: !this.state.addField,
            addPlayer: false,
            addShirt: false,
            addSchedule: false,
        })
    };

    toggleSchedule = () => {
        this.setState({
            addSchedule: !this.state.addSchedule,
            addPlayer: false,
            addShirt: false,
            addField: false,
        })
    };

    showCreateTeam = () => {
        this.setState ({
            createTeam: !this.state.createTeam,
        })
    };

    hideInfoInput = () => {
        const { name, nickname, players, containerInput, containerConfigureMatch } = this.state;
        if( name && nickname && players ){
            this.setState({
                containerInput:!containerInput,
                containerConfigureMatch: !containerConfigureMatch,
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

    handlershowPlayersField = () => {
        const { showPlayersField, createTeam } = this.state;
        this.setState({
            showPlayersField: !showPlayersField,
            createTeam: !createTeam,
        })
    }

    handlerChangeColorShirt = (color) => {
        this.setState({
            colorSelected: color,
        })
    }

    handlerFieldToShow = (field) => {
        this.setState({
            fieldToShow: field,
        })
    }
    

    render() {
        const { name, containerInput, createTeam, addPlayer, addField, nickname, players, editPlayer, addShirt, containerConfigureMatch, 
            showPlayersField, colorSelected, fieldToShow, addSchedule } = this.state;
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
                    {containerInput && <span id="infoTeam" className="match-team">
                        <input className="match-team__input" maxLength="20" type="text" placeholder="Nombre de tu Equipo" name="name" value={name} onChange={this.handleOnChange} />
                        <input className="match-team__input" type="text" maxLength="20" placeholder="Alias de tu  Equipo" name="nickname" value={nickname}  onChange={this.handleOnChange}/>
                        <input className="match-team__input match-team__input--number" type="number" min="5" max="20" placeholder="Jugadores" name="players" value={players}  onChange={this.handleOnChange}/>
                        <span className="match-team__line"> 4-3-2-1</span>
                        <img className="match-team__check" src={check} alt="validar información" onClick={this.hideInfoInput} />
                    </span>}
                    <span className="match-name">
                        <span className="match-name__name">{name}</span>
                        <img className="match-name__shield" src={shield} alt="escudo del equipo" />
                    </span>
                    <img className="match-main__img" src={fieldToShow} alt="campo de juego" />
                    {showPlayersField && <Players colorSelected={colorSelected} /> }
                    {createTeam && <CreateTeam 
                        handlershowPlayersField={this.handlershowPlayersField}
                        showCreateTeam={this.showCreateTeam} 
                        hidecreateTeam={createTeam} 
                        playerList={this.showPlayersList} 
                        editPlayer={editPlayer}/> 
                    }
                </section>
                <section className="match-configure">
                    {containerConfigureMatch && 
                    <span className="match-option" >
                        <img className="match-option__btn" src={player} alt="Lista jugadores" onClick={this.toggleAddPlayer} />
                        <img className="match-option__btn" src={shirts} alt="Uniforme" onClick={this.toggleChooseShirt} />
                        <img className="match-option__btn" src={field} alt="campo de juego" onClick={this.toggleChooseField} />
                        <img className="match-option__btn" src={calendar} alt="fecha y lugar" onClick={this.toggleSchedule} />
                        <img className="match-option__btn" src={configure} alt="configuracion"/>
                        <img className="match-option__btn" src={check} alt="confirmar" /> 
                    </span>}
                    <span className="match-close" >
                        <img className="match-close__btn" src={close} alt="cerrar" />
                    </span>
                </section>
                {addPlayer && <Team showCreateTeam={this.showCreateTeam} createTeam={createTeam} />}
                {addShirt && <ChooseTshirt handlerChangeColorShirt={this.handlerChangeColorShirt}/>}
                {addField && <ChooseField handlerFieldToShow={this.handlerFieldToShow}/>}
                {addSchedule && <Schedule />}
            </div>
        );
    }
}
    
export default CreateMatch;