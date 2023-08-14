import { Box, Divider, Fab, Stack } from '@mui/material';
import { AppActionEnum, useAppState } from '@formaloo/providers';
import { EditorAddBlock, NewBlockModal } from '@formaloo/components';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { MasterBlock } from './masterBlock';

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
      <Stack>
        {appState.blocks.map((block) => (
          <MasterBlock key={block.data.uuid} block={block} />
        ))}

        {appState.blocks.length !== 0 ? <Divider sx={{ my: 2 }} /> : undefined}

        <EditorAddBlock />
      </Stack>
      <NewBlockModal open={appState.isOpenNewBlockModal} onClose={handleDismissNewBlockModal} />

      <Fab color="primary" sx={{ position: 'fixed', bottom: '1rem', right: '1rem' }} onClick={handleAddNewBlockClick}>
        <AddTwoToneIcon />
      </Fab>
    </Box>
  );
}
