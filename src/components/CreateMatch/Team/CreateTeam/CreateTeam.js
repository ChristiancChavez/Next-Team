import React, { Component } from 'react';
import close from '../../../../images/delete-team.png';
import ballPlay from '../../../../images/ball-play.png';
import captain from '../../../../images/captain.png';
import check from '../../../../images/check-icon.png';
import './CreateTeam.scss';

class CreateTeam extends Component {

    render(){
        const { showCreateTeam, playerList, editPlayer, handlershowPlayersField } = this.props;
        return (
            <div className="popup">  
                <span className="close">
                    <img className="close__btn" src={close} alt="cerrar popup" onClick={showCreateTeam} />
                </span>
                <span className="list">
                    {playerList()}
                </span>
                <span className="save" onClick={handlershowPlayersField}>
                    <span className="save__text">Guardar</span>
                    <img className="save__icon" src={check} alt="aprobar este Equipo"/>
                </span> 
                {editPlayer && <span className="edit">
                    <input className="edit__input"  type="text" placeholder="Editar Jugador" />
                    <input className="edit__input edit__input--number" type="text" placeholder="#" />
                    <span className="edit-add edit-add--middle">
                        <img className="edit-add__icon" src={ballPlay} alt="adicionar balón"/>
                        <img className="edit-add__icon" src={captain} alt="adicionar capitán"/>
                        <img className="edit-add__icon" src={check} alt="confirmar cambio"/>
                    </span> 
                </span>}  
            </div>       
        )
    }
} 
export default CreateTeam;
