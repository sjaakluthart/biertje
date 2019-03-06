import { connect } from 'react-redux';
import BreweryList from './component';
import { selectors as breweriesSelectors } from '../../ducks/breweries';

const mapStateToProps = (state, ownProps) => ({
  breweries: breweriesSelectors.getBreweryNames(state.breweries),
  breweriesByCity: breweriesSelectors.getBreweryNamesByCity(state.breweries, ownProps.city)
});

export default connect(mapStateToProps)(BreweryList);
