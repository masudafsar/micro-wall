import { AppActionEnum, AppModeEnum } from './enums';

export type AppActionType = { type: AppActionEnum.GO_TO_EDIT_MODE } | { type: AppActionEnum.GO_TO_GUEST_MODE };

export type AppDispatchType = (value: AppActionType) => void;

export interface AppStateType {
  mode: AppModeEnum;
}

export interface AppContextType {
  state: AppStateType;
  dispatch: AppDispatchType;
}
