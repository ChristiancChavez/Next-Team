import React from 'react';
import funny from '../../../images/funny.png';
import kindGame from '../../../images/kind-game.png';
import oppositeTeam from '../../../images/opposite-team.png';
import tournament from '../../../images/tournament.png';
import training from '../../../images/training.png';
import './TertiaryConfiguration.scss';

const TertiaryConfiguration = () => (
  <section className="tertiaryConfiguration">
    <span className="tooltip">
      <img className="tooltip__image" src={kindGame} alt="Tipo de Partido" />
      <span className="tooltip__text">Tipo del partido</span>
    </span>
    <span className="container">
      <button type="submit" className="option">
        <h6 className="option__text">Torneo</h6>
        <img className="option__image" src={tournament} alt="Torneo" />
      </button>
      <button type="submit" className="option">
        <h6 className="option__text">Diversión</h6>
        <img className="option__image" src={funny} alt="Diversión" />
      </button>
      <button type="submit" className="option">
        <h6 className="option__text">Entrenamiento</h6>
        <img className="option__image" src={training} alt="Entrenamiento" />
      </button>
      <button type="submit" className="option">
        <h6 className="option__text">Desafio</h6>
        {/* <input className="option__input" placeholder="¿Que se Apuesta?" /> */}
        <img className="option__image" src={oppositeTeam} alt="Desafio" />
      </button>
    </span>
  </section>
);
export default TertiaryConfiguration;
