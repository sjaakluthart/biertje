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

  const brewery = get(state, action.payload.name);

  if (!isEmpty(brewery)) {
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
  );
};

const remove = (state, action) => {
  if (isEmpty(action.payload)) {
    return state;
  }

  const brewery = get(state, action.payload);

  if (isEmpty(brewery)) {
    return state;
  }

  return omit(state, action.payload);
};

const removeMultiple = (state, action) => {
  if (isEmpty(action.payload)) {
    return state;
  }

  // TODO: only remove existing breweries by filtering state

  return omit(state, action.payload);
};

const addCity = (state, action) => {
  if (isEmpty(action.payload)) {
    return state;
  }

  const city = get(state, action.payload.city) || [];

  if (isEmpty(city)) {
    return {
      ...state,
      [action.payload.city]: [action.payload.name]
    };
  }

  if (includes(city, action.payload.name)) {
    return state;
  }

  return {
    ...state,
    [action.payload.city]: union(city, [action.payload.name])
  };
};

const addCities = (state, action) => {
  if (isEmpty(action.payload)) {
    return state;
  }

  return reduce(
    action.payload,
    (result, value) => {
      const city = get(result, value.city) || [];

      if (isEmpty(city)) {
        return {
          ...result,
          [value.city]: [value.name]
        };
      }

      if (includes(city, value.name)) {
        return result;
      }

      return {
        ...result,
        [value.city]: union(city, [value.name])
      };
    },
    state
  );
};

// TODO: add remove city utils

export {
  add,
  addMultiple,
  remove,
  removeMultiple,
  addCity,
  addCities
};
