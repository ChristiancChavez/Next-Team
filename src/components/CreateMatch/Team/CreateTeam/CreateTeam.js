import React, { Component } from 'react';
<<<<<<< HEAD
import addTeamList from '../../../../images/create-team-list.png';
import deleteIcon from '../../../../images/delete-icon.png';
import editIcon from '../../../../images/edit-icon.png';
import newPlayer from '../../../../images/add-player.png';
import './CreateTeam.scss';


class CreateTeam extends Component {
    constructor(){
        super();
        this.state = ({
            jugador: "Christian",
        })
    }

    componentDidMount(){
        this.setState({
            jugador: "Camilo",
        })
    }

    shouldComponentUpdate(nextProps){
        if(this.props.FPC.FPC.liga !== nextProps.FPC.FPC.liga){
            document.getElementById('fade').style = 'background: red;';
            return true
        }
        return false;
    }

    render(){
        return (
            <span>
                <span>
                    <h1>Crea tu Equipo</h1>
                    <img scr={addTeamList} alt="adicionar lista jugadores"/>
                </span>
                <span>
                    <span>
                        <span>
                            <input  placeholder={this.props.FPC.jugadores}/>
                            <img scr={newPlayer} alt="adicionar jugador"/>
                        </span>
                        <span>
                            <span>Tu Equipo</span>
                            <span id='fade'>
                                <span>{this.state.jugador}</span>
                                <img scr={editIcon} alt="editar jugador"/>
                                <img scr={deleteIcon} alt="eliminar jugador"/>
                            </span>
                        </span>
                        <span>
                            <button>Guardar</button>
                            <button>Cancelar</button>
                        </span>
                    </span>
                </span>
                <h2>{this.props.FPC.FPC.liga}</h2>
                <h2>{this.props.FPC.FPC.copa[1]}</h2>
                <h2>{this.props.FPC.FPC.liga}</h2>
                <h2>{this.props.FPC.equipo} -- {this.props.FPC.jugadores} -- {this.props.FPC.alias}</h2>
    
            </span>
        ) 
    }
}
// const CreateTeam = (props) => {

    
// }
=======

import close from '../../../../images/delete-team.png';
import ballPlay from '../../../../images/ball-play.png';
import captain from '../../../../images/captain.png';
import check from '../../../../images/check-icon.png';

import './CreateTeam.scss';

class CreateTeam extends Component {
    constructor (){
        super();
        this.state = {
           
        }
    }

    

    
    

    render(){
        return (
            <div className="popup">  
                <span className="close">
                    <img className="close__btn" src={close} alt="cerrar popup" onClick={this.props.showCreateTeam} />
                </span>
                <span className="list">
                    {this.props.playerList()}
                </span>
                <span className="save">
                    <span className="save__text">Guardar</span>
                    <img className="save__icon" src={check} alt="aprobar este Equipo"/>
                </span> 
                {this.props.editPlayer ? <span className="edit">
                    <input className="edit__input"  type="text" placeholder="Editar Jugador" />
                    <input className="edit__input edit__input--number" type="text" placeholder="#" />
                    <span className="edit-add edit-add--middle">
                        <img className="edit-add__icon" src={ballPlay} alt="adicionar balón"/>
                        <img className="edit-add__icon" src={captain} alt="adicionar capitán"/>
                        <img className="edit-add__icon" src={check} alt="confirmar cambio"/>
                    </span> 
                </span> : ''}  
            </div>       
        )
    }
} 
>>>>>>> create the features of the Create Team option inside of CreateMatch component
export default CreateTeam;
