import React from 'react';
import ToggleSwitch from '../../switch/ToggleSwitch';
import caracterGame from '../../../images/caracter-game.png';
import confirmation from '../../../images/confirmation.png';
import './SecundaryConfiguration.scss';

const SecundaryConfiguration = () => (
  <section className="secundaryConfiguration">
    <span className="option">
      <span className="tooltip">
        <img className="tooltip__image tooltip__image--big" src={caracterGame} alt="Caracter de Partido" />
        <span className="tooltip__text">Carácter del partido</span>
      </span>
      <span className="config">
        <ToggleSwitch className="config__switch" />
        <span className="config__title">Partido Privado</span>
        <span className="config__subtitle">(Visible para el equipo)</span>
      </span>
      <span className="config">
        <ToggleSwitch className="config__switch" />
        <span className="config__title">Partido Público</span>
        <span className="config__subtitle">(Visible para NextTeam)</span>
      </span>
    </span>
    <span className="option">
      <span className="tooltip">
        <img className="tooltip__image" src={confirmation} alt="Caracter de Partido" />
        <span className="tooltip__text">Confirmación Equipo</span>
      </span>
      <span className="config">
        <ToggleSwitch className="config__switch" />
        <span className="config__title config__title--left">Recordar Partido</span>
        <span className="config__subtitle">(2 horas antes del partido)</span>
      </span>
      <span className="config">
        <ToggleSwitch className="config__switch" />
        <span className="config__title config__title--left">Confirmar Equipo</span>
        <span className="config__subtitle">(1 hora antes del partido)</span>
      </span>
    </span>
  </section>
);
export default SecundaryConfiguration;
