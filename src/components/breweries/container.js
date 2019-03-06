import { connect } from 'react-redux';
import Breweries from './component';
import { selectors as breweriesSelectors } from '../../ducks/breweries';
import { getBreweries, getCityByPostcode } from '../../operations/breweries';

const mapStateToProps = state => ({
  currentCity: breweriesSelectors.getCurrentCity(state.breweries)
});

const mapDispatchToProps = dispatch => ({
  getBreweries: () => dispatch(getBreweries()),
  getCityByPostcode: postcodeArea => dispatch(getCityByPostcode(postcodeArea))
});

export default connect(mapStateToProps, mapDispatchToProps)(Breweries);
