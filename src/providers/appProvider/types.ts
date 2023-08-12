import { AppActionEnum, AppModeEnum } from '.';
import type { BlockType } from '@formaloo/types';

export type AppActionType =
  | { type: AppActionEnum.goToEditMode }
  | { type: AppActionEnum.goToViewMode }
  | { type: AppActionEnum.openNewBlockModal }
  | { type: AppActionEnum.closeNewBlockModal };

export type AppDispatchType = (value: AppActionType) => void;

export interface AppStateType {
  mode: AppModeEnum;
  blocks: Array<BlockType>;
  isOpenNewBlockModal: boolean;
}

export interface AppContextType {
  state: AppStateType;
  dispatch: AppDispatchType;
}
