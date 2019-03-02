import { connect } from 'react-redux';
import BeerList from './component';
import { selectors as beersSelectors } from '../../ducks/beers';

const mapStateToProps = (state, ownProps) => ({
  beers: beersSelectors.getBeerNames(state.beers),
  beersByStyle: beersSelectors.getBeersNamesByStyle(state.beers, ownProps.styles)
});

export default connect(mapStateToProps)(BeerList);
