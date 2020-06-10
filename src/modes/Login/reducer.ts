import { fromJS } from 'immutable';
import {actionTypes} from './types';

export const initialState = fromJS({
  loginInfo: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_LOGIN_RES:
      return state.set('loginInfo', action.payload);
    default:
      return state;
  }
};