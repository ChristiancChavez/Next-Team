import React from 'react';
import PropTypes from 'prop-types';
import close from '../../../../images/delete-team.png';
import ballPlay from '../../../../images/ball-play.png';
import captain from '../../../../images/captain.png';
// import check from '../../../../images/check-icon.png';
import deleteIcon from '../../../../images/delete-icon.png';
import editIcon from '../../../../images/edit-icon.png';
import './CreateTeam.scss';

const CreateTeam = (props) => {
  const {
    showCreateTeam,
    editPlayer,
    handlershowPlayersField,
    playerList,
    deletePlayer,
    addBall
  } = props;

  return (
    <div className="popup">
      <button type="button" className="close" onClick={showCreateTeam}>
        <img className="close__btn" src={close} alt="cerrar popup" />
      </button>
      <span className="list">
        {playerList.length !== 0
          ? playerList.map(singlePlayer => {
            const {
              number,
              name,
              id,
              ball
            } = singlePlayer;
            return (
              <span className="list-player" key={id}>
                <span className="options">
                  <img className="options__option" src={captain} alt="capitan" />
                  <img className={`options__option ${ball ? 'options__yes' : ''}`} onClick={() => addBall(id)} src={ballPlay} alt="balón de fútbol" role="presentation" />
                </span>
                <span className="list-player__name">{name}</span>
                <span className="list-player__number">{number}</span>
                <span className="icons">
                  <button className="icons-button icons-button--end" onClick={() => editPlayer(id, number, name)} type="button">
                    <img className="icons-button__icon" src={editIcon} alt="editar jugador" />
                  </button>
                  <button className="icons-button" type="button" onClick={() => deletePlayer(id)}>
                    <img className="icons-button__icon" src={deleteIcon} alt="eliminar jugador" />
                  </button>
                </span>
              </span>
            );
          })
          : null
        }
      </span>
      <button type="button" className="save" onClick={handlershowPlayersField}>
        <span className="save__text">Guardar</span>
      </button>
      {/* {editPlayer && (
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
      } */}
    </div>
  );
};

export default CreateTeam;

CreateTeam.propTypes = {
  handlershowPlayersField: PropTypes.func.isRequired,
  showCreateTeam: PropTypes.func.isRequired,
  editPlayer: PropTypes.func.isRequired,
  playerList: PropTypes.arrayOf.isRequired,
  deletePlayer: PropTypes.func.isRequired,
  addBall: PropTypes.func.isRequired
};
