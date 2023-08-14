import { type BlockType } from '@formaloo/types';
import { AppActionEnum, AppModeEnum } from '.';

export type AppActionType =
  | { type: AppActionEnum.goToEditMode }
  | { type: AppActionEnum.goToViewMode }
  | { type: AppActionEnum.openNewBlockModal }
  | { type: AppActionEnum.closeNewBlockModal }
  | { type: AppActionEnum.addNewBlock; payload: BlockType }
  | { type: AppActionEnum.updateBlock; payload: BlockType }
  | { type: AppActionEnum.removeBlock; uuid: string };

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
