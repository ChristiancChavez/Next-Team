import React from 'react';
import PropTypes from 'prop-types';
import check from '../../../images/check-icon.png';

const InputTeam = (props) => {
  const {
    onChange,
    name,
    nickname,
    players,
    hideInfoInput
  } = props;

  return (
    <span id="infoTeam" className="match-team">
      <input
        className="match-team__input"
        maxLength="20"
        type="text"
        placeholder="Nombre de tu Equipo"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className="match-team__input"
        type="text"
        maxLength="20"
        placeholder="Alias de tu  Equipo"
        name="nickname"
        value={nickname}
        onChange={onChange}
      />
      <input
        className="match-team__input match-team__input--number"
        type="number"
        min="5"
        max="20"
        placeholder="Jugadores"
        name="numberPlayers"
        value={players}
        onChange={onChange}
      />
      <span className="match-team__line"> 4-3-2-1</span>
      <button className="match-team-button" type="button" onClick={hideInfoInput}>
        <img className="match-team-button__check" src={check} alt="validar información" />
      </button>
    </span>
  );
};

InputTeam.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  players: PropTypes.string.isRequired,
  hideInfoInput: PropTypes.func.isRequired
};

export default InputTeam;
