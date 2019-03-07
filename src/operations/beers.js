import beers from '../beers.json';
import { actions as beersActions } from '../ducks/beers';
import { actions as loadingActions } from '../ducks/loading';

const getBeers = () => (
  (dispatch) => {
    // this simulates an API request to get the beers
    dispatch(loadingActions.start('beers'));

    dispatch(beersActions.addMultiple(beers.beers));

    dispatch(loadingActions.stop('beers'));
  }
);

export {
  getBeers // eslint-disable-line import/prefer-default-export
};
