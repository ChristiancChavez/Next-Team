import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTeam } from '../../modules/teams/actions';
import { addPlayer, deletePlayer, updatePlayer } from '../../modules/players/actions';
import CreateMatch from './CreateMatch';

const mapStateToProps = ({ teams, players }) => ({
  teams,
  players
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addTeam,
    addPlayer,
    deletePlayer,
    updatePlayer
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(CreateMatch);
