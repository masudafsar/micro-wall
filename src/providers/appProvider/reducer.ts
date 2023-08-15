import { BlockType } from '@formaloo/types';
import { AppActionEnum, type AppActionType, AppModeEnum, type AppStateType } from '.';

export function appReducer(prev: AppStateType, action: AppActionType): AppStateType {
  const next = { ...prev };
  switch (action.type) {
    case AppActionEnum.goToEditMode:
      return goToEditMode(prev);
    case AppActionEnum.goToViewMode:
      return goToViewMode(prev);
    case AppActionEnum.openNewBlockModal:
      return openNewBlockModal(prev);
    case AppActionEnum.closeNewBlockModal:
      return closeNewBlockModal(prev);
    case AppActionEnum.addNewBlock:
      return addNewBlock(prev, action.payload);
    case AppActionEnum.updateBlock:
      return updateBlock(prev, action.payload);
    case AppActionEnum.removeBlock:
      return removeBlock(prev, action.uuid);
  }
  return next;
}

function goToEditMode(prev: AppStateType): AppStateType {
  const next = { ...prev };
  next.mode = AppModeEnum.edit;
  return next;
}

function goToViewMode(prev: AppStateType): AppStateType {
  const next = { ...prev };
  next.mode = AppModeEnum.view;
  return next;
}

function openNewBlockModal(prev: AppStateType): AppStateType {
  const next = { ...prev };
  next.isOpenNewBlockModal = true;
  return next;
}

function closeNewBlockModal(prev: AppStateType): AppStateType {
  const next = { ...prev };
  next.isOpenNewBlockModal = false;
  return next;
}

function addNewBlock(prev: AppStateType, payload: BlockType): AppStateType {
  const next = { ...prev };
  const isCalledTwice = next.blocks.findIndex((block) => block.data.uuid === payload.data.uuid) !== -1;
  if (!isCalledTwice) next.blocks.push(payload);
  return next;
}

function updateBlock(prev: AppStateType, payload: BlockType): AppStateType {
  const next = { ...prev };
  const blockIndex = next.blocks.findIndex((block) => block.data.uuid === payload.data.uuid);
  if (blockIndex !== -1) next.blocks[blockIndex] = payload;
  return next;
}

function removeBlock(prev: AppStateType, uuid: string): AppStateType {
  const next = { ...prev };
  const blockIndex = next.blocks.findIndex((block) => block.data.uuid === uuid);
  if (blockIndex !== -1) next.blocks.splice(blockIndex, 1);
  return next;
}
