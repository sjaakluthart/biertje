import { connect } from 'react-redux';
import Beer from './component';
import { selectors as beersSelectors } from '../../ducks/beers';

const mapStateToProps = (state, ownProps) => ({
  beer: beersSelectors.getBeerByName(state.beers, ownProps.name)
});

export default connect(mapStateToProps)(Beer);
