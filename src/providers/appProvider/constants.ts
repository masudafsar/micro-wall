import { type AppContextType, AppModeEnum, type AppStateType } from '.';

export const appStateDefaultValue: AppStateType = {
  mode: AppModeEnum.edit,
  blocks: [],
  isOpenNewBlockModal: false,
  isOpenSubmittedDataModal: false,
};
export const appContextDefaultValue: AppContextType = {
  state: appStateDefaultValue,
  dispatch: () => {},
};
