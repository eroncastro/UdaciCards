import { ADD_CARD } from './types';

export function addCard(card) {
  return { type: ADD_CARD, card };
}

// TBD: Add handleAddCard
// function handleAddCard(card) {}