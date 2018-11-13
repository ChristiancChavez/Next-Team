import React from 'react';
import PropTypes from 'prop-types';
import './TeamList.scss';

const TeamList = ({ list, selectTeam }) => (
  <span className="teams">
    <span className="teams-container">
      {list.map(team => (
        <button className="teams-container-button" type="button" onClick={() => selectTeam(team)}>
          <span key={team} className="teams-button__option">{team}</span>
        </button>
      ))}
    </span>
  </span>
);
export default TeamList;

TeamList.propTypes = {
  list: PropTypes.objectOf.isRequired,
  selectTeam: PropTypes.func.isRequired,
};
