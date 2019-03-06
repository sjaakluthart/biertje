import breweries from '../breweries.json';
import { actions as breweriesActions } from '../ducks/breweries';

const getBreweries = () => (
  dispatch => (
    // this simulates an API request to get the breweries
    dispatch(breweriesActions.addMultiple(breweries.breweries))
  )
);

export {
  getBreweries // eslint-disable-line import/prefer-default-export
};
