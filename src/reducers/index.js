import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
// gather reducers results
const rootReducer = combineReducers({
  authenticated: authenticationReducer
  // return boolean if user is logged in or not
});

export default rootReducer;
