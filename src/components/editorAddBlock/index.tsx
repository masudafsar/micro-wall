import { Box, Button } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { AppActionEnum, useAppState } from '@formaloo/providers';

export interface EditorAddBlockPropsType {}

export function EditorAddBlock({}: EditorAddBlockPropsType) {
  const [, appDispatch] = useAppState();

  function handleAddNewBlockClick() {
    appDispatch({ type: AppActionEnum.openNewBlockModal });
  }

  return (
    <Box
      sx={{
        height: '10rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '2px',
        borderStyle: 'dashed',
        borderColor: 'grey.500',
        backgroundColor: 'white',
        borderRadius: '1rem',
      }}
    >
      <Button
        size="large"
        color="inherit"
        variant="text"
        startIcon={<AddTwoToneIcon />}
        onClick={handleAddNewBlockClick}
      >
        Add New Block
      </Button>
    </Box>
  );
}
