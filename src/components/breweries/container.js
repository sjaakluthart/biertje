import { connect } from 'react-redux';
import Breweries from './component';
import { actions as breweriesActions, selectors as breweriesSelectors } from '../../ducks/breweries';
import { getBreweries, getCityByPostcode } from '../../operations/breweries';

const mapStateToProps = state => ({
  currentCity: breweriesSelectors.getCurrentCity(state.breweries)
});

const mapDispatchToProps = dispatch => ({
  unsetCurrentCity: () => dispatch(breweriesActions.unsetCurrentCity()),
  getBreweries: () => dispatch(getBreweries()),
  getCityByPostcode: postcodeArea => dispatch(getCityByPostcode(postcodeArea))
});

export default connect(mapStateToProps, mapDispatchToProps)(Breweries);
