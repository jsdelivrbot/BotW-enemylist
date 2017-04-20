import { combineReducers } from 'redux';
import ActiveFoe from './activeFoe';
import ReducerFoes from './reducerFoes';


const rootReducer = combineReducers({
  foes: ReducerFoes,
  activeFoe: ActiveFoe
});

export default rootReducer;
