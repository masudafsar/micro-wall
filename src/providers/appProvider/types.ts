import { type BlockType } from '@formaloo/types';
import { AppActionEnum, AppModeEnum } from '.';

export type AppActionType =
  | { type: AppActionEnum.goToEditMode }
  | { type: AppActionEnum.goToViewMode }
  | { type: AppActionEnum.openNewBlockModal }
  | { type: AppActionEnum.closeNewBlockModal }
  | { type: AppActionEnum.openSubmittedDataModal; payload?: unknown }
  | { type: AppActionEnum.closeSubmittedDataModal }
  | { type: AppActionEnum.addNewBlock; payload: BlockType }
  | { type: AppActionEnum.updateBlock; payload: BlockType }
  | { type: AppActionEnum.removeBlock; uuid: string }
  | { type: AppActionEnum.moveUpBlock; uuid: string }
  | { type: AppActionEnum.moveDownBlock; uuid: string };

export type AppDispatchType = (value: AppActionType) => void;

export interface AppStateType {
  mode: AppModeEnum;
  blocks: Array<BlockType>;
  isOpenNewBlockModal: boolean;
  isOpenSubmittedDataModal: boolean;
  submittedData?: unknown;
}

export interface AppContextType {
  state: AppStateType;
  dispatch: AppDispatchType;
}
