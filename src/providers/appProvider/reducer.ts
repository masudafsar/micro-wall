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
    case AppActionEnum.addNewBlock:
      {
        const isCalledTwice = next.blocks.findIndex((block) => block.data.uuid === action.payload.data.uuid) !== -1;
        !isCalledTwice && next.blocks.push(action.payload);
      }
      break;
    case AppActionEnum.updateBlock:
      {
        const blockIndex = next.blocks.findIndex((block) => block.data.uuid === action.payload.data.uuid);
        if (blockIndex === -1) break;
        next.blocks[blockIndex] = action.payload;
      }
      break;
    case AppActionEnum.removeBlock:
      {
        const blockIndex = next.blocks.findIndex((block) => block.data.uuid === action.uuid);
        if (blockIndex === -1) break;
        next.blocks.splice(blockIndex, 1);
      }
      break;
  }
  return next;
}
