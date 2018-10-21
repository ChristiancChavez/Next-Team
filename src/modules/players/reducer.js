import { ADD_PLAYER, REMOVE_PLAYER } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, action.newPlayer];

    case REMOVE_PLAYER: {
      const newList = [...state].filter(player => player.id !== action.playerId);
      return newList;
    }

    default:
      return state;
  }
};
