import { combineReducers } from 'redux';
import resource from './resource';
import currentUser from './currentUser';

export default combineReducers({
  resource,
  currentUser
})
