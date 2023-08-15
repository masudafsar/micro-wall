import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useAppState } from '@formaloo/providers';

export interface SubmittedDataModalPropsType {
  open: boolean;
  onClose?: () => void;
}

export function SubmittedDataModal({ open, onClose }: SubmittedDataModalPropsType) {
  const [appState] = useAppState();

  return (
    <Dialog open={open} onClose={onClose} fullScreen sx={{ zIndex: 2001 }}>
      <DialogTitle>Submitted Data</DialogTitle>
      <DialogContent>
        <Typography component="pre" variant="body2" sx={{ fontFamily: 'monospace', backgroundColor: 'grey.200', p: 1 }}>
          {JSON.stringify(appState.submittedData, null, 2)}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
