import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import reduce from 'lodash/reduce';
import omit from 'lodash/omit';

const add = (state, action) => {
  if (isEmpty(action.payload.name)) {
    return state;
  }

  const beer = get(state, action.payload.name);

  if (!isEmpty(beer)) {
    return state;
  }

  return {
    ...state,
    [action.payload.name]: action.payload
  };
};

const addMultiple = (state, action) => {
  if (isEmpty(action.payload)) {
    return state;
  }

  return reduce(
    action.payload,
    (result, value) => {
      console.log(result, value);
    },
    state
  )
}

const remove = (state, action) => {
  if (isEmpty(action.payload)) {
    return state;
  }

  const beer = get(state, action.payload);

  if (isEmpty(beer)) {
    return state;
  }

  return omit(state, action.payload);
};

const removeMultiple = (state, action) => {
  if (isEmpty(action.payload)) {
    return state;
  }

  // TODO: only remove existing beers by filtering state

  return omit(state, action.payload);
};

export {
  add,
  addMultiple,
  remove,
  removeMultiple
};
