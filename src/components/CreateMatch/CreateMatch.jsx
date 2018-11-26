import React from 'react';
import PropTypes from 'prop-types';
import Team from './Team/Team';
import ChooseTshirt from '../ChooseTshirt/ChooseTshirt';
import Schedule from '../Schedule/Schedule';
import ChooseField from '../ChooseField/ChooseField';
import CreateTeam from './Team/CreateTeam/CreateTeam';
import Players from './Players/Players';
import MatchConfiguration from '../matchConfiguration/MatchConfiguration';
import create from '../../images/create-icon.png';
import player from '../../images/player.png';
import shirts from '../../images/shirt-options.png';
import calendar from '../../images/date.png';
import fieldOption from '../../images/field-option.png';
import configure from '../../images/configure.png';
import close from '../../images/delete-team.png';
import shield from '../../images/shield.png';
import check from '../../images/check-icon.png';
import './CreateMatch.scss';


const CreateMatch = (props) => {
  const {
    name,
    addingBall,
    containerInput,
    createTeam,
    addPlayer,
    addField,
    nickname,
    players,
    editPlayer,
    addShirt,
    containerConfigureMatch,
    showPlayersField,
    colorSelected,
    fieldToShow,
    addSchedule,
    addConfiguration,
    numberPlayers,
    showTeamList,
    teamName,
    toggleAddPlayer,
    handleOnChange,
    toggleChooseShirt,
    toggleChooseField,
    toggleSchedule,
    toggleConfiguration,
    showCreateTeam,
    hideInfoInput,
    showPlayersList,
    showEditPlayer,
    handlershowPlayersField,
    handlerChangeColorShirt,
    handlerFieldToShow,
    selectTeam,
    handlerShowTeamList,
    namePlayerInput,
    numberPlayerInput,
    createPlayerItem,
    playerList,
    ball,
    // showBall
  } = props;

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
        {containerInput && (
        <span id="infoTeam" className="match-team">
          <input
            className="match-team__input"
            maxLength="20"
            type="text"
            placeholder="Nombre de tu Equipo"
            name="name"
            value={name}
            onChange={handleOnChange}
          />
          <input
            className="match-team__input"
            type="text"
            maxLength="20"
            placeholder="Alias de tu  Equipo"
            name="nickname"
            value={nickname}
            onChange={handleOnChange}
          />
          <input
            className="match-team__input match-team__input--number"
            type="number"
            min="5"
            max="20"
            placeholder="Jugadores"
            name="players"
            value={players}
            onChange={handleOnChange}
          />
          <span className="match-team__line"> 4-3-2-1</span>
          <button className="match-team-button" type="button" onClick={hideInfoInput}>
            <img className="match-team-button__check" src={check} alt="validar información" />
          </button>
        </span>)}
        <span className="match-name">
          <span className="match-name__name">{name}</span>
          <img className="match-name__shield" src={shield} alt="escudo del equipo" />
        </span>
        <img className="match-main__img" src={fieldToShow} alt="campo de juego" />
        {showPlayersField && <Players colorSelected={colorSelected} /> }
        {createTeam && (<CreateTeam
          handlershowPlayersField={handlershowPlayersField}
          showCreateTeam={showCreateTeam}
          hidecreateTeam={createTeam}
          showPlayersList={showPlayersList}
          editPlayer={editPlayer}
          showEditPlayer={showEditPlayer}
          namePlayerInput={namePlayerInput}
          numberPlayerInput={numberPlayerInput}
          playerList={playerList}
          ball={ball}
        />
        )}
      </section>
      <section className="match-configure">
        {containerConfigureMatch && (
          <span className="match-option">
            <button className="match-option__button" type="button" onClick={toggleAddPlayer}>
              <img className="match-option__image" src={player} alt="Lista jugadores" />
            </button>
            <button className="match-option__button" type="button" onClick={toggleChooseShirt}>
              <img className="match-option__image" src={shirts} alt="Uniforme" />
            </button>
            <button className="match-option__button" type="button" onClick={toggleChooseField}>
              <img className="match-option__image" src={fieldOption} alt="campo de juego" />
            </button>
            <button className="match-option__button" type="button" onClick={toggleSchedule}>
              <img className="match-option__image" src={calendar} alt="fecha y lugar" />
            </button>
            <button className="match-option__button" type="button" onClick={toggleConfiguration}>
              <img className="match-option__image" src={configure} alt="configuracion" />
            </button>
            <button className="match-option__button" type="button">
              <img className="match-option__image" src={check} alt="confirmar" />
            </button>
          </span>
        )}
        <span className="match-close" role="button">
          <img className="match-close__btn" src={close} alt="cerrar" />
        </span>
      </section>
      {addPlayer && (
        <Team
          selectTeam={selectTeam}
          handlerShowTeamList={handlerShowTeamList}
          showTeamList={showTeamList}
          teamName={teamName}
          showCreateTeam={showCreateTeam}
          createTeam={createTeam}
          handleOnChange={handleOnChange}
          createPlayerItem={createPlayerItem}
          namePlayerInput={namePlayerInput}
          numberPlayerInput={numberPlayerInput}
          addingBall={addingBall}
        />
      )}
      {addShirt && <ChooseTshirt handlerChangeColorShirt={handlerChangeColorShirt} />}
      {addField && <ChooseField handlerFieldToShow={handlerFieldToShow} />}
      {addSchedule && <Schedule />}
      {addConfiguration && (
      <MatchConfiguration
        handleOnChange={handleOnChange}
        numberPlayers={numberPlayers}
        toggleAddPlayer={toggleAddPlayer}
        selectTeam={selectTeam}
        handlerShowTeamList={handlerShowTeamList}
        showTeamList={showTeamList}
        teamName={teamName}
      />
      )}
    </div>
  );
};

