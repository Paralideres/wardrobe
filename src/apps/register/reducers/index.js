import { combineReducers } from 'redux';
import baseReducers from 'common/reducers/baseReducers';
import resource from './resource';

export default combineReducers(
  Object.assign({}, baseReducers, {
    resource
  })
);
