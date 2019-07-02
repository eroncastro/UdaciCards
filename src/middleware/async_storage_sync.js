import { saveDecks } from '../utils/storage';

export const asyncStorageSync = store => next => action => {
  console.log(store.getState());
  const result = next(action);
  console.log(store.getState());

  const { decks } = store.getState();

  saveDecks(decks);

  return result;
};

