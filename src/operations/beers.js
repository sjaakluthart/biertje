import beers from '../beers.json';
import { actions as beersActions } from '../ducks/beers';

const getBeers = () => (
  dispatch => (
    // this simulates an API request to get the beers
    dispatch(beersActions.addMultiple(beers.beers))
  )
);

export {
  getBeers
};
