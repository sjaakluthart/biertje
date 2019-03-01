import * as types from './types';
import * as actions from './actions';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case types.START:

      break;
    case types.STOP:

      break;
    case types.CLEAR:

      break;
    case types.CLEAR_ALL:

      break;
    default:
      return state;
  }
};

export { actions };
