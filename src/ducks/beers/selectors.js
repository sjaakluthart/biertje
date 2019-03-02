import get from 'lodash/get';
import keys from 'lodash/keys';
import pick from 'lodash/pick';

const getBeers = state => state.byName;
const getBeerNames = state => keys(state.byName);
const getBeerByName = (state, name) => get(state.byName, name);
const getStyles = state => keys(state.byStyle);
const getBeersByStyle = (state, styles) => pick(state.byStyle, styles);

export {
  getBeers,
  getBeerNames,
  getBeerByName,
  getStyles,
  getBeersByStyle
};
