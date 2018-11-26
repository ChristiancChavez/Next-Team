import uuid from 'uuid/v4';

export const ADD_TEAM = 'ADD_TEAM';

export const addTeam = (name, nickname, players) => {
  const newTeam = {
    name,
    nickname,
    players,
    id: uuid()
  };
  return {
    type: ADD_TEAM,
    newTeam,
  };
};
