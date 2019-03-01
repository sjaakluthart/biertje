import get from 'lodash/get';

const getBeers = state => state.byName;
const getBeer = (state, name) => get(state, name);

export {
  getBeers,
  getBeer
};
