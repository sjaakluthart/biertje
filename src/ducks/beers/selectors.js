import get from 'lodash/get';
import keys from 'lodash/keys';

const getBeers = state => state.byName;
const getBeer = (state, name) => get(state.byName, name);
const getStyles = state => keys(state.byStyle);
const getBeersByStyle = (state, style) => get(state.byStyle, style);

export {
  getBeers,
  getBeer,
  getStyles,
  getBeersByStyle
};
