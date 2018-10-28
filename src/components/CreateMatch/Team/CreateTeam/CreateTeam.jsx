import React from 'react';
import PropTypes from 'prop-types';
import close from '../../../../images/delete-team.png';
import ballPlay from '../../../../images/ball-play.png';
import captain from '../../../../images/captain.png';
import check from '../../../../images/check-icon.png';
import './CreateTeam.scss';

const CreateTeam = (props) => {
  const {
    showCreateTeam,
    playerList,
    editPlayer,
    handlershowPlayersField,
  } = props;

  return (
    <div className="popup">
      <button type="button" className="close" onClick={showCreateTeam}>
        <img className="close__btn" src={close} alt="cerrar popup" />
      </button>
      <span className="list">
        {playerList()}
      </span>
      <button type="button" className="save" onClick={handlershowPlayersField}>
        <span className="save__text">Guardar</span>
        <img className="save__icon" src={check} alt="aprobar este Equipo" />
      </button>
      {editPlayer && (
        <span className="edit">
          <input className="edit__input" type="text" placeholder="Editar Jugador" />
          <input className="edit__input edit__input--number" type="text" placeholder="#" />
          <span className="edit-add edit-add--middle">
            <img className="edit-add__icon" src={ballPlay} alt="adicionar balón" />
            <img className="edit-add__icon" src={captain} alt="adicionar capitán" />
            <img className="edit-add__icon" src={check} alt="confirmar cambio" />
          </span>
        </span>
      )
      }
    </div>
  );
};

export default CreateTeam;

CreateTeam.propTypes = {
  showCreateTeam: PropTypes.func.isRequired,
  playerList: PropTypes.func.isRequired,
  editPlayer: PropTypes.bool.isRequired,
  handlershowPlayersField: PropTypes.func.isRequired,
};
