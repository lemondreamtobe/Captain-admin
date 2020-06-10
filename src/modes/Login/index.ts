import ActionModeBase from '../ActionModeBase';
import callAPI from '../../helpers/fetch';
import {actionTypes, LoginParams} from './types';
import {FetchRes} from '../../global/types/fetch';

export class LoginMode extends ActionModeBase {
  async login(params: LoginParams): Promise<FetchRes<any>> {
    try {
      const res: any = await callAPI.get('/api/login', params);

      this.dispatch({
        type: actionTypes.SAVE_LOGIN_RES,
        payload: res.data
      });
      return res;
    } catch(e) {
      return Promise.reject(e);
    }
  }
}
