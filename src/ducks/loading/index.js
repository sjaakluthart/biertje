import * as types from './types';
import * as actions from './actions';
import * as utils from './utils';
import * as selectors from './selectors';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case types.START: return utils.start(state, action);
    case types.STOP: return utils.stop(state, action);
    case types.CLEAR: return utils.clear(state, action);
    case types.CLEAR_ALL: return utils.clearAll(state, action);
    default: return state;
  }
};

export {
  actions,
  selectors
};
