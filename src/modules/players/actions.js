import uuid from 'uuid/v4';

export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';

export const addPlayer = (name) => {
    const newPlayer = {
        name,
        id: uuid()
    }
    return {
        type: ADD_PLAYER,
        newPlayer
    }
};

export const removePlayer = (playerId) => ({
    type: REMOVE_PLAYER,
    playerId
});
