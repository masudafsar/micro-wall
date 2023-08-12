import { Box, Fab, Typography } from '@mui/material';
import { AppActionEnum, useAppState } from '@formaloo/providers';
import { EmptyBlock } from '@formaloo/components/block';
import { NewBlockModal } from '@formaloo/components/newBlockModal';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

export interface EditorPropsType {}

export function Editor({}: EditorPropsType) {
  const [appState, appDispatch] = useAppState();

  function handleAddNewBlockClick() {
    appDispatch({ type: AppActionEnum.openNewBlockModal });
  }

  function handleDismissNewBlockModal() {
    appDispatch({ type: AppActionEnum.closeNewBlockModal });
  }

  return (
    <Box>
      {appState.blocks.map((block) => (
        <Box key={block.data.uuid}>
          <Typography>{block.type}</Typography>
        </Box>
      ))}

      <EmptyBlock />

      <NewBlockModal open={appState.isOpenNewBlockModal} onClose={handleDismissNewBlockModal} />

      <Fab color="primary" sx={{ position: 'fixed', bottom: '1rem', right: '1rem' }} onClick={handleAddNewBlockClick}>
        <AddTwoToneIcon />
      </Fab>
    </Box>
  );
}
