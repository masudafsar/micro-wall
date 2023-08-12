import { AppActionEnum, AppModeEnum } from '.';
import type { BlockType } from '@formaloo/types';

export type AppActionType = { type: AppActionEnum.GO_TO_EDIT_MODE } | { type: AppActionEnum.GO_TO_GUEST_MODE };

export type AppDispatchType = (value: AppActionType) => void;

export interface AppStateType {
  mode: AppModeEnum;
  blocks: Array<BlockType>;
}

export interface AppContextType {
  state: AppStateType;
  dispatch: AppDispatchType;
}
