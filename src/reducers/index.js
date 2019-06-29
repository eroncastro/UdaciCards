import { combineReducers } from 'redux';

import cards from './cards';
import deck from './cards';
import loading from './cards';

export default combineReducers({ cards, decks, loading });
