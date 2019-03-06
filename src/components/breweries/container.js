import { connect } from 'react-redux';
import Breweries from './component';
import { getBreweries, getCityByPostcode } from '../../operations/breweries';

const mapDispatchToProps = dispatch => ({
  getBreweries: () => dispatch(getBreweries()),
  getCityByPostcode: postcodeArea => dispatch(getCityByPostcode(postcodeArea))
});

export default connect(null, mapDispatchToProps)(Breweries);
