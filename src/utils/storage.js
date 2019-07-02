import AsyncStorage from '@react-native-community/async-storage';

const DECKS_KEY = 'flashcards:decks';

export async function getDecks() {
  try {
    const decks = await AsyncStorage.getItem(DECKS_KEY);
    return decks !== null ? JSON.parse(decks) : [];
  } catch (e) {
    if (__DEV__) {
      console.log(e);
    }
  }
}

export async function saveDecks(decks) {
  try {
    await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
  } catch (e) {
    if (__DEV__) {
      console.log(e);
    }
  }
}
