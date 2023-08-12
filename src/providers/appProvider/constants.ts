import { type AppContextType, AppModeEnum, type AppStateType } from '.';

export const appStateDefaultValue: AppStateType = {
  mode: AppModeEnum.EDIT,
  blocks: [],
};
export const appContextDefaultValue: AppContextType = {
  state: appStateDefaultValue,
  dispatch: () => {},
};
