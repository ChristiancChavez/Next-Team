import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Team from './Team/Team';
import ChooseTshirt from '../ChooseTshirt/ChooseTshirt';
import Schedule from '../Schedule/Schedule';
import ChooseField from '../ChooseField/ChooseField';
import CreateTeam from './Team/CreateTeam/CreateTeam';
import Players from './Players/Players';
import MatchConfiguration from '../matchConfiguration/MatchConfiguration';
import create from '../../images/create-icon.png';
import playerImg from '../../images/player.png';
import shirts from '../../images/shirt-options.png';
import calendar from '../../images/date.png';
import fieldOption from '../../images/field-option.png';
import configure from '../../images/configure.png';
import close from '../../images/delete-team.png';
import shield from '../../images/shield.png';
import check from '../../images/check-icon.png';
import './CreateMatch.scss';
import soccerField from '../../images/soccer-field.jpg';
import InputTeam from './Team/InputTeam';


class CreateMatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addPlayer: false,
      addShirt: false,
      addField: false,
      addSchedule: false,
      addConfiguration: false,
      createTeam: false,
      containerInput: true,
      containerConfigureMatch: false,
      showPlayersField: false,
      showTeamList: false,
      ball: false,
      name: '',
      nickname: '',
      namePlayerInput: '',
      numberPlayerInput: '',
      colorSelected: '',
      fieldToShow: soccerField,
      numberPlayers: '',
      teamName: 'Equipo Rival',
      disabled: false,
      editId: ''
    };
  }

  handleOnChange = e => {
    const { target: { value, name } } = e;
    this.setState({
      [name]: value,
    });
  }

  createPlayerItem = () => {
    const { namePlayerInput, numberPlayerInput } = this.state;
    const { addPlayer } = this.props;

    addPlayer({ name: namePlayerInput, number: numberPlayerInput });

    this.setState({
      namePlayerInput: '',
      numberPlayerInput: '',
    });
  };

  addingBall = () => {
    const { ball } = this.state;
    this.setState({
      ball: !ball,
    });
  };

  // showBall = () => React.createElement('span', null, React.createElement('img', { className: 'options__option', src: ballplay }));

  toggleAddPlayer = () => {
    const { addPlayer } = this.state;
    this.setState({
      addPlayer: !addPlayer,
      addShirt: false,
      addField: false,
      addSchedule: false,
      addConfiguration: false,
    });
  };

  toggleChooseShirt = () => {
    const { addShirt } = this.state;
    this.setState({
      addShirt: !addShirt,
      addPlayer: false,
      addField: false,
      addSchedule: false,
      addConfiguration: false,
    });
  };

  toggleChooseField = () => {
    const { addField } = this.state;
    this.setState({
      addField: !addField,
      addPlayer: false,
      addShirt: false,
      addSchedule: false,
      addConfiguration: false,
    });
  };

  toggleSchedule = () => {
    const { addSchedule } = this.state;

    this.setState({
      addSchedule: !addSchedule,
      addPlayer: false,
      addShirt: false,
      addField: false,
      addConfiguration: false,
    });
  };

  toggleConfiguration = () => {
    const { addConfiguration } = this.state;

    this.setState({
      addConfiguration: !addConfiguration,
      addPlayer: false,
      addShirt: false,
      addField: false,
      addSchedule: false,
    });
  };

  showCreateTeam = () => {
    const { createTeam } = this.state;
    this.setState({
      createTeam: !createTeam,
    });
  };

  hideInfoInput = () => {
    const {
      name,
      nickname,
      numberPlayers,
      containerInput,
      containerConfigureMatch
    } = this.state;

    const { addTeam } = this.props;

    if (name && nickname && numberPlayers) {
      this.setState({
        containerInput: !containerInput,
        containerConfigureMatch: !containerConfigureMatch,
      });
    }

    addTeam(name, nickname, numberPlayers);
  };

  showEditPlayer = () => {
    const { editPlayer } = this.state;
    this.setState({
      editPlayer: !editPlayer,
    });
  };

  handlershowPlayersField = () => {
    const { showPlayersField, createTeam } = this.state;
    this.setState({
      showPlayersField: !showPlayersField,
      createTeam: !createTeam,
    });
  }

  handlerChangeColorShirt = (color) => {
    this.setState({
      colorSelected: color,
    });
  }

  handlerFieldToShow = (field) => {
    this.setState({
      fieldToShow: field,
    });
  }

  selectTeam = (team) => {
    const { showTeamList } = this.state;
    this.setState({
      teamName: team,
      showTeamList: !showTeamList,
    });
  }

  handlerShowTeamList = () => {
    const { showTeamList } = this.state;
    this.setState({
      showTeamList: !showTeamList,
    });
  }

  onFocus = () => {
    const { namePlayerInput, numberPlayerInput } = this.state;

    if (!namePlayerInput || !numberPlayerInput || Number.isNaN(Number(numberPlayerInput))) {
      this.setState({
        disabled: true
      });
    } else if (namePlayerInput && numberPlayerInput) {
      this.setState({
        disabled: false
      });
    }
  }

  editPlayer = (id, number, name) => {
    this.setState({
      numberPlayerInput: number,
      namePlayerInput: name,
      editId: id
    });
  }

  handleUpdatePlayer = () => {
    const { namePlayerInput, numberPlayerInput, editId } = this.state;
    const { updatePlayer } = this.props;

    if (namePlayerInput && numberPlayerInput) {
      updatePlayer(
        namePlayerInput,
        numberPlayerInput,
        editId
      );
    }

    this.setState({
      namePlayerInput: '',
      numberPlayerInput: '',
      editId: ''
    });
  };

  render() {
    const {
      colorSelected,
      fieldToShow,
      containerInput,
      addPlayer,
      addShirt,
      addField,
      addSchedule,
      addConfiguration,
      createTeam,
      name,
      nickname,
      numberPlayers,
      containerConfigureMatch,
      showPlayersField,
      teamName,
      showTeamList,
      namePlayerInput,
      numberPlayerInput,
      ball,
      disabled,
      editId
    } = this.state;

    const { players, deletePlayer } = this.props;

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
          {containerInput
            && (
              <InputTeam
                onChange={this.handleOnChange}
                name={name}
                nickname={nickname}
                players={numberPlayers}
                hideInfoInput={this.hideInfoInput}
              />
            )
          }
          <span className="match-name">
            <span className="match-name__name">{name}</span>
            <img className="match-name__shield" src={shield} alt="escudo del equipo" />
          </span>
          <img className="match-main__img" src={fieldToShow} alt="campo de juego" />
          {showPlayersField && <Players colorSelected={colorSelected} /> }
          {createTeam && (<CreateTeam
            handlershowPlayersField={this.handlershowPlayersField}
            showCreateTeam={this.showCreateTeam}
            hidecreateTeam={createTeam}
            showPlayersList={this.showPlayersList}
            editPlayer={this.editPlayer}
            namePlayerInput={namePlayerInput}
            numberPlayerInput={numberPlayerInput}
            playerList={players}
            ball={ball}
            deletePlayer={deletePlayer}
          />
          )}
        </section>
        <section className="match-configure">
          {containerConfigureMatch && (
            <span className="match-option">
              <button className="match-option__button" type="button" onClick={this.toggleAddPlayer}>
                <img className="match-option__image" src={playerImg} alt="Lista jugadores" />
              </button>
              <button className="match-option__button" type="button" onClick={this.toggleChooseShirt}>
                <img className="match-option__image" src={shirts} alt="Uniforme" />
              </button>
              <button className="match-option__button" type="button" onClick={this.toggleChooseField}>
                <img className="match-option__image" src={fieldOption} alt="campo de juego" />
              </button>
              <button className="match-option__button" type="button" onClick={this.toggleSchedule}>
                <img className="match-option__image" src={calendar} alt="fecha y lugar" />
              </button>
              <button className="match-option__button" type="button" onClick={this.toggleConfiguration}>
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
            selectTeam={this.selectTeam}
            handlerShowTeamList={this.handlerShowTeamList}
            showTeamList={showTeamList}
            teamName={teamName}
            showCreateTeam={this.showCreateTeam}
            createTeam={createTeam}
            handleOnChange={this.handleOnChange}
            createPlayerItem={this.createPlayerItem}
            addingBall={this.addingBall}
            onFocus={this.onFocus}
            disabled={disabled}
            namePlayerInput={namePlayerInput}
            numberPlayerInput={numberPlayerInput}
            editId={editId}
            updatePlayer={this.handleUpdatePlayer}
          />
        )}
        {addShirt && <ChooseTshirt handlerChangeColorShirt={this.handlerChangeColorShirt} />}
        {addField && <ChooseField handlerFieldToShow={this.handlerFieldToShow} />}
        {addSchedule && <Schedule />}
        {addConfiguration && (
        <MatchConfiguration
          handleOnChange={this.handleOnChange}
          numberPlayers={this.numberPlayers}
          toggleAddPlayer={this.toggleAddPlayer}
          selectTeam={this.selectTeam}
          handlerShowTeamList={this.handlerShowTeamList}
          showTeamList={showTeamList}
          teamName={teamName}
        />
        )}
      </div>
    );
  }
}

CreateMatch.propTypes = {
  addTeam: PropTypes.func,
  addPlayer: PropTypes.func,
  players: PropTypes.shape([]),
  deletePlayer: PropTypes.func.isRequired,
  updatePlayer: PropTypes.func.isRequired
};

export default CreateMatch;
