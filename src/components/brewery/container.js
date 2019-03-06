import { connect } from 'react-redux';
import Brewery from './component';
import { selectors as breweriesSelectors } from '../../ducks/breweries';

const mapStateToProps = (state, ownProps) => ({
  brewery: breweriesSelectors.getBreweryByName(state.breweries, ownProps.name)
});

export default connect(mapStateToProps)(Brewery);
