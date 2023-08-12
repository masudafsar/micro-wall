import { type AppContextType, AppModeEnum, type AppStateType } from '.';

export const appStateDefaultValue: AppStateType = {
  mode: AppModeEnum.EDIT,
};
export const appContextDefaultValue: AppContextType = {
  state: appStateDefaultValue,
  dispatch: () => {},
};
