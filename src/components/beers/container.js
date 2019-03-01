import { connect } from 'react-redux';
import Album from './component';
import { selectors as beersSelectors } from '../../ducks/beers';
import { getBeers } from '../../operations/beers';

const mapStateToProps = state => ({
  beers: beersSelectors.getBeers(state.beers)
});

const mapDispatchToProps = dispatch => ({
  getBeers: () => dispatch(getBeers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);
