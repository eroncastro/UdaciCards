import { saveDecks } from '../utils/storage';

export const asyncStorageSync = store => next => action => {
  const result = next(action);
  const { decks } = store.getState();

  saveDecks(decks);

  return result;
};

