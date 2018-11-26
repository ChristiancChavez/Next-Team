import uuid from 'uuid/v4';

export const ADD_PLAYER = 'ADD_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';

export const addPlayer = (infoPlayer) => ({
  type: ADD_PLAYER,
  payload: {
    infoPlayer,
    id: uuid()
  }
});

export const deletePlayer = (id) => ({
  type: DELETE_PLAYER,
  payload: id
});

export const updatePlayer = (name, number, key) => ({
  type: UPDATE_PLAYER,
  payload: {
    name,
    number,
    key
  }
});
