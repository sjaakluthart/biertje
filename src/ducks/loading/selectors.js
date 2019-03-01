import get from 'lodash/get';

const isLoading = (state, key) => get(state, key) || false;

export {
  isLoading
};
