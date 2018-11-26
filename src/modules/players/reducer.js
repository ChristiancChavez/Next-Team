import { ADD_PLAYER, DELETE_PLAYER, UPDATE_PLAYER } from './actions';

const InitialState = [];

export default (state = InitialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, action.payload];

    case DELETE_PLAYER: {
      const deletePlayer = [...state].filter(each => each.id !== action.payload);

      return deletePlayer;
    }

    case UPDATE_PLAYER: {
      const { payload } = action;

      const index = state.findIndex(
        player => player.id === payload.key
      );

      state[index].infoPlayer = {
        name: payload.name,
        number: payload.number
      };

      return state;
    }

    default:
      return state;
  }
};
