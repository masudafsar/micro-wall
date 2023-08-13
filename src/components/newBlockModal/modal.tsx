import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { BlockList } from '.';
import { AppActionEnum, useAppState } from '@formaloo/providers';
import { BlockType } from '@formaloo/types';
import { BlockEnum } from '@formaloo/enums';
import { v4 as uuid } from 'uuid';

export interface NewBlockModalPropsType {
  open: boolean;
  onClose?: () => void;
}

export function NewBlockModal({ open, onClose }: NewBlockModalPropsType) {
  const [, appDispatch] = useAppState();

  function handleItemClick(type: BlockEnum) {
    appDispatch({
      type: AppActionEnum.addNewBlock,
      payload: {
        type: type,
        data: {
          uuid: uuid(),
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
