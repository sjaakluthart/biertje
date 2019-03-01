import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import reduce from 'lodash/reduce';
import omit from 'lodash/omit';
import union from 'lodash/union';
import includes from 'lodash/includes';

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
    (result, value) => ({
      ...result,
      [value.name]: value
    }),
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

const addStyle = (state, action) => {
  if (isEmpty(action.payload)) {
    return state;
  }

  const style = get(state, action.payload.style) || [];

  if (isEmpty(style)) {
    return {
      ...state,
      [action.payload.style]: [action.payload.name]
    }
  }

  if (includes(style, action.payload.name)) {
    return state;
  }

  return {
    ...state,
    [action.payload.style]: union(style, [action.payload.name])
  }
};

const addStyles = (state, action) => {
  if (isEmpty(action.payload)) {
    return state;
  }

  return reduce(
    action.payload,
    (result, value) => {
      const style = get(result, value.style) || [];

      if (isEmpty(style)) {
        return {
          ...result,
          [value.style]: [value.name]
        }
      }

      if (includes(style, value.name)) {
        return result;
      }

      return {
        ...result,
        [value.style]: union(style, [value.name])
      }
    },
    state
  )
}

// TODO: add remove style utils

export {
  add,
  addMultiple,
  remove,
  removeMultiple,
  addStyle,
  addStyles
};
