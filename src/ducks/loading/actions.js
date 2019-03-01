import * as types from './types';

const start = key => ({
  type: types.START,
  payload: key
});

const stop = key => ({
  type: types.STOP,
  payload: key
});

const clear = key => ({
  type: types.CLEAR,
  payload: clear
});

const clearAll = () => ({
  type: types.CLEAR_ALL
});

export {
  start,
  stop,
  clear,
  clearAll
};
