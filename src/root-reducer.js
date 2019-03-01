import { combineReducers } from 'redux';
import * as ducks from './ducks';

const rootReducer = combineReducers(ducks);

export default rootReducer;
