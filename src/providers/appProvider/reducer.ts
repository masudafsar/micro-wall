import { AppActionEnum, type AppActionType, AppModeEnum, type AppStateType } from '.';

export function appReducer(prev: AppStateType, action: AppActionType): AppStateType {
  const next = { ...prev };
  switch (action.type) {
    case AppActionEnum.goToEditMode:
      next.mode = AppModeEnum.edit;
      break;
    case AppActionEnum.goToViewMode:
      next.mode = AppModeEnum.view;
      break;
    case AppActionEnum.openNewBlockModal:
      next.isOpenNewBlockModal = true;
      break;
    case AppActionEnum.closeNewBlockModal:
      next.isOpenNewBlockModal = false;
      break;
  }
  return next;
}
