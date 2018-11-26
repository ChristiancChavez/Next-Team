import React from 'react';
import PropTypes from 'prop-types';
import PpalConfiguration from './ppalConfiguration/PpalConfiguration';
import SecundaryConfiguration from './secundaryConfiguration/SecundaryConfiguration';
import TertiaryConfiguration from './tertiaryConfiguration/TertiaryConfiguration';
import './MatchConfiguration.scss';

const MatchConfiguration = (props) => {
  const {
    toggleAddPlayer,
    numberPlayers,
    handleOnChange,
    selectTeam,
    handlerShowTeamList,
    showTeamList,
    teamName,
  } = props;

  return (
    <div className="container">
      <PpalConfiguration
        toggleAddPlayer={toggleAddPlayer}
        numberPlayers={numberPlayers}
        handleOnChange={handleOnChange}
        selectTeam={selectTeam}
        handlerShowTeamList={handlerShowTeamList}
        showTeamList={showTeamList}
        teamName={teamName}
      />
      <SecundaryConfiguration />
      <TertiaryConfiguration />
    </div>
  );
};
export default MatchConfiguration;

MatchConfiguration.propTypes = {
  toggleAddPlayer: PropTypes.func.isRequired,
  selectTeam: PropTypes.func.isRequired,
  handlerShowTeamList: PropTypes.func.isRequired,
  numberPlayers: PropTypes.symbol.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  showTeamList: PropTypes.bool.isRequired,
  teamName: PropTypes.symbol.isRequired,
};
