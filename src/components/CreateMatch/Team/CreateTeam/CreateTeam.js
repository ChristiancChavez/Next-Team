import React, { Component } from 'react';
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
export default CreateTeam;
