const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(decks, cards) {
  return { type: RECEIVE_DATA, decks, cards };
}

// TBD: Add handleInitialData
