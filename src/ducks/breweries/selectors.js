import get from 'lodash/get';
import keys from 'lodash/keys';
import pick from 'lodash/pick';
import flatMap from 'lodash/flatMap';

const getBreweries = state => state.byName;
const getBreweryNames = state => keys(state.byName);
const getBreweryByName = (state, name) => get(state.byName, name);
const getCities = state => keys(state.byCity);
const getBreweryNamesByCity = (state, cities) => flatMap(pick(state.byCity, cities));

export {
  getBreweries,
  getBreweryNames,
  getBreweryByName,
  getCities,
  getBreweryNamesByCity
};
