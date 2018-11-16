import React, { Component } from 'react';
import PropTypes from 'prop-types';
import teams from '../../../Library/Teams';
import TeamsList from '../../teamsList/TeamList';
import payPlayer from '../../../images/pay-player.png';
import payTeam from '../../../images/pay-team.png';
import pay from '../../../images/pay.png';
import challenger from '../../../images/challenger.png';
import playerBlack from '../../../images/player-black.png';
import teamsListIcon from '../../../images/list-team.png';
import './PpalConfiguration.scss';

class PpalConfiguration extends Component {
  state = {
    // teamName: 'Equipo Rival',
    // showTeamList: false,
    totalPrice: '',
    individualPrice: ''
  }

  // selectTeam = (team) => {
  //   const { showTeamList } = this.state;
  //   this.setState({
  //     teamName: team,
  //     showTeamList: !showTeamList,
  //   });
  // }

  // handlerShowTeamList = () => {
  //   const { showTeamList } = this.state;
  //   this.setState({
  //     showTeamList: !showTeamList,
  //   });
  // }

  showIndividualPrice = (props, e) => {
    const { numberPlayers } = this.props;
    const { totalPrice } = this.state;
    const { target: { value } } = e;
    const playerprice = `${totalPrice / numberPlayers}`;
    this.setState({
      totalPrice: value,
      individualPrice: playerprice,
    });
  }

  render() {
    const {
      toggleAddPlayer, handleOnChange, handlerShowTeamList, showTeamList, teamName, selectTeam
    } = this.props;
    const {
      totalPrice,
      individualPrice
    } = this.state;

    return (
      <section className="ppalconfiguration">
        <span className="pay">
          <span className="tooltip">
            <img className="pay__image" src={pay} alt="Dinero" />
            <span className="tooltip__text">Partido con Pago</span>
          </span>
          <span className="pay-container">
            <input
              className="pay-container__price"
              type="number"
              placeholder="Precio x Equipo"
              value={totalPrice}
              onChange={handleOnChange}
            />
            <img className="pay-container__image" src={payTeam} alt="Equipo" />
          </span>
          <span className="pay-container">
            <span className="pay-container__price" type="number" placeholder="Precio x Jugador">{individualPrice}</span>
            <img className="pay-container__image" src={payPlayer} alt="Jugador" />
          </span>
        </span>
        <span className="challenger">
          <span className="tooltip">
            <img className="challenger__image" src={challenger} alt="Equipo Rival" />
            <span className="tooltip__text tooltip__text--opposite">Equipo Rival</span>
          </span>
          <span className="challenger-main">
            <button className="challenger-main__button" type="button" onClick={toggleAddPlayer}>
              <img className="challenger-main__image" src={playerBlack} alt="Lista jugadores" />
            </button>
          </span>
          <span className="challenger-search">
            <span className="challenger-search__team" readOnly>{teamName}</span>
            {showTeamList && <TeamsList selectTeam={selectTeam} list={teams} />}
            <button type="button" className="challenger-search__button" onClick={handlerShowTeamList}>
              <img className="challenger-search__icon" src={teamsListIcon} alt="Buscar Equipo rival" />
            </button>
          </span>
        </span>
      </section>
    );
  }
}
export default PpalConfiguration;

PpalConfiguration.propTypes = {
  toggleAddPlayer: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handlerShowTeamList: PropTypes.func.isRequired,
  selectTeam: PropTypes.func.isRequired,
  showTeamList: PropTypes.bool.isRequired,
  numberPlayers: PropTypes.symbol.isRequired,
  teamName: PropTypes.symbol.isRequired,
};
