import { ADD_CARD } from '../actions/card';
import { ADD_DECK } from '../actions/deck';
import { RECEIVE_DATA } from '../actions/shared';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_CARD:
      return state.decks.reduce((decks, deck) => {
        if (deck.id !== action.deck.id) return decks;

        return Object.assign({}, deck, cards(deck.cards, action));
      }, []);
    case ADD_DECK:
      return [...state, action.deck];
    case RECEIVE_DATA:
      return [...state, ...action.decks];
    default:
      return state;
  }
}
