import { ADD_TEAM } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEAM:
      return [...state, action.newTeam];

    default:
      return state;
  }
};
