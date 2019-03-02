import { connect } from 'react-redux';
import BeerList from './component';
import { selectors as beersSelectors } from '../../ducks/beers';

const mapStateToProps = state => ({
  beers: beersSelectors.getBeerNames(state.beers)
});

export default connect(mapStateToProps)(BeerList);
