import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './App.scss';
import { Route } from 'react-router-dom';
import MainContent from './mainContent/MainContent';
import AboutUs from './aboutUs/AboutUs';
import Account from './account/Account';
import PasswordForgetPage from './passwordForget/PasswordForget';
import SingInPage from './signIn/SignIn';
import SignUpPage from './signUp/SignUp';
import CreateMatch from './CreateMatch/CreateMatch';
import {
  HOME, ABOUT_US, ACCOUNT, PASSWORD_FORGET, SIGN_IN, SIGN_UP, CREATE_MATCH, SESSION_USER
} from '../shared/constants/routes';
import Navigation from './navigation/Navigation';
import SessionUser from './SessionUser/SessionUser';
import { firebase } from '../config/firebase';
import soccerField from '../images/soccer-field.jpg';

// import ballplay from '../images/arrow-right.png';

class App extends Component {
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
      editPlayer: false,
      containerConfigureMatch: false,
      showPlayersField: false,
      showTeamList: false,
      authUser: null,
      name: '',
      nickname: '',
      players: '',
      namePlayerInput: '',
      numberPlayerInput: '',
      colorSelected: '',
      fieldToShow: soccerField,
      // numberPlayers: '',
      teamName: 'Equipo Rival',
      playerList: [],
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((authUser) => {
      // eslint-disable-next-line no-unused-expressions
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  handleOnChange = e => {
    const { target: { value, name } } = e;
    this.setState({
      [name]: value,
    });
  }

  createPlayerItem = (infoPlayer) => {
    const { playerList } = this.state;

    const ball = false;
    const id = uuid();
    const player = { ...infoPlayer, ball, id };

    this.setState({
      playerList: [...playerList, player],
      namePlayerInput: '',
      numberPlayerInput: '',
    });
  };

  addingBall = (id) => {
    const { playerList } = this.state;

    playerList.forEach((each, index) => {
      if (each.id === id) {
        playerList[index].ball = true;
      } else {
        playerList[index].ball = false;
      }
    });

    this.setState({
      playerList
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
      players,
      containerInput,
      containerConfigureMatch
    } = this.state;

    if (name && nickname && players) {
      this.setState({
        containerInput: !containerInput,
        containerConfigureMatch: !containerConfigureMatch,
      });
    }
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

  render() {
    const {
      authUser,
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
      players,
      editPlayer,
      containerConfigureMatch,
      showPlayersField,
      teamName,
      showTeamList,
      namePlayerInput,
      numberPlayerInput,
      playerList,
    } = this.state;

    return (
      <div>
        <Navigation authUser={authUser} />
        <main>
          <Route
            exact
            component={MainContent}
            path={HOME}
          />
          <Route
            exact
            path={ABOUT_US}
            component={AboutUs}
          />
          <Route
            exact
            path={ACCOUNT}
            component={Account}
          />
          <Route
            exact
            path={PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route
            exact
            path={SIGN_IN}
            component={SingInPage}
          />
          <Route
            exact
            path={SIGN_UP}
            component={SignUpPage}
          />
          <Route
            exact
            path={CREATE_MATCH}
            render={() => (
              <CreateMatch
                playerList={playerList}
                addPlayer={addPlayer}
                addShirt={addShirt}
                addField={addField}
                addSchedule={addSchedule}
                addConfiguration={addConfiguration}
                createTeam={createTeam}
                name={name}
                nickname={nickname}
                players={players}
                editPlayer={editPlayer}
                containerConfigureMatch={containerConfigureMatch}
                showPlayersField={showPlayersField}
                colorSelected={colorSelected}
                fieldToShow={fieldToShow}
                containerInput={containerInput}
                teamName={teamName}
                showTeamList={showTeamList}
                namePlayerInput={namePlayerInput}
                numberPlayerInput={numberPlayerInput}
                addingBall={this.addingBall}
                handleOnChange={this.handleOnChange}
                toggleAddPlayer={this.toggleAddPlayer}
                toggleChooseShirt={this.toggleChooseShirt}
                toggleChooseField={this.toggleChooseField}
                toggleSchedule={this.toggleSchedule}
                toggleConfiguration={this.toggleConfiguration}
                showCreateTeam={this.showCreateTeam}
                hideInfoInput={this.hideInfoInput}
                showPlayersList={this.showPlayersList}
                showEditPlayer={this.showEditPlayer}
                handlershowPlayersField={this.handlershowPlayersField}
                handlerChangeColorShirt={this.handlerChangeColorShirt}
                handlerFieldToShow={this.handlerFieldToShow}
                selectTeam={this.selectTeam}
                handlerShowTeamList={this.handlerShowTeamList}
                createPlayerItem={this.createPlayerItem}
                // showBall={this.showBall}
              />
            )}

          />
          <Route
            exact
            path={SESSION_USER}
            component={SessionUser}
          />
        </main>
      </div>
    );
  }
}

export default App;
