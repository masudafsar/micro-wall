import { AppActionEnum, type AppActionType, AppModeEnum, type AppStateType } from '.';

export function appReducer(prev: AppStateType, action: AppActionType): AppStateType {
  const next = { ...prev };
  switch (action.type) {
    case AppActionEnum.GO_TO_EDIT_MODE:
      next.mode = AppModeEnum.EDIT;
      break;
    case AppActionEnum.GO_TO_GUEST_MODE:
      next.mode = AppModeEnum.GUEST;
      break;
  }
  return next;
}
