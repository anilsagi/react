import { combineReducers } from 'redux';
import counterReducer from './counter'
import loggedReducer from './IsLogged';
import userReducer from './UserReducer';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged:loggedReducer,
  users:userReducer,
 
 
});

export default allReducers;
