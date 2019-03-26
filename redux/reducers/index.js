import { combineReducers } from 'redux';
import scoresReducer from './scores.reducers';

const rootReducer = combineReducers({
  scoresReducer
});

export default rootReducer;