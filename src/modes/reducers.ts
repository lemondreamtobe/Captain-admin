import { combineReducers } from 'redux-immutable';
import loginInfo from './Login/reducer';
import homeInfo from './Home/reducer';

export default function createReducer() {
  return combineReducers({
    loginInfo,
    homeInfo
  });
}