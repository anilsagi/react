import { combineReducers } from 'redux';
import faqReducer from './faqReducer';
import homeReducer from './homeReducer';
import LoginReducer from './LoginReducer';
import studentReducer from './StudentReducer';


const allReducers = combineReducers({
  students: studentReducer,
  faq:faqReducer,
  login:LoginReducer,
  Home:homeReducer
});

export default allReducers;