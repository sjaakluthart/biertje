import * as types from './types';

const add = brewery => ({
  type: types.ADD,
  payload: brewery
});

const addMultiple = breweries => ({
  type: types.ADD_MULTIPLE,
  payload: breweries
});

const remove = brewery => ({
  type: types.REMOVE,
  payload: brewery
});

const removeMultiple = breweries => ({
  type: types.REMOVE_MULTIPLE,
  payload: breweries
});

const setCurrentCity = city => ({
  type: types.SET_CURRENT_CITY,
  payload: city
});

const unsetCurrentCity = city => ({
  type: types.UNSET_CURRENT_CITY,
  payload: city
});

export {
  add,
  addMultiple,
  remove,
  removeMultiple,
  setCurrentCity,
  unsetCurrentCity
};
