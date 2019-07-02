import { ADD_CARD, RECEIVE_DATA } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_CARD:
      return [...state, action.card];
    case RECEIVE_DATA:
      return [...state, ...actions.cards];
    default:
      return state;
  }
}
