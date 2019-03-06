import { combineReducers } from 'redux';
import * as types from './types';
import * as actions from './actions';
import * as utils from './utils';
import * as selectors from './selectors';

const byName = (state = {}, action = {}) => {
  switch (action.type) {
    case types.ADD: return utils.add(state, action);
    case types.ADD_MULTIPLE: return utils.addMultiple(state, action);
    case types.REMOVE: return utils.remove(state, action);
    case types.REMOVE_MULTIPLE: return utils.removeMultiple(state, action);
    default: return state;
  }
};

const byCity = (state = {}, action = {}) => {
  switch (action.type) {
    case types.ADD: return utils.addCity(state, action);
    case types.ADD_MULTIPLE: return utils.addCities(state, action);
    case types.REMOVE: return utils.add(state, action);
    case types.REMOVE_MULTIPLE: return utils.add(state, action);
    default: return state;
  }
};

const currentCity = (state = '', action = {}) => {
  switch (action.type) {
    case types.SET_CURRENT_CITY: return action.payload;
    default: return state;
  }
};

export default combineReducers({
  byName,
  byCity,
  currentCity
});

export {
  actions,
  selectors
};
