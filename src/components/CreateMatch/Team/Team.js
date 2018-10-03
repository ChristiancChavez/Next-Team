import React from 'react';
import CreateTeam from './CreateTeam/CreateTeam';
import search from '../../../images/search-icon.png';
import './Team.scss';

const Team = () => {
    return(
        <div>
            <CreateTeam />
            <span>
                <input placeholder="Mi Equipo"></input>
                <img scr={search} alt="buscar Mi Equipo"/>
            </span>
        </div>
    )
}
export default Team;
