import React from 'react';
import PropTypes from 'prop-types';
import PpalConfiguration from './ppalConfiguration/PpalConfiguration';
import SecundaryConfiguration from './secundaryConfiguration/SecundaryConfiguration';
import TertiaryConfiguration from './tertiaryConfiguration/TertiaryConfiguration';
import './MatchConfiguration.scss';

const MatchConfiguration = (props) => {
  const {
    toggleAddPlayer,
  } = props;

  return (
    <div className="container">
      <PpalConfiguration
        toggleAddPlayer={toggleAddPlayer}
      />
      <SecundaryConfiguration />
      <TertiaryConfiguration />
    </div>
  );
};
export default MatchConfiguration;

MatchConfiguration.propTypes = {
  toggleAddPlayer: PropTypes.func.isRequired,
};
