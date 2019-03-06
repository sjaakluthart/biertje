import get from 'lodash/get';
import has from 'lodash/has';
import omit from 'lodash/omit';

const start = (state, action) => {
  const loading = get(state, action.payload) || false;

  if (loading) {
    return state;
  }

  return {
    ...state,
    [action.payload]: true
  };
};

const stop = (state, action) => {
  const loading = get(state, action.payload) || false;

  if (!loading) {
    return state;
  }

  return {
    ...state,
    [action.payload]: true
  };
};

const clear = (state, action) => {
  if (!has(state, action.payload)) {
    return state;
  }

  return omit(state, action.payload);
};

const clearAll = () => ({});

export {
  start,
  stop,
  clear,
  clearAll
};
