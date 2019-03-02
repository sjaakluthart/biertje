import get from 'lodash/get';
import keys from 'lodash/keys';
import pick from 'lodash/pick';
import flatMap from 'lodash/flatMap';

const getBeers = state => state.byName;
const getBeerNames = state => keys(state.byName);
const getBeerByName = (state, name) => get(state.byName, name);
const getStyles = state => keys(state.byStyle);
const getBeersNamesByStyle = (state, styles) => flatMap(pick(state.byStyle, styles));

export {
  getBeers,
  getBeerNames,
  getBeerByName,
  getStyles,
  getBeersNamesByStyle
};
