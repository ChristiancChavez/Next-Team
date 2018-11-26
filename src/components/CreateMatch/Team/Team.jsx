import React from 'react';
import PropTypes from 'prop-types';
import TeamsList from '../../teamsList/TeamList';
import teams from '../../../Library/Teams';
import addTeamList from '../../../images/create-team-list.png';
import newPlayer from '../../../images/add-player.png';
import ballPlay from '../../../images/ball-play.png';
import captain from '../../../images/captain.png';
import teamsListIcon from '../../../images/team-list.png';
import './Team.scss';


const Team = (props) => {
  const {
    createTeam,
    showCreateTeam,
    teamName,
    showTeamList,
    selectTeam,
    handlerShowTeamList,
    handleOnChange,
    namePlayerInput,
    numberPlayerInput,
    createPlayerItem,
    addingBall
  } = props;
  return (
    <div className="team">
      {createTeam && (
        <span className="info">
          <input
            className="info__input"
            type="text"
            placeholder="Nuevo Jugador"
            name="namePlayerInput"
            value={namePlayerInput}
            onChange={handleOnChange}
          />
          <input
            className="info__input info__input--number"
            type="text"
            placeholder="#"
            name="numberPlayerInput"
            value={numberPlayerInput}
            onChange={handleOnChange}
          />
          <span className="add">
            <button
              className="add-button"
              type="button"
              onClick={() => createPlayerItem({ namePlayerInput, numberPlayerInput })}
            >
              <img className="add-button__icon" src={newPlayer} alt="adicionar jugador" />
            </button>
            <button className="add-button" type="button">
              <img className="add-button__icon" src={captain} alt="adicionar capitán" />
            </button>
            <button className="add-button" type="button" onClick={addingBall}>
              <img className="add-button__icon" src={ballPlay} alt="adicionar balón" />
            </button>
          </span>
        </span>
      )
      }
      <span className="option">
        <h1 className="option__title">Crea tu Equipo</h1>
        <button className="option-button" type="button" onClick={showCreateTeam}>
          <img className="option-button__icon" src={addTeamList} alt="adicionar lista jugadores" />
        </button>
      </span>
      <span className="option">
        <h1 className="option__title option__title--big">Busca tu Equipo</h1>
        <button type="button" className="option-button" onClick={handlerShowTeamList}>
          <img className="option-button__icon option-button__icon--big" src={teamsListIcon} alt="Buscar Equipo rival" />
        </button>
        <span className="option__team" readOnly>{teamName}</span>
        {showTeamList && <TeamsList selectTeam={selectTeam} list={teams} />}
      </span>
    </div>
  );
};

export default Team;

Team.propTypes = {
  addingBall: PropTypes.func.isRequired,
  createPlayerItem: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  selectTeam: PropTypes.func.isRequired,
  handlerShowTeamList: PropTypes.func.isRequired,
  showCreateTeam: PropTypes.func.isRequired,
  showTeamList: PropTypes.bool.isRequired,
  createTeam: PropTypes.bool.isRequired,
  teamName: PropTypes.symbol.isRequired,
  numberPlayerInput: PropTypes.symbol.isRequired,
  namePlayerInput: PropTypes.string.isRequired,
};
