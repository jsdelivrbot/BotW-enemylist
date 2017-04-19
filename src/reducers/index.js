import { combineReducers } from 'redux';
import ReducerFoes from './reducerFoes';


const rootReducer = combineReducers({
  foes: ReducerFoes
});

export default rootReducer;
