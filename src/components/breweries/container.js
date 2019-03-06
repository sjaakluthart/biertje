import { connect } from 'react-redux';
import Breweries from './component';
import { getBreweries } from '../../operations/breweries';

const mapDispatchToProps = dispatch => ({
  getBreweries: () => dispatch(getBreweries())
});

export default connect(null, mapDispatchToProps)(Breweries);
