import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
// add reducers in alphabetical order
const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