CreateMatch.propTypes = {
  toggleAddPlayer: PropTypes.func.isRequired,
  addingBall: PropTypes.func.isRequired,
  createPlayerItem: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  toggleChooseShirt: PropTypes.func.isRequired,
  toggleChooseField: PropTypes.func.isRequired,
  toggleSchedule: PropTypes.func.isRequired,
  toggleConfiguration: PropTypes.func.isRequired,
  showCreateTeam: PropTypes.func.isRequired,
  hideInfoInput: PropTypes.func.isRequired,
  showPlayersList: PropTypes.func.isRequired,
  showEditPlayer: PropTypes.func.isRequired,
  handlershowPlayersField: PropTypes.func.isRequired,
  handlerChangeColorShirt: PropTypes.func.isRequired,
  handlerFieldToShow: PropTypes.func.isRequired,
  selectTeam: PropTypes.func.isRequired,
  handlerShowTeamList: PropTypes.func.isRequired,
  editPlayer: PropTypes.bool.isRequired,
  addShirt: PropTypes.bool.isRequired,
  containerConfigureMatch: PropTypes.bool.isRequired,
  showPlayersField: PropTypes.bool.isRequired,
  containerInput: PropTypes.bool.isRequired,
  createTeam: PropTypes.bool.isRequired,
  addPlayer: PropTypes.bool.isRequired,
  addField: PropTypes.bool.isRequired,
  fieldToShow: PropTypes.bool.isRequired,
  addSchedule: PropTypes.bool.isRequired,
  addConfiguration: PropTypes.bool.isRequired,
  numberPlayers: PropTypes.bool.isRequired,
  showTeamList: PropTypes.bool.isRequired,
  ball: PropTypes.bool.isRequired,
  name: PropTypes.symbol.isRequired,
  playerList: PropTypes.arrayOf.isRequired,
  nickname: PropTypes.symbol.isRequired,
  players: PropTypes.symbol.isRequired,
  colorSelected: PropTypes.symbol.isRequired,
  teamName: PropTypes.symbol.isRequired,
  namePlayerInput: PropTypes.string.isRequired,
  numberPlayerInput: PropTypes.symbol.isRequired,
};
export default CreateMatch;
