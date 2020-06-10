import {generateActions} from "../../helpers/redux";

export const actionTypes = generateActions(
  'home',
  [
    'SAVE_DEMO',
  ] as const
);