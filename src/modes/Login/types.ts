import {generateActions} from "../../helpers/redux";

export const actionTypes = generateActions(
  'demo',
  [
    'SAVE_LOGIN_RES',
  ] as const
);

export interface LoginParams {
  username: string
  password: string
}