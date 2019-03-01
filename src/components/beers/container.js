import { connect } from 'react-redux';
import Album from './component';
import { selectors as beersSelectors } from '../../ducks/beers';

const mapStateToProps = state => ({
  beers: beersSelectors.getBeers(state.beers)
});

export default connect(mapStateToProps)(Album);
