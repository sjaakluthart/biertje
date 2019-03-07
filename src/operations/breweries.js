import axios from 'axios';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import head from 'lodash/head';
import breweries from '../breweries.json';
import { actions as breweriesActions } from '../ducks/breweries';
import { actions as loadingActions } from '../ducks/loading';

// In an ideal world this API key should not be exposed! Use a custom backend to manage requests.
const postcodeAPIKey = 'iGgfNuX45o8H7O7IZEWXJ4LihqlP1r1v8FNE2Sy0';
// https://www.postcodeapi.nu/docs/

const getBreweries = () => (
  (dispatch) => {
    // this simulates an API request to get the breweries
    dispatch(loadingActions.start('breweries'));

    dispatch(breweriesActions.addMultiple(breweries.breweries));

    dispatch(loadingActions.stop('breweries'));
  }
);

const getCityByPostcodeResult = (dispatch, result) => {
  dispatch(loadingActions.stop('postcode'));

  const postcodes = get(result, 'data._embedded.postcodes') || [];

  if (isEmpty(postcodes)) {
    // TODO: Add error handling
    return false;
  }

  // The API responds with all postcodes for a given area but I only need the city's name...
  const city = get(head(postcodes), 'city.label');

  if (isEmpty(city)) {
    // TODO: Add error handling
    return false;
  }

  return dispatch(breweriesActions.setCurrentCity(city));
};

const getCityByPostcodeError = (dispatch, error) => {
  // TODO: Add error handling
  console.log(error); // eslint-disable-line no-console

  return dispatch(loadingActions.stop('postcode'));
};

const getCityByPostcode = postcodeArea => (
  (dispatch) => {
    const options = {
      url: 'https://api.postcodeapi.nu/v2/postcodes/',
      method: 'get',
      headers: {
        'X-Api-Key': postcodeAPIKey
      },
      params: {
        postcodeArea
      }
    };

    dispatch(loadingActions.start('postcode'));

    axios.request(options)
      .then(
        result => getCityByPostcodeResult(dispatch, result),
        error => getCityByPostcodeError(dispatch, error)
      );
  }
);

export {
  getBreweries,
  getCityByPostcode
};
