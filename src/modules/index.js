import { combineReducers } from 'redux';
import teams from './teams/reducer';
import players from './players/reducer';

const mainReducer = combineReducers({
  teams,
  players
});

export default mainReducer;
