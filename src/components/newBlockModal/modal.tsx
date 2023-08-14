import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { blocksInfo } from '@formaloo/constants';
import { BlockEnum } from '@formaloo/enums';
import { AppActionEnum, useAppState } from '@formaloo/providers';
import { type BlockType } from '@formaloo/types';
import { type BlockInfoType } from '@formaloo/types/block.type';
import { BlockList } from '.';

export interface NewBlockModalPropsType {
  open: boolean;
  onClose?: () => void;
}

export function NewBlockModal({ open, onClose }: NewBlockModalPropsType) {
  const [, appDispatch] = useAppState();

  function handleItemClick(type: BlockEnum) {
    const info: BlockInfoType = blocksInfo[type];

    appDispatch({
      type: AppActionEnum.addNewBlock,
      payload: {
        type: type,
        data: {
          uuid: uuid(),
          title: info.title,
        },
      } as BlockType,
    });
    onClose?.();
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Block</DialogTitle>
      <DialogContent>
        <BlockList onItemClick={handleItemClick} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
