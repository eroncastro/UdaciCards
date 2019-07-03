import { AsyncStorage } from 'react-native';

const DECKS_KEY = 'UdaciCards:decks';

export function getDecks() {
  return AsyncStorage
    .getItem(DECKS_KEY)
    .then(decks => (decks ? JSON.parse(decks) : []))
    .catch(error => {
      if (__DEV__) {
        console.log(error);
      }
    });
}

export function saveDecks(decks) {
  return AsyncStorage
    .setItem(DECKS_KEY, JSON.stringify(decks))
    .catch(error => {
      if (__DEV__) {
        console.log(error);
      }
    });
}
