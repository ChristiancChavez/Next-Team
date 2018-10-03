import React from 'react';
import addTeamList from '../../../../images/create-team-list.png';
import deleteIcon from '../../../../images/delete-icon.png';
import editIcon from '../../../../images/edit-icon.png';
import newPlayer from '../../../../images/add-player.png';
import './Team.scss';

const CreateTeam = () => {
    return (
        <span>
            <span>
                <h1>Crea tu Equipo</h1>
                <img scr={addTeamList} alt="adicionar lista jugadores"/>
            </span>
            <span>
                <span>
                    <span>
                        <input placeholder="Nuevo Jugador"></input>
                        <img scr={newPlayer} alt="adicionar jugador"/>
                    </span>
                    <span>
                        <span>Tu Equipo</span>
                        <span>
                            <span>Andres</span>
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
        </span>
    )
}
export default CreateTeam;
