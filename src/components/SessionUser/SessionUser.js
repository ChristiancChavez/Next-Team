import React from 'react';
import create from '../../images/create-icon.png';
import team from '../../images/team-icon.png';
import search from '../../images/search-icon.png';
import games from '../../images/games-icon.png';
import invitation from '../../images/invitation-icon.png';
import news from '../../images/news-icon.png';
import user from '../../images/user-icon.png';
import logo from '../../images/logo-white.png';
import next from '../../images/nexts-icon.png';
import './SessionUser.scss';


const Session = () => {
    return (
        <div className="session">
            <h1 className="session__title">Menu</h1>
            <span className="board">
                <section className="options">
                    <span className="option">
                        <span className="option__title">Crear Partido</span>
                        <img className="option__img" src={create} alt="crea partido" />
                    </span>
                    <span className="option">
                        <span className="option__title">Mi Equipo</span>
                        <img  className="option__img" src={team} alt="tu equipo" />
                    </span>
                    <span className="option">
                        <span className="option__title">Buscar Partidos</span>
                        <img className="option__img" src={search} alt="busca partidos" />
                    </span>
                    <span className="option">
                        <span className="option__title">Partidos Pasados</span>
                        <img className="option__img" src={games} alt="partidos pasados" />
                    </span>
                    <span className="option">
                        <span className="option__title">Invitaciones</span>
                        <img className="option__img" src={invitation} alt="partidos pasados" />
                    </span>
                    <span className="option">
                        <span className="option__title">Proximos Partidos</span>
                        <img className="option__img" src={next} alt="partidos pasados" />
                    </span>
                </section>
            </span>
            <span className="session__profile">
                <img className="session__profile-news" src={news} alt="noticias" />
                <img className="session__profile-logo" src={logo} alt="Next Team" />
                <img className="session__profile-user" src={user} alt="usuario" />
            </span>
        </div>
    );
};

export default Session;