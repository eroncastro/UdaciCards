import { RECEIVE_DATA } from '../actions/types';

export default function (state = true, action) {
  switch(action.type) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}
