import * as types from './types';

const add = beer => ({
  type: types.ADD,
  payload: beer
});

const addMultiple = beers => ({
  type: types.ADD_MULTIPLE,
  payload: beers
});

const remove = beer => ({
  type: types.REMOVE,
  payload: beer
});

const removeMultiple = beers => ({
  type: types.REMOVE_MULTIPLE,
  payload: beers
});

export {
  add,
  addMultiple,
  remove,
  removeMultiple
};
