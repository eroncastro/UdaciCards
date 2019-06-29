import { ADD_DECK } from '../actions/deck';
import { RECEIVE_DATA } from '../actions/shared';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_DECK:
      return [...state, action.deck];
    case RECEIVE_DATA:
      return [...state, ...action.decks];
    default:
      return state;
  }
}
