import { connect } from 'react-redux';
import Beer from './component';
import { selectors as beersSelectors } from '../../ducks/beers';
import { getBeers } from '../../operations/beers';

const mapStateToProps = state => ({
  beers: beersSelectors.getBeerNames(state.beers),
  styles: beersSelectors.getStyles(state.beers)
});

const mapDispatchToProps = dispatch => ({
  getBeers: () => dispatch(getBeers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
