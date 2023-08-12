import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { BlockList } from '.';

export interface NewBlockModalPropsType {
  open: boolean;
  onClose: () => void;
}

export function NewBlockModal({ open, onClose }: NewBlockModalPropsType) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Block</DialogTitle>
      <DialogContent>
        <BlockList />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
