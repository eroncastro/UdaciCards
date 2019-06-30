import { ADD_CARD } from '../actions/card';
import { ADD_DECK } from '../actions/deck';
import { RECEIVE_DATA } from '../actions/shared';
import cardsReducer from './cards';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_CARD:
      const newState = state.reduce((decks, deck) => {
        if (deck.id !== action.card.deckId) return decks;

        return [
          ...decks,
          { ...deck, cards: cardsReducer(deck.cards, action) }
        ];
      }, []);

      return newState;
    case ADD_DECK:
      return [...state, action.deck];
    case RECEIVE_DATA:
      return [...state, ...action.decks];
    default:
      return state;
  }
}
