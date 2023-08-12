import { type AppContextType, type AppStateType } from './types';
import { AppModeEnum } from './enums';

export const appStateDefaultValue: AppStateType = {
  mode: AppModeEnum.EDIT,
};
export const appContextDefaultValue: AppContextType = {
  state: appStateDefaultValue,
  dispatch: () => {},
};
