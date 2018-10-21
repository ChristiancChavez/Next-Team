import { combineReducers } from 'redux';
import players from './players/reducer';

const mainReducer = combineReducers({
  players,
});

export default mainReducer;
