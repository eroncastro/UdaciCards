import { RECEIVE_DATA } from './types';
import { getDecks } from '../utils/storage';

function receiveData(decks) {
  return { type: RECEIVE_DATA, decks };
}

export function handleInitialData() {
  return dispatch => {
    return getDecks()
      .then(decks => {
        dispatch(receiveData(decks))
      });
  };
}
