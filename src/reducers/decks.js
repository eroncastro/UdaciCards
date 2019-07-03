import { ADD_CARD, ADD_DECK, RECEIVE_DATA } from '../actions/types';
import cardsReducer from './cards';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_CARD:
      return state.reduce((decks, deck) => {
        if (deck.id !== action.card.deckId) return decks.concat(deck);

        return [
          ...decks,
          { ...deck, cards: cardsReducer(deck.cards, action) }
        ];
      }, []);
    case ADD_DECK:
      return [...state, action.deck];
    case RECEIVE_DATA:
      return [...state, ...action.decks];
    default:
      return state;
  }
}
