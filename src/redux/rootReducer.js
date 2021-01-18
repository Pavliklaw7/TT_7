import { combineReducers } from 'redux';
import herosReducer from './heroesReducer';

const rootReducer = combineReducers({
  heros: herosReducer,
});

export default rootReducer;
